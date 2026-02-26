import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PeakU | LinkedIn extension for candidate sourcing and outreach",
    template: "%s | PeakU",
  },
  description:
    "PeakU helps recruiting teams run LinkedIn sourcing from job requirements, compare candidate fit, and automate first outreach.",
  keywords: [
    "PeakU",
    "linkedin recruiting extension",
    "candidate sourcing automation",
    "linkedin outreach automation",
    "recruiting workflow automation",
    "talent sourcing tool",
    "herramienta para buscar candidatos",
    "automatización de reclutamiento",
    "prospección de talento en linkedin",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: "PeakU | LinkedIn extension for candidate sourcing and outreach",
    description:
      "Find relevant LinkedIn candidates from your vacancy requirements and start outreach with auto-drafted messages.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "PeakU LinkedIn recruiting extension dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Try the extension for free",
    description:
      "Automate candidate search and first outreach directly from LinkedIn.",
    images: [DEFAULT_OG_IMAGE],
  },
  category: "human resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-837109052"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-837109052');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
