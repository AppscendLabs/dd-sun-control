"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  CheckCircle,
  Shield,
  Zap,
  Sun,
  Eye,
  Thermometer,
  Lock,
  ExternalLink,
} from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "UV Protection",
    description:
      "Block harmful UV rays that cause skin damage and interior fading",
  },
  {
    icon: Thermometer,
    title: "Heat Reduction",
    description:
      "Significantly reduce interior temperatures and improve comfort",
  },
  {
    icon: Eye,
    title: "Privacy Enhancement",
    description:
      "Increase privacy while maintaining visibility from inside",
  },
  {
    icon: Zap,
    title: "Energy Savings",
    description:
      "Lower cooling costs with improved thermal efficiency",
  },
  {
    icon: Lock,
    title: "Safety & Security",
    description:
      "Hold shattered glass together in case of accidents or break-ins",
  },
  {
    icon: Sun,
    title: "Glare Reduction",
    description:
      "Reduce eye strain and improve visibility in bright conditions",
  },
];

const SERVICES = [
  {
    title: "Automotive Window Tinting",
    description:
      "Professional window tinting for all vehicle types including cars, trucks, SUVs, and luxury vehicles.",
    image: "/images/work/auto/auto1.jpg",
    benefits: [
      "Blocks 99% of harmful UV rays",
      "Reduces interior heat by up to 60%",
      "Protects upholstery from fading",
      "Enhanced privacy and security",
      "Reduces glare for safer driving",
      "Sleek, professional appearance",
    ],
    tintOptions: ["5%", "15%", "30%", "50%", "80%"],
  },
  {
    title: "Residential Window Tinting",
    description:
      "Transform your home with energy-efficient window films that provide comfort, privacy, and protection.",
    image: "/images/work/residential/residential1.jpg",
    benefits: [
      "Reduce energy costs by up to 30%",
      "Protect furniture and flooring from UV damage",
      "Enhance privacy without losing natural light",
      "Minimize hot spots and glare",
      "Improve home security",
      "Variety of decorative options available",
    ],
    tintOptions: ["Light", "Medium", "Dark", "Reflective", "Decorative"],
  },
  {
    title: "Commercial Window Tinting",
    description:
      "Professional solutions for offices, retail spaces, and commercial buildings to enhance comfort and reduce costs.",
    image: "/images/work/commercial/commercial1.jpg",
    benefits: [
      "Significant energy savings for buildings",
      "Improved employee comfort and productivity",
      "Professional, uniform appearance",
      "Custom branding options available",
      "Meets building code requirements",
      "Quick installation with minimal disruption",
    ],
    tintOptions: ["Standard", "High-Performance", "Safety & Security", "Custom"],
  },
  {
    title: "Paint Protection Film",
    description:
      "Protect your vehicle's paint from chips, scratches, and environmental damage with premium PPF.",
    image: "/images/work/paint-protection/ppf1.jpg",
    benefits: [
      "Self-healing technology for minor scratches",
      "Maintains vehicle resale value",
      "Crystal clear, invisible protection",
      "Resistant to stains and discoloration",
      "7-year warranty included",
      "Protects against rock chips and road debris",
    ],
    tintOptions: ["Full Front", "Partial Front", "Full Vehicle", "Custom Areas"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "Discuss your needs and choose the right tint option",
  },
  {
    step: "02",
    title: "Measurement",
    description: "Precise measurements ensure perfect fit and coverage",
  },
  {
    step: "03",
    title: "Installation",
    description: "Expert installation using professional techniques",
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Thorough inspection to ensure flawless results",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-300"
          >
            Premium window tinting solutions tailored to your specific needs.
            Whether it&apos;s your vehicle, home, or business, we&apos;ve got
            you covered.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Key Benefits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Why window tinting is a smart investment
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                  <feature.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1080}
                      height={384}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-96 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-xl text-slate-600">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="mb-4 text-xl font-semibold text-slate-900">
                      Benefits Include:
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-6">
                    <h3 className="mb-3 text-lg font-semibold text-slate-900">
                      Available Options:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tintOptions.map((option) => (
                        <span
                          key={option}
                          className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Simple, professional, and hassle-free
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {PROCESS_STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3M Partnership Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-lg md:p-12"
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="shrink-0 text-center">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-red-600 text-4xl font-black text-white">
                  3M
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Authorized 3M Window Film Dealer
                </h2>
                <p className="mb-6 text-lg text-slate-600">
                  We install genuine 3M window films — trusted worldwide for performance, clarity, and durability. Every film is customized to your exact needs, vehicle, or property.
                </p>
                <a
                  href="https://www.3m.com/3M/en_US/p/c/films-sheeting/window/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-red-700"
                >
                  <span>View 3M Window Films</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Film Series Grid */}
            <div className="mt-10 border-t border-slate-100 pt-10">
              <h3 className="mb-6 text-center text-xl font-bold text-slate-900">
                3M Film Series — Find Your Perfect Match
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    series: "Crystalline Series",
                    badge: "Best Heat Rejection",
                    badgeColor: "bg-red-100 text-red-700",
                    description: "Nearly clear film with the highest heat rejection available. Ideal for those who want maximum performance without a dark look.",
                  },
                  {
                    series: "Ceramic IR Series",
                    badge: "Premium",
                    badgeColor: "bg-yellow-100 text-yellow-700",
                    description: "Non-metallic ceramic technology that blocks infrared heat while maintaining signal clarity for GPS, satellite radio, and toll systems.",
                  },
                  {
                    series: "FX-HP Series",
                    badge: "Great Value",
                    badgeColor: "bg-green-100 text-green-700",
                    description: "High-performance color-stable film delivering excellent UV and heat rejection at an accessible price point. A top choice for everyday vehicles.",
                  },
                  {
                    series: "Prestige Series",
                    badge: "Residential & Commercial",
                    badgeColor: "bg-blue-100 text-blue-700",
                    description: "Designed for homes and businesses. Rejects up to 97% of infrared heat while maintaining a clear, natural appearance from inside and out.",
                  },
                  {
                    series: "Safety & Security Film",
                    badge: "Protection",
                    badgeColor: "bg-slate-100 text-slate-700",
                    description: "Holds shattered glass together on impact — protecting against break-ins, accidents, and severe weather. Available for auto, residential, and commercial.",
                  },
                  {
                    series: "Scotchgard Paint Protection",
                    badge: "PPF",
                    badgeColor: "bg-purple-100 text-purple-700",
                    description: "Self-healing clear film that shields your vehicle's paint from rock chips, scratches, and road debris. Includes a 7-year warranty.",
                  },
                ].map((film) => (
                  <div
                    key={film.series}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <h4 className="font-bold text-slate-900">{film.series}</h4>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${film.badgeColor}`}>
                        {film.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{film.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Ready to Experience the Benefits?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Contact us today for a free consultation and quote. Our experts
              will help you choose the perfect solution.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-yellow-600 shadow-lg transition-all hover:scale-105 hover:bg-slate-100"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
