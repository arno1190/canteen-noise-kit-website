import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_ORIGIN, canonicalSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Canteen Noise Kit — Le Feu Tricolore Sonore";
const defaultDescription =
  "Kit IoT educatif : feu tricolore sonore pour les cantines scolaires. ESP32, micro, bande LED, ateliers avec les eleves.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: defaultTitle,
    template: "%s | Canteen Noise Kit",
  },
  description: defaultDescription,
  alternates: {
    canonical: canonicalSiteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: canonicalSiteUrl,
    siteName: "Canteen Noise Kit — feu tricolore sonore",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Canteen Noise Kit — feu tricolore sonore pour cantines scolaires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
