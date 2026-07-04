"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Services", href: "#observation" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a14]/95 backdrop-blur-sm shadow-lg shadow-black/50" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="True Detective logo" width={48} height={48} className="w-10 h-10 object-contain" />
          <span className="font-[family-name:var(--font-bebas)] text-xl tracking-widest text-white leading-none">True Detective</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-[#B49938] transition-colors">{l.label}</a>
          ))}
          <a href="tel:221800095" className="ml-2 px-4 py-2 bg-[#B49938] hover:bg-[#c9a84c] text-black text-sm font-semibold rounded transition-colors whitespace-nowrap">22 180 00 95</a>
        </nav>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d1f] border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-300 hover:text-[#B49938] transition-colors py-1" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="tel:221800095" className="mt-2 px-4 py-3 bg-[#B49938] text-black font-semibold rounded text-center" onClick={() => setMenuOpen(false)}>Call: 22 180 00 95</a>
        </div>
      )}
    </header>
  );
}
