import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us | Free Window Tinting Quote — North Little Rock AR",
  description:
    "Get a free window tinting quote from D&D Sun Control in North Little Rock, AR. Call (501) 945-7474 or visit 4221 North Richards Road. Serving Central Arkansas. Same-day service available.",
  keywords: [
    "window tinting quote North Little Rock",
    "free tint estimate Arkansas",
    "contact window tinting shop Little Rock",
    "window tint appointment North Little Rock AR",
    "D&D Sun Control phone number",
    "window tinting near me Arkansas",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const FAQ_DATA = [
  {
    question: "How long does window tinting take?",
    answer:
      "Most automotive tinting jobs take 2-4 hours. Residential and commercial projects vary based on size, typically 1-3 days.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes! We offer a 7-year warranty on all our installations, covering defects in materials and workmanship.",
  },
  {
    question: "What tint percentages are legal in Arkansas?",
    answer:
      "Arkansas law requires front side windows to allow more than 25% light transmission, back side and rear windows can be any darkness. We'll help you choose compliant options that maximize your benefits.",
  },
  {
    question: "How much does window tinting cost?",
    answer:
      "Pricing depends on the vehicle or property size and film type. Automotive tinting typically starts around $150–$300. Residential and commercial quotes are customized by square footage. Contact us for a free estimate.",
  },
  {
    question: "Are you a 3M authorized window film dealer?",
    answer:
      "Yes! D&D Sun Control is an authorized 3M window film dealer. We install genuine 3M films backed by manufacturer warranties and trusted worldwide for performance, clarity, and durability.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve North Little Rock, Little Rock, Sherwood, Jacksonville, Maumelle, Conway, Bryant, Benton, Cabot, and Northwest Arkansas. Contact us for large commercial projects outside these areas.",
  },
];

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FAQJsonLd faqs={FAQ_DATA} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BUSINESS.siteUrl },
          { name: "Contact", url: `${BUSINESS.siteUrl}/contact` },
        ]}
      />
      {children}
    </>
  );
}
