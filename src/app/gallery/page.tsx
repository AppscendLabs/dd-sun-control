"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const CATEGORIES = [
  { id: "all", name: "All Projects" },
  { id: "automotive", name: "Automotive" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
];

const GALLERY_ITEMS = [
  { id: 1, category: "automotive", title: "Jaguar - Premium Tint", image: "/images/work/auto/auto1.jpg", description: "Full tint package on luxury Jaguar sedan" },
  { id: 2, category: "automotive", title: "Automotive Tint", image: "/images/work/auto/auto2.jpg", description: "Professional window tint installation" },
  { id: 3, category: "automotive", title: "Automotive Tint", image: "/images/work/auto/auto3.jpg", description: "Dark tint for privacy and heat reduction" },
  { id: 4, category: "automotive", title: "Automotive Tint", image: "/images/work/auto/auto4.jpg", description: "Premium film applied to all windows" },
  { id: 5, category: "automotive", title: "Automotive Tint", image: "/images/work/auto/auto5.jpg", description: "Professional ceramic tint installation" },
  { id: 6, category: "automotive", title: "Automotive Tint", image: "/images/work/auto/auto6.jpg", description: "Complete tint package" },
  { id: 7, category: "automotive", title: "McLaren - Exotic Tint", image: "/images/work/auto/mclauren.jpg", description: "High-performance tint on exotic vehicle" },
  { id: 8, category: "residential", title: "Residential Tinting", image: "/images/work/residential/residential1.jpg", description: "Energy-efficient window film installation" },
  { id: 9, category: "residential", title: "Residential Tinting", image: "/images/work/residential/residential2.jpg", description: "Home window tinting for privacy and comfort" },
  { id: 10, category: "residential", title: "Residential Tinting", image: "/images/work/residential/residential3.jpg", description: "UV-blocking film on residential windows" },
  { id: 11, category: "residential", title: "Residential Tinting", image: "/images/work/residential/residential4.jpg", description: "Residential tinting project completion" },
  { id: 12, category: "residential", title: "Residential Tinting", image: "/images/work/residential/residential5.jpg", description: "Professional residential film installation" },
  { id: 13, category: "commercial", title: "Commercial Tinting", image: "/images/work/commercial/commercial1.jpg", description: "Large-scale commercial window tinting" },
  { id: 14, category: "commercial", title: "Commercial Tinting", image: "/images/work/commercial/commercial2.jpg", description: "Office building tinting project" },
  { id: 15, category: "commercial", title: "Commercial Tinting", image: "/images/work/commercial/commercial3.jpg", description: "Commercial installation in progress" },
  { id: 16, category: "commercial", title: "KARK News", image: "/images/work/commercial/kark.jpg", description: "Commercial tinting for KARK News" },
  { id: 17, category: "commercial", title: "Commercial Tinting", image: "/images/work/commercial/commercial4.jpg", description: "Professional commercial film application" },
  { id: 18, category: "automotive", title: "Paint Protection Film", image: "/images/work/paint-protection/ppf1.jpg", description: "Clear paint protection film installation" },
  { id: 19, category: "automotive", title: "Paint Protection Film", image: "/images/work/paint-protection/ppf2.jpg", description: "Full front PPF package" },
  { id: 20, category: "automotive", title: "Camry Before PPF", image: "/images/work/paint-protection/camry-before.jpg", description: "Vehicle before paint protection film" },
  { id: 21, category: "automotive", title: "Camry After PPF", image: "/images/work/paint-protection/camry-after.jpg", description: "Vehicle after paint protection film applied" },
];

const STATS = [
  { number: "5000+", label: "Vehicles Tinted" },
  { number: "500+", label: "Homes Protected" },
  { number: "100+", label: "Commercial Projects" },
  { number: "30+", label: "Years Experience" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-300"
          >
            Explore our portfolio of professional window tinting installations
            across automotive, residential, and commercial projects.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 border-b border-slate-200 bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {CATEGORIES.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-xl border-2 px-4 py-2 text-sm font-semibold transition-all sm:px-6 sm:py-3 sm:text-base ${
                  selectedCategory === category.id
                    ? "scale-105 border-yellow-500 bg-yellow-500 text-slate-900 shadow-lg"
                    : "border-slate-200 bg-white text-slate-700 hover:border-yellow-500 hover:text-yellow-600"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 text-white transition-transform group-hover:translate-y-0">
                  <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-slate-200 opacity-0 transition-opacity group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-yellow-400 md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Join Our Satisfied Customers
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Ready to transform your vehicle or property? Get your free quote
              today!
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-yellow-600 shadow-lg transition-all hover:scale-105 hover:bg-slate-100"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
