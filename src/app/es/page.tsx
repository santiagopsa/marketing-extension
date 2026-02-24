import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "PeakU | Extensión para encontrar y contactar candidatos en LinkedIn",
  description:
    "Prueba sin costo la extensión de PeakU. Busca candidatos relevantes en LinkedIn según requisitos de vacante, compara ajuste y genera mensajes automáticos.",
  keywords: [
    "extensión de reclutamiento linkedin",
    "buscar candidatos linkedin",
    "automatización de sourcing",
    "contactar candidatos por linkedin",
    "prospección de talento",
    "peaku extension",
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
    title: "PeakU | Extensión para encontrar y contactar candidatos en LinkedIn",
    description:
      "Configura tu vacante, encuentra candidatos relevantes y envía mensajes personalizados con la extensión de PeakU.",
    url: `${SITE_URL}/es`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Panel de la extensión de PeakU para LinkedIn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Prueba sin costo la extensión de PeakU",
    description:
      "Busca candidatos en LinkedIn, prioriza por ajuste y empieza conversaciones con mensajes automáticos.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PageEs() {
  return (
    <main id="top">
      <Nav locale="es" />
      <VideoHero locale="es" />
      <Lore locale="es" />
      <Levels locale="es" />
      <div id="thesis">
        <StickySwap locale="es" />
      </div>
      <Rewards locale="es" />
      <Join locale="es" />
    </main>
  );
}
