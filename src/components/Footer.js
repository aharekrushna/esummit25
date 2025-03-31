"use client";

import Image from "next/image";
import { colors } from "@/constants/colors";
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/ecellvssut",
      label: "Twitter",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/ecellvssut/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://in.linkedin.com/company/ecellvssut",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/E-Cell-VSSUT",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Speakers", href: "/speakers" },
    { label: "Contact", href: "/contact" },
  ];

  const usefulLinks = [
    { label: "About Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="w-full pt-8 pb-4 border-t border-yellow-300/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-xl z-0"></div>
      <div className="absolute top-0 right-0 w-2/6 h-2/3 rounded-full bg-amber-500/30 blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-2/6 h-1/3 rounded-full bg-[#013c58]/60 blur-3xl -ml-10 -mb-10"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-primary/30">
          <p className="text-light/90 text-amber-300 text-lg mb-4 md:mb-0 font-light">
            Connect with us on social media
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-primary/40 text-light hover:bg-primary/80 hover:text-dark transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/20"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative p-2 rounded-xl bg-white/5 backdrop-blur-lg shadow-xl mb-4">
              <Image
                src="/assets/logo.png"
                alt="E-Summit Logo"
                width={180}
                height={55}
                className="h-[55px] w-auto object-contain"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
            </div>
            <p className="text-light/80  text-sm text-center md:text-left font-light">
              Empowering innovation and entrepreneurship at VSSUT
            </p>
          </div>

          {/* Quick Links */}
          <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <h3 className="text-primary font-semibold text-lg mb-4 text-amber-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-light/90 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <h3 className="text-primary font-semibold text-lg mb-4 text-amber-300">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-light/90 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
            <h3 className="text-primary font-semibold text-lg mb-4 text-amber-300">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/30 transition-all">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <span className="text-light/90 mt-1">
                  VSSUT, Burla, Odisha 768018
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/30 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a
                  href="mailto:ecellvssut@gmail.com"
                  className="text-light/90 hover:text-primary transition-colors"
                >
                  ecellvssut@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/30 transition-all">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-light/90">+91 72055 49729</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light/70 text-sm text-center mb-2 md:mb-0">
              © {new Date().getFullYear()} E-Cell VSSUT. All rights reserved.
            </p>
            <div className="text-light/50 text-xs">
              Designed with <span className="text-red-500">♥</span> by E-Cell
              VSSUT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
