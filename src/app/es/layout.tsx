import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PeakU | Extensión para encontrar y contactar candidatos en LinkedIn",
  description:
    "Prueba sin costo la extensión de PeakU para LinkedIn. Busca candidatos relevantes según requisitos de vacante y empieza conversaciones con mensajes automáticos.",
  keywords: [
    "PeakU",
    "extensión de reclutamiento linkedin",
    "buscar candidatos linkedin",
    "automatización de sourcing",
    "contactar candidatos por linkedin",
    "prospección de talento",
    "herramienta para reclutamiento",
    "prueba sin costo",
  ],
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    locale: "es_ES",
    url: `${SITE_URL}/es`,
    siteName: "PeakU",
    title: "PeakU | Extensión para encontrar y contactar candidatos en LinkedIn",
    description:
      "Configura tu vacante, prioriza candidatos por ajuste y empieza el contacto en LinkedIn con la extensión de PeakU.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Panel de la extensión de PeakU para reclutamiento en LinkedIn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Prueba sin costo la extensión de PeakU",
    description:
      "Busca candidatos relevantes en LinkedIn y envía mensajes personalizados más rápido.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
