import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Our Work Gallery",
  description:
    "Browse our portfolio of professional window tinting projects. Automotive, residential, and commercial installations showcasing our quality craftsmanship.",
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
          { name: "Home", url: "https://danddsuncontrol.com" },
          { name: "Gallery", url: "https://danddsuncontrol.com/gallery" },
        ]}
      />
      {children}
    </>
  );
}
