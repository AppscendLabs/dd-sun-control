import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "D&D Sun Control | Premium Window Tinting Services",
    template: "%s | D&D Sun Control",
  },
  description:
    "Professional window tinting for automotive, residential, and commercial applications. UV protection, heat reduction, and privacy enhancement.",
  keywords: [
    "window tinting North Little Rock AR",
    "window tinting Little Rock Arkansas",
    "automotive window tinting Arkansas",
    "residential window tinting",
    "commercial window tinting",
    "paint protection film Arkansas",
    "3M window film dealer",
    "UV protection window tint",
    "car tinting near me",
    "window tint shop North Little Rock",
  ],
  metadataBase: new URL(BUSINESS.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "D&D Sun Control",
    title: "D&D Sun Control | Premium Window Tinting Services",
    description:
      "Professional window tinting for automotive, residential, and commercial applications.",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "D&D Sun Control" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "D&D Sun Control | Premium Window Tinting Services",
    description:
      "Professional window tinting for automotive, residential, and commercial applications.",
    images: ["/images/logo.png"],
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LocalBusinessJsonLd />
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
