"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Evans Dietz",
    role: "Owner",
    image: "/images/team/evans-dietz.jpg",
    bio: "With over 30 years at the helm of D & D Sun Control, Evans has built the company into one of Central Arkansas's most trusted window tinting businesses. His hands-on experience and commitment to quality set the standard for every job.",
  },
  {
    name: "Erin Shahan",
    role: "Bookkeeper & HR",
    image: "/images/team/erin-shahan.jpg",
    bio: "Erin keeps the business running behind the scenes — managing finances, HR, and the day-to-day operations that allow the rest of the team to focus on delivering great work.",
  },
  {
    name: "Melvin Garrett",
    role: "Automotive & Paint Protection",
    image: "/images/team/melvin-garrett.jpg",
    bio: "Melvin is our go-to specialist for automotive tinting and paint protection film. His precision and attention to detail ensure every vehicle leaves the shop looking flawless.",
  },
  {
    name: "Jennifer Jahns",
    role: "Office Manager",
    image: "/images/team/jennifer-jahns.jpg",
    bio: "Jennifer is the first voice you'll hear when you call D & D Sun Control. She coordinates scheduling, customer inquiries, and makes sure every client experience is seamless from start to finish.",
  },
  {
    name: "Brian Battie",
    role: "Commercial & Residential",
    image: "/images/team/brian-battie.jpg",
    bio: "Brian specializes in commercial and residential installations, tackling everything from large office buildings to private homes. His expertise ensures professional results on every scale.",
  },
  {
    name: "Henry Woodward",
    role: "Installer",
    image: "/images/team/henry-woodward.jpg",
    bio: "Henry brings a sharp eye and steady hands to every installation. His dedication to precision means every film is applied perfectly — no bubbles, no edges, just clean results.",
  },
  {
    name: "Ethan Reed",
    role: "Installer — NLR & NWA",
    image: "/images/team/ethan-reed.jpg",
    bio: "Ethan covers both North Little Rock and Northwest Arkansas, bringing D & D Sun Control's professional service to customers across the state.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
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
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-300"
          >
            The experienced professionals behind every installation at D &amp; D Sun Control, Inc. — serving North Little Rock and Central Arkansas for over 30 years.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role} at D & D Sun Control`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                    <p className="font-semibold text-yellow-400">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Ready to Work With Our Team?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Get a free quote from North Little Rock&apos;s most trusted window tinting professionals.
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
