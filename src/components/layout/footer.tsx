import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BUSINESS } from "@/lib/config";

const QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const SERVICES = [
  { name: "Automotive Tinting", path: "/services" },
  { name: "Residential Tinting", path: "/services" },
  { name: "Commercial Tinting", path: "/services" },
  { name: "Paint Protection Film", path: "/services" },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61561210779874", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/danddsuncontrol/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="D & D Sun Control - Professional Window Tinting Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">{BUSINESS.shortName}</span>
                <span className="text-xs font-semibold text-yellow-500">
                  {BUSINESS.tagline}
                </span>
              </div>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Professional window tinting services for automotive, residential,
              and commercial applications.
            </p>
            <div className="flex items-center space-x-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-yellow-500"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="https://rollnwrapz.com"
                aria-label="Roll'n Wrapz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
              >
                <Image
                  src="/images/rollnwrapz-logo.png"
                  alt="Roll'n Wrapz"
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-slate-400 transition-colors hover:text-yellow-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-sm text-slate-400 transition-colors hover:text-yellow-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                  <span className="text-sm text-slate-400">
                    {BUSINESS.address.full}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 shrink-0 text-yellow-500" />
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-sm text-slate-400 transition-colors hover:text-yellow-500"
                  >
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 shrink-0 text-yellow-500" />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-sm text-slate-400 transition-colors hover:text-yellow-500"
                  >
                    {BUSINESS.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved.
          </p>
          <a
            href="https://www.appscendlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-yellow-500"
          >
            Built by Appscend Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
