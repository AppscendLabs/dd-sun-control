import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Meet Our Team | D & D Sun Control, Inc.",
  description:
    "Meet the experienced team behind D & D Sun Control, Inc. in North Little Rock, AR. 30+ years of professional window tinting expertise serving Central Arkansas.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BUSINESS.siteUrl },
          { name: "Our Team", url: `${BUSINESS.siteUrl}/team` },
        ]}
      />
      {children}
    </>
  );
}
