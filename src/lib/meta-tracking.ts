/**
 * Meta Conversions API (CAPI) & GTM Deduplication Tracking Helper
 * 
 * Permite disparar eventos simultâneos para o dataLayer (Google Tag Manager)
 * e para a Meta Conversions API (/api/meta-capi) compartilhando o mesmo `event_id`.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

export interface MetaUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  [key: string]: any;
}

export interface MetaCustomData {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  channel?: string;
  lp_source?: string;
  [key: string]: any;
}

export interface TrackMetaEventOptions {
  eventId?: string;
  fbp?: string;
  fbc?: string;
  userData?: MetaUserData;
  customData?: MetaCustomData;
}

/**
 * Utilitário para ler o valor de um cookie específico pelo nome
 */
function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Lê os cookies `_fbp` e `_fbc` do navegador.
 * Se houver o parâmetro `fbclid` na URL e o cookie `_fbc` ainda não existir,
 * monta o `_fbc` no formato oficial da Meta (`fb.1.${Date.now()}.${fbclid}`)
 * e salva em `domain=.lottici.com.br; path=/; max-age=7776000; SameSite=Lax`.
 */
export function getMetaCookies(): { fbp?: string; fbc?: string } {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {};
  }

  const fbp = getCookie("_fbp");
  let fbc = getCookie("_fbc");

  // Se não houver _fbc, verifica se o usuário chegou via clique de anúncio com fbclid na URL
  if (!fbc) {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const fbclid = urlParams.get("fbclid");
      if (fbclid) {
        const creationTime = Date.now();
        fbc = `fb.1.${creationTime}.${fbclid}`;

        // Salva nos cookies compartilhado entre os subdomínios da Lottici
        const isLottici = window.location.hostname.includes("lottici.com.br");
        const domainAttr = isLottici ? "domain=.lottici.com.br; " : "";
        document.cookie = `_fbc=${encodeURIComponent(fbc)}; ${domainAttr}path=/; max-age=7776000; SameSite=Lax`;
      }
    } catch {
      // Ignora falhas de parse de URL para garantir execução segura
    }
  }

  return { fbp, fbc };
}

/**
 * Gera um identificador único de evento para garantir a deduplicação
 * entre o Meta Pixel (via GTM no navegador) e a Meta Conversions API (server-side).
 */
export function generateEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Obtém o subdomínio ou hostname atual do navegador
 */
export function getCurrentLpSource(): string {
  if (typeof window !== "undefined" && window.location.hostname) {
    return window.location.hostname;
  }
  return "unknown";
}

/**
 * Função principal de rastreamento Meta com deduplicação:
 * 1. Gera ou usa o `eventId` único;
 * 2. Identifica o subdomínio atual (`lpSource`);
 * 3. Envia para o `window.dataLayer` (GTM);
 * 4. Envia em paralelo um POST `keepalive` para `/api/meta-capi`.
 */
export function trackMetaEvent(
  eventName: string,
  options?: TrackMetaEventOptions
): string {
  const eventId = options?.eventId || generateEventId();
  const lpSource = getCurrentLpSource();
  const metaCookies = getMetaCookies();
  const fbp = options?.fbp || metaCookies.fbp;
  const fbc = options?.fbc || metaCookies.fbc;
  const userData = options?.userData || {};
  const customData = options?.customData || {};

  // 1. Envio para o Google Tag Manager (dataLayer)
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "meta_capi_event",
      meta_event_name: eventName,
      meta_event_id: eventId,
      lp_source: lpSource,
      user_data: {
        ...userData,
        ...(fbp ? { fbp } : {}),
        ...(fbc ? { fbc } : {}),
      }, // Dados limpos para Advanced Matching no GTM
      custom_data: {
        ...customData,
        lp_source: lpSource,
      },
    });
  }

  // 2. Envio Server-Side para /api/meta-capi (Conversions API)
  if (typeof window !== "undefined") {
    const eventSourceUrl = window.location.href;

    try {
      fetch("/api/meta-capi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        keepalive: true,
        body: JSON.stringify({
          eventName,
          eventId,
          eventSourceUrl,
          lpSource,
          fbp,
          fbc,
          userData,
          customData,
        }),
      }).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          console.debug("[Meta CAPI Dispatch Error]", err);
        }
      });
    } catch (e) {
      // Ignora falha de disparo síncrono para nunca quebrar a interface do usuário
    }
  }

  return eventId;
}

/**
 * Helper para rastrear cliques em botões de ação e WhatsApp (Evento 'Contact')
 */
export function trackWhatsAppClick(
  ctaName: string,
  customData?: MetaCustomData
): string {
  return trackMetaEvent("Contact", {
    customData: {
      content_name: ctaName,
      channel: "WhatsApp",
      ...customData,
    },
  });
}

/**
 * Helper para rastrear envio de formulários ou geração de leads (Evento 'Lead')
 */
export function trackLead(
  userData: MetaUserData,
  customData?: MetaCustomData
): string {
  return trackMetaEvent("Lead", {
    userData,
    customData: {
      content_name: "Formulário de Contato / Lead",
      ...customData,
    },
  });
}
