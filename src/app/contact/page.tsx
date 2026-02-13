"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(123) 456-7890", "Mon-Sat: 8AM-6PM"],
    link: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@danddsuncontrol.com", "We reply within 24 hours"],
    link: "mailto:info@danddsuncontrol.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Main Street", "City, ST 12345"],
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM"],
    link: null,
  },
];

const FAQ_ITEMS = [
  {
    question: "How long does window tinting take?",
    answer:
      "Most automotive tinting jobs take 2-4 hours. Residential and commercial projects vary based on size, typically 1-3 days.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes! We offer a lifetime warranty on all our installations, covering defects in materials and workmanship.",
  },
  {
    question: "What tint percentages are legal?",
    answer:
      "Tint laws vary by state. We'll help you choose compliant options that meet local regulations while maximizing benefits.",
  },
  {
    question: "Can I wash my car after tinting?",
    answer:
      "Wait 3-5 days after installation before washing. This allows the film to fully cure and adhere properly.",
  },
];

const WHY_CHOOSE_US = [
  "Free consultation and quotes",
  "Lifetime warranty on all installations",
  "Premium quality films",
  "Expert certified installers",
  "Same-day service available",
  "Competitive pricing",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-300"
          >
            Have questions or ready to schedule your tinting service? We&apos;re
            here to help. Contact us today for a free consultation and quote.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONTACT_INFO.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100">
                  <info.icon className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="block space-y-1 transition-colors hover:text-yellow-600"
                  >
                    {info.details.map((detail) => (
                      <p key={detail} className="text-slate-600">
                        {detail}
                      </p>
                    ))}
                  </a>
                ) : (
                  <div className="space-y-1">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-slate-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Request a Free Quote
              </h2>
              <p className="mb-8 text-xl text-slate-600">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible with a personalized quote.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl border-2 border-green-500 bg-green-50 p-8 text-center"
                >
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-2xl font-semibold text-green-900">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-yellow-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-yellow-500 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-yellow-500 focus:outline-none"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-3 transition-colors focus:border-yellow-500 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="automotive">Automotive Tinting</option>
                      <option value="residential">Residential Tinting</option>
                      <option value="commercial">Commercial Tinting</option>
                      <option value="ppf">Paint Protection Film</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-yellow-500 focus:outline-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-yellow-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-yellow-600"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="h-96 overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="D&D Sun Control Location"
                />
              </div>

              {/* Why Choose Us Box */}
              <div className="rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 p-8 text-white shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">
                  Why Choose D&D Sun Control?
                </h3>
                <ul className="space-y-3">
                  {WHY_CHOOSE_US.map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-6 text-slate-300">
                  For urgent inquiries or same-day service requests, call us
                  directly.
                </p>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center space-x-2 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-slate-900 transition-all hover:scale-105 hover:bg-yellow-600"
                >
                  <Phone className="h-5 w-5" />
                  <span>(123) 456-7890</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-6">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
