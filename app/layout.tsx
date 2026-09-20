import { Montserrat, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import { SkipLink } from "@/components/SkipLink";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  keywords: [
    "wellness",
    "Mindbodymedworks",
    "strength",
    "balance",
    "habits",
    "personalized wellness",
  ],
  authors: [{ name: site.shortName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.portraitSrc,
        width: 1200,
        height: 1600,
        alt: site.portraitAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.portraitSrc],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-text">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
