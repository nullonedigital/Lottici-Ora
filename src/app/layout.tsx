import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#073B32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lottici.com.br"),
  title: "Residencial ORA em Canoas | Apartamentos de 2 e 3 Dormitórios | Lottici",
  description:
    "Conheça o Residencial ORA da Lottici em Canoas/RS. Apartamentos de 2 e 3 dormitórios, áreas de lazer, piscinas, coworking e muito mais.",
  keywords: SITE_CONFIG.metaKeywords,
  authors: [{ name: "Lottici Construtora e Incorporadora" }],
  creator: "Growth2Digital — https://growth2digital.com.br",
  publisher: "Lottici Construtora",
  alternates: {
    canonical: "/empreendimentos-ora/",
  },
  openGraph: {
    title: "Residencial ORA em Canoas | Apartamentos de 2 e 3 Dormitórios | Lottici",
    description:
      "Conheça o Residencial ORA da Lottici em Canoas/RS. Apartamentos de 2 e 3 dormitórios, sacada com churrasqueira, piscinas e lazer completo na região Igara/São José.",
    url: "https://lottici.com.br/empreendimentos-ora/",
    siteName: "Residencial ORA — Lottici Construtora",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero/fachada-torre-b.png",
        width: 1920,
        height: 1080,
        alt: "Fachada do Residencial ORA em Canoas — Lottici Construtora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residencial ORA em Canoas | Apartamentos de 2 e 3 Dormitórios | Lottici",
    description:
      "Apartamentos de 2 e 3 dormitórios com sacada e churrasqueira na região Igara/São José em Canoas/RS. Lançamento da Lottici Construtora.",
    images: ["/images/hero/fachada-torre-b.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Residencial ORA",
    alternateName: "ORA Condomínio Residencial",
    description:
      "Empreendimento residencial em Canoas/RS da Lottici Construtora, com apartamentos de 2 e 3 dormitórios com sacada e churrasqueira, piscinas adulto e infantil, espaço gourmet, coworking, playground e quadra esportiva.",
    url: "https://lottici.com.br/empreendimentos-ora/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Pirapó, 1553",
      addressLocality: "Canoas",
      addressRegion: "RS",
      postalCode: "92410-240",
      addressCountry: "BR",
    },
    telephone: "+55 51 99204-9182",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Piscina adulto e infantil", value: true },
      { "@type": "LocationFeatureSpecification", name: "Espaço Gourmet com Parrilla", value: true },
      { "@type": "LocationFeatureSpecification", name: "Salão de Festas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Espaço Fitness Funcional", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sala de Jogos & Brinquedoteca", value: true },
      { "@type": "LocationFeatureSpecification", name: "Quadra Esportiva Infantil", value: true },
      { "@type": "LocationFeatureSpecification", name: "Coworking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sacada com churrasqueira", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vaga de garagem privativa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Apartamentos Garden", value: true },
    ],
    seller: {
      "@type": "RealEstateAgent",
      name: "Lottici Construtora e Incorporadora",
      telephone: "+55 51 3476-1403",
      url: "https://lottici.com.br/",
    },
  };

  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${SITE_CONFIG.gtmId}');`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-[#FAF8F5] text-[#082D29] selection:bg-[#C9974A] selection:text-[#082D29]"
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE_CONFIG.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
