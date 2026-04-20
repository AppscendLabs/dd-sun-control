import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Window Tinting Services North Little Rock AR",
  description:
    "Professional automotive, residential & commercial window tinting in North Little Rock, AR. Paint protection film, 3M authorized films, UV protection & heat reduction. 7-year warranty. Call (501) 945-7474.",
  keywords: [
    "automotive window tinting North Little Rock",
    "residential window tinting Arkansas",
    "commercial window tinting Little Rock AR",
    "paint protection film North Little Rock",
    "3M window film authorized dealer Arkansas",
    "car tint shop Little Rock",
    "window film installation Arkansas",
    "UV window film North Little Rock",
  ],
  alternates: {
    canonical: "/services",
  },
};

const SERVICES_DATA = [
  {
    name: "Automotive Window Tinting",
    description:
      "Professional window tinting for all vehicle types including cars, trucks, SUVs, and luxury vehicles. Blocks 99% of UV rays and reduces interior heat by up to 60%.",
  },
  {
    name: "Residential Window Tinting",
    description:
      "Energy-efficient window films for homes that reduce energy costs by up to 30%, protect furniture from UV damage, and enhance privacy.",
  },
  {
    name: "Commercial Window Tinting",
    description:
      "Professional window tinting solutions for offices, retail spaces, and commercial buildings to enhance comfort and reduce energy costs.",
  },
  {
    name: "Paint Protection Film",
    description:
      "Premium self-healing paint protection film to guard vehicle paint from chips, scratches, and environmental damage. Includes 7-year warranty.",
  },
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceJsonLd services={SERVICES_DATA} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BUSINESS.siteUrl },
          { name: "Services", url: `${BUSINESS.siteUrl}/services` },
        ]}
      />
      {children}
    </>
  );
}
