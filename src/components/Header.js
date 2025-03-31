"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Trading Pit" },
    { href: "/events", label: "Market Open" },
    { href: "/sponsors", label: "Blue Chips" },
    { href: "/speakers", label: "The Board" },
    { href: "/contact", label: "Bullhorn" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 py-3 bg-black/40 backdrop-blur-xs`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Animated Logo */}
          <Link href="/" className="relative z-20 group">
            <Image
              src="/assets/logo.png"
              alt="E-Summit Logo"
              width={180}
              height={50}
              className="h-[50px] w-auto object-contain transform transition-all duration-500 group-hover:rotate-[-3deg]"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 ">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-500 px-4 py-2 text-lg font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-yellow-500 w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yellow-500 p-2 border-2 border-yellow-500/40 rounded-lg hover:bg-yellow-500/10 transition-all"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 " />
            ) : (
              <Menu className="w-7 h-7 " />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden -ml-4 mt-3 fixed w-full bg-black/60">
            <div className="container mx-auto px-4 backdrop-blur-3xl py-8">
              <ul className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-yellow-500/10 pb-4 ">
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 flex items-center justify-between transition-all"
                    >
                      {link.label}
                      <span className="text-yellow-500 text-3xl">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Fake Stock Ticker */}
              <div className="mt-8 p-4 bg-black/50 rounded-lg border border-yellow-500/20">
                <div className="text-yellow-500 font-mono animate-pulse">
                  ESUMMIT25 ▲ 24.5% ▲ VOL 1.2M ▼ WOLF_PACK:STRONG_BUY
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated Border Bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent ${scrolled ? 'opacity-100' : 'opacity-50'} transition-opacity`} />
    </header>
  );
}