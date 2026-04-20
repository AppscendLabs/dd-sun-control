import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Window Tinting Gallery | Our Work in Arkansas",
  description:
    "Browse D&D Sun Control's portfolio of professional window tinting projects across North Little Rock and Central Arkansas. Automotive, residential, commercial tinting & paint protection film.",
  keywords: [
    "window tinting gallery Arkansas",
    "car tint before after North Little Rock",
    "residential window tinting photos",
    "commercial window tint portfolio",
    "paint protection film before after",
    "window tinting examples Arkansas",
  ],
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BUSINESS.siteUrl },
          { name: "Gallery", url: `${BUSINESS.siteUrl}/gallery` },
        ]}
      />
      {children}
    </>
  );
}
