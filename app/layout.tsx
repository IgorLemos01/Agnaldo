import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agnaldo Oliveira | Psicopedagogo, Especialista ABA e Neuropsicopedagogo",
  description:
    "Atendimento especializado em psicopedagogia, ABA e neuropsicopedagogia para crianças e adolescentes. Agnaldo Oliveira oferece avaliação, intervenção e acompanhamento personalizado para dificuldades de aprendizagem, TDAH, TEA e desenvolvimento cognitivo.",
  keywords: [
    "psicopedagogia",
    "ABA",
    "neuropsicopedagogia",
    "desenvolvimento infantil",
    "dificuldades de aprendizagem",
    "TDAH",
    "TEA",
    "pedagogo",
    "Agnaldo Oliveira",
    "avaliação psicopedagógica",
    "intervenção ABA",
    "desenvolvimento cognitivo",
    "educação especial",
  ],
  authors: [{ name: "Agnaldo Oliveira" }],
  creator: "Agnaldo Oliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://agnaldooliveira.com.br",
    siteName: "Agnaldo Oliveira | Psicopedagogo",
    title: "Agnaldo Oliveira | Transformando desenvolvimento em possibilidades reais",
    description:
      "Atendimento especializado em psicopedagogia, ABA e neuropsicopedagogia. Agende uma avaliação e descubra como podemos ajudar no desenvolvimento da sua criança.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agnaldo Oliveira - Psicopedagogo, Especialista ABA e Neuropsicopedagogo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agnaldo Oliveira | Psicopedagogo",
    description:
      "Atendimento especializado em psicopedagogia, ABA e neuropsicopedagogia para crianças e adolescentes.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://agnaldooliveira.com.br/#person",
        name: "Agnaldo Oliveira",
        jobTitle: "Psicopedagogo e Neuropsicopedagogo",
        description:
          "Pedagogo, Psicopedagogo (ABPp/SE nº 730), Especialista em ABA e Neuropsicopedagogo",
        url: "https://agnaldooliveira.com.br",
        sameAs: ["https://www.instagram.com/agnaldoneuropp"],
        knowsAbout: [
          "Psicopedagogia",
          "ABA - Análise do Comportamento Aplicada",
          "Neuropsicopedagogia",
          "TDAH",
          "TEA",
          "Desenvolvimento Cognitivo",
          "Dificuldades de Aprendizagem",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://agnaldooliveira.com.br/#business",
        name: "Agnaldo Oliveira - Psicopedagogia e Neuropsicopedagogia",
        description:
          "Atendimento especializado em psicopedagogia, ABA e neuropsicopedagogia para crianças e adolescentes.",
        url: "https://agnaldooliveira.com.br",
        priceRange: "$$",
        serviceType: [
          "Psicopedagogia",
          "Intervenção ABA",
          "Neuropsicopedagogia",
          "Avaliação de Aprendizagem",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Como funciona a avaliação psicopedagógica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A avaliação consiste em sessões estruturadas para compreender o perfil de aprendizagem da criança, identificar dificuldades e potencialidades, com relatório detalhado e orientações.",
            },
          },
          {
            "@type": "Question",
            name: "Agnaldo Oliveira atende online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim, são realizados atendimentos tanto presenciais quanto online, com a mesma qualidade e comprometimento.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sora.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
