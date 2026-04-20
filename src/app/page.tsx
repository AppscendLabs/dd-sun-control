import type { Metadata } from "next";
import { HomePageClient } from "./home-page-client";

export const metadata: Metadata = {
  title: "Window Tinting North Little Rock AR | D&D Sun Control",
  description:
    "D&D Sun Control — North Little Rock's trusted window tinting experts since 1994. Automotive, residential & commercial tinting. 3M authorized dealer. 30+ years experience. Free quotes. Call (501) 945-7474.",
  keywords: [
    "window tinting North Little Rock AR",
    "window tinting Little Rock Arkansas",
    "car window tinting near me",
    "automotive window tinting Arkansas",
    "residential window tinting North Little Rock",
    "commercial window tinting Little Rock",
    "paint protection film Arkansas",
    "3M window film North Little Rock",
    "window tint shop Arkansas",
    "heat reduction window film",
    "UV protection window tint",
    "window tinting Conway AR",
    "window tinting Benton AR",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
