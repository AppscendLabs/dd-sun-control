import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
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
    "window tinting",
    "car tinting",
    "residential tinting",
    "commercial tinting",
    "UV protection",
    "paint protection film",
  ],
  metadataBase: new URL("https://danddsuncontrol.com"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "D&D Sun Control | Premium Window Tinting Services",
    description:
      "Professional window tinting for automotive, residential, and commercial applications.",
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
