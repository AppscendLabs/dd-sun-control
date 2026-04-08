"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Shield,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import { GoogleReviews } from "@/components/google-reviews";

const BENEFITS = [
  {
    icon: Shield,
    title: "UV Protection",
    description:
      "Block up to 99% of harmful UV rays, protecting you and your interiors.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use only the highest quality films backed by manufacturer warranties.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description:
      "Most installations completed in just a few hours with no appointment delays.",
  },
];

const SERVICES = [
  {
    title: "Automotive Tinting",
    description:
      "Professional window tinting for cars, trucks, and SUVs. Enhance privacy, reduce heat, and protect your interior.",
    image:
      "https://images.unsplash.com/photo-1612126413358-8ae4b09e0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwZGFya3xlbnwxfHx8fDE3NzA5NjAyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Car with professionally installed dark window tint for UV protection and privacy",
    features: [
      "Heat Reduction",
      "UV Protection",
      "Privacy Enhancement",
      "Glare Reduction",
    ],
  },
  {
    title: "Residential Tinting",
    description:
      "Transform your home with energy-efficient window films that reduce heat and protect your furnishings.",
    image:
      "https://images.unsplash.com/photo-1538056760650-96bfa0545061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHdpbmRvdyUyMHRpbnRpbmclMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA5NjAyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Residential home with energy-efficient window tinting film installed",
    features: [
      "Energy Savings",
      "Fade Protection",
      "Enhanced Privacy",
      "Climate Control",
    ],
  },
  {
    title: "Commercial Tinting",
    description:
      "Professional solutions for offices and commercial buildings. Improve comfort and reduce energy costs.",
    image:
      "https://images.unsplash.com/photo-1660496247667-3fb697c396af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwd2luZG93c3xlbnwxfHx8fDE3NzA5NjAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Commercial office building with professional window tinting for energy savings",
    features: [
      "Professional Appearance",
      "Cost Efficiency",
      "Temperature Control",
      "Brand Customization",
    ],
  },
];

const ENERGY_STATS = [
  { value: "30%", label: "Energy Cost Reduction", icon: "\u{1F4B0}" },
  { value: "60%", label: "Heat Reduction", icon: "\u{1F321}\uFE0F" },
  { value: "99%", label: "UV Ray Protection", icon: "\u2600\uFE0F" },
  { value: "2-3", label: "Years to Pay Off", icon: "\u{1F4CA}" },
];

const ENERGY_BENEFITS = [
  {
    title: "Lower Cooling Costs",
    description:
      "Reduce heat gain by up to 60%, significantly lowering your air conditioning usage and energy bills.",
  },
  {
    title: "Protect Your Investment",
    description:
      "Prevent fading and damage to furniture, flooring, and car interiors, saving thousands in replacement costs.",
  },
  {
    title: "Increase Property Value",
    description:
      "Energy-efficient upgrades like window tinting can increase your home or building's resale value.",
  },
  {
    title: "Reduce HVAC Strain",
    description:
      "Less demand on your cooling system means lower maintenance costs and extended equipment lifespan.",
  },
];


const TEAM_MEMBERS = [
  {
    name: "David Martinez",
    role: "Owner & Lead Technician",
    image:
      "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MDg4MjMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "30+ years experience in professional window tinting",
  },
  {
    name: "Diana Chen",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcwODczNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Ensures every project exceeds customer expectations",
  },
  {
    name: "Marcus Johnson",
    role: "Senior Installer",
    image:
      "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwOTYxNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Certified in automotive and residential installations",
  },
  {
    name: "Sarah Thompson",
    role: "Customer Service Lead",
    image:
      "https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA5NjE1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Here to help you find the perfect tinting solution",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1748313764710-d52deb08d8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjB0aW50aW5nJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDk2MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional window tinting installation by D&D Sun Control technician"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-7xl">
              Premium Window
              <span className="mt-2 block text-yellow-400">
                Tinting Services
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-300 sm:text-xl md:text-2xl">
              Protect your investment with professional-grade window tinting for
              automotive, residential, and commercial applications.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-yellow-600"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center space-x-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <span>View Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Experience the difference with professional service
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-100">
                  <benefit.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Professional window tinting solutions for every need
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-slate-600">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center space-x-2 text-slate-700"
                      >
                        <CheckCircle className="h-5 w-5 shrink-0 text-yellow-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="group inline-flex items-center space-x-2 font-semibold text-yellow-600 hover:text-yellow-700"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Savings Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
            >
              Save Money & Energy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Window tinting is an investment that pays for itself
            </motion.p>
          </div>

          <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {ENERGY_STATS.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl bg-white p-6 text-center shadow-lg"
                  >
                    <div className="mb-2 text-3xl">{stat.icon}</div>
                    <div className="mb-2 text-3xl font-bold text-yellow-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                How Window Tinting Saves You Money
              </h3>
              <ul className="space-y-4">
                {ENERGY_BENEFITS.map((benefit) => (
                  <li
                    key={benefit.title}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-500" />
                    <div>
                      <h4 className="mb-1 font-semibold text-slate-900">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ROI Calculator Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 p-8 text-center text-white md:p-12"
          >
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Calculate Your Potential Savings
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-xl text-white/90">
              The average homeowner saves $200-500 per year on energy costs.
              Commercial properties can save even more!
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-yellow-600 transition-all hover:scale-105 hover:bg-slate-100"
            >
              Get Your Free Energy Audit
            </Link>
          </motion.div>
        </div>
      </section>

      <GoogleReviews />

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              Experienced professionals dedicated to quality service
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at D&D Sun Control`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mb-2 font-semibold text-yellow-600">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              Contact us today for a free consultation and quote. Our team is
              ready to help you choose the perfect tinting solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-yellow-600 shadow-lg transition-all hover:scale-105 hover:bg-slate-100"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
