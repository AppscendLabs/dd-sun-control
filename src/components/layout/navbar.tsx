"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const shouldUseDarkText = !isHomePage || isScrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldUseDarkText
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="D&D Sun Control - Window Tinting Experts Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span
                  className={`text-xl font-bold leading-tight transition-colors ${
                    shouldUseDarkText ? "text-slate-900" : "text-white"
                  }`}
                >
                  D&D Sun Control
                </span>
                <span className="text-xs font-semibold text-yellow-500">
                  Window Tinting Experts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`group relative text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "text-yellow-500"
                      : shouldUseDarkText
                        ? "text-slate-700 hover:text-yellow-600"
                        : "text-white hover:text-yellow-300"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full ${
                      pathname === link.path ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              ))}
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 rounded-full bg-yellow-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:scale-105 hover:bg-yellow-600"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className={`rounded-lg p-3 transition-colors md:hidden ${
                shouldUseDarkText
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-lg">
              <div className="flex h-full flex-col items-center justify-center space-y-8">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={`text-2xl font-semibold transition-colors ${
                        pathname === link.path
                          ? "text-yellow-500"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 rounded-full bg-yellow-500 px-8 py-3 text-lg font-semibold text-slate-900 hover:bg-yellow-600"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
