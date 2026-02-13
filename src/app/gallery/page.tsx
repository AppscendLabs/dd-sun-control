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
  {
    id: 1,
    category: "automotive",
    title: "Luxury Sedan - 20% Tint",
    image:
      "https://images.unsplash.com/photo-1581043999816-2be8c1cdb13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhciUyMHRpbnRlZCUyMHdpbmRvd3MlMjBzaWRlfGVufDF8fHx8MTc3MDk2MDM3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Professional ceramic tint on luxury sedan",
  },
  {
    id: 2,
    category: "automotive",
    title: "SUV Complete Package",
    image:
      "https://images.unsplash.com/photo-1768024175254-373f5069324d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjB0aW50ZWQlMjB3aW5kb3dzfGVufDF8fHx8MTc3MDk2MDM3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Full tint package with premium film",
  },
  {
    id: 3,
    category: "automotive",
    title: "Sports Car Installation",
    image:
      "https://images.unsplash.com/photo-1767001621217-f40d93b4b0a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBkYXJrJTIwd2luZG93c3xlbnwxfHx8fDE3NzA5NjAzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-performance ceramic tint",
  },
  {
    id: 4,
    category: "automotive",
    title: "Car Interior View",
    image:
      "https://images.unsplash.com/photo-1721497045131-7aec80cb104f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBpbnRlcmlvciUyMHRpbnRlZCUyMHdpbmRvd3N8ZW58MXx8fHwxNzcwOTYwMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Interior view showcasing tint quality",
  },
  {
    id: 5,
    category: "automotive",
    title: "Professional Installation",
    image:
      "https://images.unsplash.com/photo-1631379879495-23a8e79abed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDk2MDM3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Expert installation in progress",
  },
  {
    id: 6,
    category: "automotive",
    title: "Luxury Vehicle Detail",
    image:
      "https://images.unsplash.com/photo-1758804025235-588a3f77326a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3aW5kc2hpZWxkfGVufDF8fHx8MTc3MDk2MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium windshield treatment",
  },
  {
    id: 7,
    category: "residential",
    title: "Modern Home Windows",
    image:
      "https://images.unsplash.com/photo-1760561148422-bbb515696fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwd2luZG93cyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDk2MDM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Residential energy-efficient film installation",
  },
  {
    id: 8,
    category: "residential",
    title: "Residential Building",
    image:
      "https://images.unsplash.com/photo-1538056760650-96bfa0545061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHdpbmRvdyUyMHRpbnRpbmclMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA5NjAyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete residential tinting project",
  },
  {
    id: 9,
    category: "commercial",
    title: "Office Building",
    image:
      "https://images.unsplash.com/photo-1660496247667-3fb697c396af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwd2luZG93c3xlbnwxfHx8fDE3NzA5NjAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Commercial office building project",
  },
  {
    id: 10,
    category: "commercial",
    title: "Commercial Facade",
    image:
      "https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBmYWNhZGUlMjB3aW5kb3dzfGVufDF8fHx8MTc3MDk2MDM3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Large-scale commercial installation",
  },
  {
    id: 11,
    category: "automotive",
    title: "Professional Detailing",
    image:
      "https://images.unsplash.com/photo-1605437211365-7257403ea287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwOTYwMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete vehicle detailing and tinting",
  },
  {
    id: 12,
    category: "automotive",
    title: "Dark Tint Application",
    image:
      "https://images.unsplash.com/photo-1612126413358-8ae4b09e0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwZGFya3xlbnwxfHx8fDE3NzA5NjAyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium dark tint finish",
  },
];

const STATS = [
  { number: "5000+", label: "Vehicles Tinted" },
  { number: "500+", label: "Homes Protected" },
  { number: "100+", label: "Commercial Projects" },
  { number: "15+", label: "Years Experience" },
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
