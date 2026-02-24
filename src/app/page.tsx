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
  title: "PeakU | LinkedIn extension for candidate sourcing and outreach",
  description:
    "Try the PeakU extension for free. Find relevant LinkedIn candidates from your role requirements, compare fit, and start outreach with auto-drafted messages.",
  keywords: [
    "linkedin recruiting extension",
    "candidate sourcing automation",
    "linkedin outreach automation",
    "recruiting workflow automation",
    "talent sourcing tool",
    "peaku extension",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    locale: "en_US",
    title: "PeakU | LinkedIn extension for candidate sourcing and outreach",
    description:
      "Upload role requirements, run LinkedIn searches, rank candidate fit, and start conversations faster.",
    url: `${SITE_URL}/`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "PeakU extension dashboard for LinkedIn recruiting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Try the extension for free",
    description:
      "Automate candidate discovery and first outreach directly from LinkedIn.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <VideoHero />
      <Lore />
      <Levels />
      <div id="thesis">
        <StickySwap />
      </div>
      <Rewards />
      <Join />
    </main>
  );
}
