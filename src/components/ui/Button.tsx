"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackWhatsAppClick } from "@/lib/meta-tracking";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  trackCtaName?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  iconPosition = "left",
  className,
  children,
  trackCtaName,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9974A] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#C9974A] text-[#082D29] font-semibold hover:bg-[#DFB772] shadow-md hover:shadow-lg hover:shadow-[#C9974A]/20 border border-[#DFB772]/40",
    secondary:
      "bg-[#073B32] text-[#FAF8F5] hover:bg-[#0E4F43] border border-[#C9974A]/30 shadow-md",
    outline:
      "bg-transparent text-[#073B32] border border-[#073B32]/30 hover:border-[#073B32] hover:bg-[#073B32]/5",
    whatsapp:
      "bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] shadow-md hover:shadow-lg hover:shadow-[#25D366]/25 border border-[#25D366]/30",
    ghost:
      "bg-transparent text-[#073B32] hover:text-[#C9974A] hover:bg-black/5 px-3 py-2",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const handleClick = (e: React.MouseEvent<any>) => {
    if (onClick) {
      onClick(e);
    }

    const isWhatsApp =
      variant === "whatsapp" ||
      (href && (href.includes("wa.me") || href.includes("whatsapp")));

    if (isWhatsApp || trackCtaName) {
      const ctaLabel =
        trackCtaName ||
        (typeof children === "string" ? children : "Botão CTA / WhatsApp");

      trackWhatsAppClick(ctaLabel, {
        cta_href: href,
        cta_variant: variant,
      });
    }
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}

