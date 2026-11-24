"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, Globe, ExternalLink, ShieldCheck } from "lucide-react";
import { OraLogo } from "../ui/BrandLogo";
import { SITE_CONFIG, CONTACT_CONFIG } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/meta-tracking";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05241E] text-[#FAF8F5] pt-16 pb-10 border-t border-[#C9974A]/20 relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#073B32] rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9974A] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: ORA Brand & Intro */}
          <div className="space-y-4">
            <OraLogo variant="light" size="lg" />
            <p className="text-sm text-[#F3EFE6]/75 leading-relaxed pt-2">
              Um projeto contemporâneo da Lottici que reúne conforto, conveniência e lazer completo na valorizada região Igara/São José, em Canoas/RS.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com um consultor comercial do Residencial ORA.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("WhatsApp Rodapé (Botão)")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9974A] text-[#082D29] text-xs font-semibold hover:bg-[#DFB772] transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Fale pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#C9974A] uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#F3EFE6]/80">
              <li>
                <Link href="#apresentacao" className="hover:text-[#C9974A] transition-colors">
                  O Empreendimento
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-[#C9974A] transition-colors">
                  Diferenciais Exclusivos
                </Link>
              </li>
              <li>
                <Link href="#lazer" className="hover:text-[#C9974A] transition-colors">
                  Infraestrutura & Lazer
                </Link>
              </li>
              <li>
                <Link href="#apartamentos" className="hover:text-[#C9974A] transition-colors">
                  Apartamentos Decorados
                </Link>
              </li>
              <li>
                <Link href="#plantas" className="hover:text-[#C9974A] transition-colors">
                  Opções de Plantas
                </Link>
              </li>
              <li>
                <Link href="#localizacao" className="hover:text-[#C9974A] transition-colors">
                  Localização Privilegiada
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#C9974A] transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Real Estate Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#C9974A] uppercase tracking-wider">
              Contato Comercial
            </h4>
            <ul className="space-y-3 text-sm text-[#F3EFE6]/80">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C9974A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50">WhatsApp Comercial</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("WhatsApp Rodapé (Link)")}
                    className="hover:text-[#C9974A] transition-colors font-medium text-white"
                  >
                    {CONTACT_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9974A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50">Telefone Fixo</span>
                  <a
                    href={`tel:5134761403`}
                    className="hover:text-[#C9974A] transition-colors font-medium text-white"
                  >
                    {CONTACT_CONFIG.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9974A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-white/50">Endereço do Empreendimento</span>
                  <span className="text-xs leading-relaxed text-[#F3EFE6]/90">
                    {SITE_CONFIG.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Developer */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#C9974A] uppercase tracking-wider">
              Realização
            </h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
              <div className="h-9 relative w-36">
                <Image
                  src="/images/branding/Logo.svg"
                  alt="Lottici Construtora e Incorporadora"
                  fill
                  className="object-contain object-left brightness-0 invert opacity-95"
                />
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Mais de 44 anos de tradição, solidez e credibilidade na construção civil em Canoas e Região Metropolitana.
              </p>
              <div className="pt-1">
                <a
                  href={SITE_CONFIG.developer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C9974A] hover:text-[#DFB772] inline-flex items-center gap-1 font-medium transition-colors"
                >
                  Conheça a construtora
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] text-white/50 leading-relaxed">
          <p>
            *Todas as imagens, plantas, ilustrações artísticas, perspectivas e acabamentos apresentados nesta página são de caráter exclusivamente promocional e ilustrativo, podendo sofrer pequenas alterações durante o desenvolvimento executivo ou necessidades técnicas da obra, de acordo com o memorial descritivo devidamente registrado junto aos órgãos competentes. As unidades Garden possuem áreas privativas privativas compostas por área construída e pátio descoberto, conforme especificação das unidades térreas de finais 02, 04, 06 e 08.
          </p>
        </div>

        {/* Bottom Credits Bar with Mandatory Growth2Digital link and logo */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {currentYear} Residencial ORA · Lottici Construtora e Incorporadora. Todos os direitos reservados.
          </div>

          {/* MANDATORY CREDIT: Desenvolvido por Growth2Digital (Shifted to clear floating action button) */}
          <div className="flex items-center gap-2.5 sm:pr-24 lg:pr-28">
            <span className="text-xs text-white/70">Desenvolvido por</span>
            <a
              href="https://growth2digital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity focus:outline-none focus:ring-1 focus:ring-[#C9974A] rounded px-1.5 py-0.5"
              title="Growth2Digital - Marketing e Desenvolvimento Digital"
            >
              <Image
                src="/images/branding/Growth2DigitalBranco.png"
                alt="Growth2Digital"
                width={160}
                height={45}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

