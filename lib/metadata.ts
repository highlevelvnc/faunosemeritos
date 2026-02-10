import { Metadata } from "next";

const baseUrl = "https://faunosemeritos.pt"; // Substituir pelo domínio real

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Faunos Eméritos - Especialistas em Remodelações 🇵🇹",
    template: "%s | Faunos Eméritos",
  },
  description:
    "Especialistas em remodelações de casas, apartamentos e espaços comerciais em Portugal. Atendemos Cascais, Lisboa, Oeiras, Sintra e Estoril. Do projeto à entrega.",
  keywords: [
    "remodelações portugal",
    "remodelações cascais",
    "remodelações lisboa",
    "remodelações oeiras",
    "remodelações sintra",
    "remodelações estoril",
    "obras cascais",
    "obras lisboa",
    "construção civil portugal",
    "renovação apartamentos",
    "renovação casas",
    "remodelação cozinhas",
    "remodelação casas de banho",
    "remodelação espaços comerciais",
  ],
  authors: [{ name: "Faunos Eméritos" }],
  creator: "Faunos Eméritos",
  publisher: "Faunos Eméritos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: baseUrl,
    siteName: "Faunos Eméritos",
    title: "Faunos Eméritos - Especialistas em Remodelações 🇵🇹",
    description:
      "Especialistas em remodelações de casas, apartamentos e espaços comerciais em Portugal. Do projeto à entrega.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faunos Eméritos - Remodelações Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faunos Eméritos - Especialistas em Remodelações 🇵🇹",
    description:
      "Especialistas em remodelações de casas, apartamentos e espaços comerciais em Portugal.",
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
    google: "your-google-verification-code",
  },
};

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: "Faunos Eméritos",
    description:
      "Especialistas em remodelações de casas, apartamentos e espaços comerciais",
    url: baseUrl,
    telephone: "+351938004032",
    priceRange: "€€€",
    image: `${baseUrl}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressRegion: "Lisboa",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cascais",
        "@id": "https://www.wikidata.org/wiki/Q217169",
      },
      {
        "@type": "City",
        name: "Lisboa",
        "@id": "https://www.wikidata.org/wiki/Q597",
      },
      {
        "@type": "City",
        name: "Oeiras",
        "@id": "https://www.wikidata.org/wiki/Q1017684",
      },
      {
        "@type": "City",
        name: "Sintra",
        "@id": "https://www.wikidata.org/wiki/Q216033",
      },
      {
        "@type": "City",
        name: "Estoril",
        "@id": "https://www.wikidata.org/wiki/Q862851",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.7223",
      longitude: "-9.1393",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      // Adicionar redes sociais quando disponíveis
    ],
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  return {
    title,
    description,
    keywords: keywords || defaultMetadata.keywords,
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Faunos Eméritos",
      locale: "pt_PT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
