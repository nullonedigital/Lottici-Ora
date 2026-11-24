import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface UserDataInput {
  email?: string;
  em?: string;
  phone?: string;
  ph?: string;
  firstName?: string;
  fn?: string;
  lastName?: string;
  ln?: string;
  name?: string;
  [key: string]: any;
}

interface MetaCapiRequestBody {
  eventName?: string;
  eventId?: string;
  eventSourceUrl?: string;
  lpSource?: string;
  fbp?: string;
  fbc?: string;
  userData?: UserDataInput;
  customData?: Record<string, any>;
}

/**
 * Normaliza e calcula o hash SHA-256 (em minúsculas, sem espaços)
 */
function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/**
 * Normalização e hash de E-mail
 */
function normalizeAndHashEmail(email?: string): string[] | undefined {
  if (!email || typeof email !== "string") return undefined;
  const clean = email.trim().toLowerCase();
  if (!clean || !clean.includes("@")) return undefined;
  return [sha256(clean)];
}

/**
 * Normalização e hash de Telefone
 * Remove caracteres não numéricos e adiciona DDI 55 se for número brasileiro (10 ou 11 dígitos) sem DDI.
 */
function normalizeAndHashPhone(phone?: string): string[] | undefined {
  if (!phone || typeof phone !== "string") return undefined;
  let digits = phone.replace(/\D/g, "");
  if (!digits) return undefined;

  // Se tiver 10 (fixo com DDD) ou 11 (celular com DDD) dígitos, adiciona o DDI do Brasil (55)
  if (digits.length === 10 || digits.length === 11) {
    digits = "55" + digits;
  }

  return [sha256(digits)];
}

/**
 * Normalização e hash de Nomes
 */
function normalizeAndHashName(name?: string): string[] | undefined {
  if (!name || typeof name !== "string") return undefined;
  const clean = name.trim().toLowerCase();
  if (!clean) return undefined;
  return [sha256(clean)];
}

export async function POST(req: NextRequest) {
  try {
    const body: MetaCapiRequestBody = await req.json().catch(() => ({}));

    const {
      eventName,
      eventId,
      eventSourceUrl,
      lpSource,
      fbp: bodyFbp,
      fbc: bodyFbc,
      userData = {},
      customData = {},
    } = body;

    if (!eventName || !eventId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required parameters: eventName and eventId are mandatory",
        },
        { status: 400 }
      );
    }

    // Variáveis de ambiente da Meta
    const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
    const testEventCode = process.env.META_TEST_EVENT_CODE;

    // Se as variáveis não estiverem configuradas, retorna aviso controlado sem derrubar o cliente
    if (!pixelId || !accessToken) {
      console.warn(
        "[Meta CAPI] Variáveis de ambiente META_PIXEL_ID ou META_CAPI_ACCESS_TOKEN não configuradas no servidor. O evento foi registrado localmente mas não foi despachado para a Meta Graph API."
      );
      return NextResponse.json(
        {
          success: false,
          warning: "Meta CAPI credentials are not configured in environment variables",
          eventId,
          eventName,
        },
        { status: 200 }
      );
    }

    // 1. Extrair IP do Cliente (pega o primeiro IP de x-forwarded-for ou fallback)
    const forwardedFor = req.headers.get("x-forwarded-for");
    let clientIp = "";
    if (forwardedFor) {
      clientIp = forwardedFor.split(",")[0].trim();
    } else {
      clientIp = req.headers.get("x-real-ip") || "";
    }

    // 2. Extrair User Agent
    const clientUserAgent = req.headers.get("user-agent") || "";

    // 3. Extrair Cookies _fbp e _fbc (Meta Browser ID e Click ID)
    // Aceita fallback vindo do body caso os cookies ainda não estejam presentes nos headers HTTP no primeiro carregamento
    const fbp = req.cookies.get("_fbp")?.value || bodyFbp || userData?.fbp;
    const fbc = req.cookies.get("_fbc")?.value || bodyFbc || userData?.fbc;

    // 4. Montar User Data Payload (com hashes onde exigido)
    const userDataPayload: Record<string, any> = {};

    // Dados de rede (NUNCA recebem hash)
    if (clientIp && clientIp !== "::1" && clientIp !== "127.0.0.1") {
      userDataPayload.client_ip_address = clientIp;
    }
    if (clientUserAgent) {
      userDataPayload.client_user_agent = clientUserAgent;
    }
    if (fbp) {
      userDataPayload.fbp = fbp;
    }
    if (fbc) {
      userDataPayload.fbc = fbc;
    }

    // Normalização e Hash de E-mail
    const emailToHash = userData.email || userData.em;
    const hashedEmail = normalizeAndHashEmail(emailToHash);
    if (hashedEmail) {
      userDataPayload.em = hashedEmail;
    }

    // Normalização e Hash de Telefone
    const phoneToHash = userData.phone || userData.ph;
    const hashedPhone = normalizeAndHashPhone(phoneToHash);
    if (hashedPhone) {
      userDataPayload.ph = hashedPhone;
    }

    // Normalização e Hash de Primeiro e Último Nome
    let firstName = userData.firstName || userData.fn;
    let lastName = userData.lastName || userData.ln;

    if (!firstName && userData.name && typeof userData.name === "string") {
      const parts = userData.name.trim().split(/\s+/);
      firstName = parts[0];
      if (parts.length > 1) {
        lastName = parts.slice(1).join(" ");
      }
    }

    const hashedFn = normalizeAndHashName(firstName);
    if (hashedFn) {
      userDataPayload.fn = hashedFn;
    }

    const hashedLn = normalizeAndHashName(lastName);
    if (hashedLn) {
      userDataPayload.ln = hashedLn;
    }

    // 5. Estruturar evento para a Meta Conversions API (v21.0)
    const eventTime = Math.floor(Date.now() / 1000);

    const eventPayload: Record<string, any> = {
      event_name: eventName,
      event_time: eventTime,
      event_id: eventId,
      event_source_url: eventSourceUrl || req.headers.get("referer") || "",
      action_source: "website",
      user_data: userDataPayload,
      custom_data: {
        lp_source: lpSource || req.headers.get("host") || "unknown",
        ...customData,
      },
    };

    const graphPayload: Record<string, any> = {
      data: [eventPayload],
      access_token: accessToken,
    };

    if (testEventCode) {
      graphPayload.test_event_code = testEventCode.trim();
    }

    // 6. Enviar para a Meta Graph API
    const metaApiUrl = `https://graph.facebook.com/v21.0/${pixelId}/events`;

    const metaResponse = await fetch(metaApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphPayload),
    });

    const metaResult = await metaResponse.json().catch(() => ({}));

    if (!metaResponse.ok) {
      console.error("[Meta CAPI Error Response]", metaResult);
      return NextResponse.json(
        {
          success: false,
          error: metaResult,
          eventId,
        },
        { status: 200 } // Retorna 200 controlado para manter a estabilidade do client
      );
    }

    return NextResponse.json({
      success: true,
      events_received: metaResult.events_received,
      fbtrace_id: metaResult.fbtrace_id,
      eventId,
    });
  } catch (err: any) {
    console.error("[Meta CAPI Unexpected Error]", err);
    return NextResponse.json(
      {
        success: false,
        error: err?.message || "Internal server error while processing Meta CAPI event",
      },
      { status: 200 }
    );
  }
}
