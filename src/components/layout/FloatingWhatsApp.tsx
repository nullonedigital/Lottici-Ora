"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/meta-tracking";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed in this session
    try {
      if (sessionStorage.getItem("ora_wa_tooltip_dismissed") === "true") {
        setIsDismissed(true);
      }
    } catch {
      // ignore
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const distanceFromBottom = docHeight - (scrollY + winHeight);

      // Only show after scrolling past 200px
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // If user reaches footer area, auto-hide tooltip to leave credits 100% visible
      if (distanceFromBottom < 300) {
        setShowTooltip(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Show tooltip after 4 seconds only if not dismissed
    const timer = setTimeout(() => {
      try {
        const dismissed = sessionStorage.getItem("ora_wa_tooltip_dismissed") === "true";
        if (!dismissed) {
          setShowTooltip(true);
        }
      } catch {
        setShowTooltip(true);
      }
    }, 4000);

    // Auto-hide tooltip after 14 seconds
    const autoHideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 14000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(autoHideTimer);
    };
  }, []);

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setIsDismissed(true);
    try {
      sessionStorage.setItem("ora_wa_tooltip_dismissed", "true");
    } catch {
      // ignore
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Atendimento rápido por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 animate-fadeIn"
    >
      {/* Speech bubble prompt positioned ABOVE the button */}
      {showTooltip && !isDismissed && (
        <div
          role="status"
          className="relative max-w-[280px] sm:max-w-[320px] bg-[#073B32] text-white text-xs font-medium pl-4 pr-2 py-2.5 rounded-2xl shadow-2xl border border-[#C9974A]/40 flex items-center justify-between gap-2.5 animate-slideIn backdrop-blur-md"
        >
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.floating)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Botão Flutuante WhatsApp (Balão)")}
            className="flex-1 hover:text-[#DFB772] transition-colors leading-snug cursor-pointer select-none"
          >
            Olá! Converse com nosso consultor no WhatsApp
          </a>

          <button
            type="button"
            onClick={handleDismissTooltip}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer shrink-0 focus:outline-none focus:ring-1 focus:ring-[#C9974A]"
            aria-label="Fechar mensagem"
            title="Fechar mensagem"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Pointer Arrow pointing DOWN directly at the WhatsApp icon */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#073B32] rotate-45 border-r border-b border-[#C9974A]/40" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.floating)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("Botão Flutuante WhatsApp (Ícone)")}
        aria-label="Falar com consultor do Residencial ORA no WhatsApp"
        className="relative group p-1 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 group-hover:opacity-100 pointer-events-none" />
        <div className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-[#25D366]">
          <Image
            src="/images/branding/whatsapp_float.png"
            alt="WhatsApp"
            width={48}
            height={48}
            className="w-10 h-10 object-contain drop-shadow"
          />
        </div>
      </a>
    </aside>
  );
}

