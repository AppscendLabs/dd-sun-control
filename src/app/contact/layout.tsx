import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Contact Us - Free Quote",
  description:
    "Contact D&D Sun Control for a free window tinting consultation and quote. Professional service for automotive, residential, and commercial applications.",
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
    question: "What tint percentages are legal?",
    answer:
      "Tint laws vary by state. We'll help you choose compliant options that meet local regulations while maximizing benefits.",
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
          { name: "Home", url: "https://danddsuncontrol.com" },
          { name: "Contact", url: "https://danddsuncontrol.com/contact" },
        ]}
      />
      {children}
    </>
  );
}
