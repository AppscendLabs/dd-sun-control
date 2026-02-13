import type { Metadata } from "next";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Professional Window Tinting Services",
  description:
    "Professional automotive, residential, and commercial window tinting services. Paint protection film, UV protection, heat reduction, and privacy enhancement.",
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
      "Premium self-healing paint protection film to guard vehicle paint from chips, scratches, and environmental damage. Includes 10-year warranty.",
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
          { name: "Home", url: "https://danddsuncontrol.com" },
          { name: "Services", url: "https://danddsuncontrol.com/services" },
        ]}
      />
      {children}
    </>
  );
}
