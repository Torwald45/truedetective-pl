"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Services", href: "#observation" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#0a0a14] text-white">

      {/* NAVBAR */}
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

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d2e] via-[#0a0a14] to-[#0a0a14]" />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #212471 0%, transparent 50%), radial-gradient(circle at 80% 20%, #B49938 0%, transparent 40%)"}} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-16">
          <div className="flex justify-center mb-8">
            <Image src="/images/logo.png" alt="True Detective" width={160} height={160} className="w-28 h-28 sm:w-36 sm:h-36 object-contain" />
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-7xl lg:text-8xl tracking-widest text-white leading-none mb-4">True Detective</h1>
          <p className="font-[family-name:var(--font-bebas)] text-xl sm:text-2xl lg:text-3xl tracking-[0.2em] text-[#B49938] mb-6">Licensed Private Detective Warsaw</p>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">We provide comprehensive detective services using the latest technologies. We provide evidence for court cases. Professionally, discreetly and legally.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#why-choose-us" className="px-8 py-4 bg-[#B49938] hover:bg-[#c9a84c] text-black font-semibold text-lg rounded transition-colors">Why Choose Us</a>
            <a href="tel:221800095" className="px-8 py-4 border border-[#B49938] text-[#B49938] hover:bg-[#B49938] hover:text-black font-semibold text-lg rounded transition-colors">Call Now</a>
          </div>
          <div className="mt-8">
            <a href="https://detektywtd24.pl/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border border-gray-700 hover:border-gray-500 px-4 py-2 rounded">
              <span>🇵🇱</span> Change language to Polish
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us" className="py-20 sm:py-28 bg-[#0d0d1f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl tracking-wider text-white mb-6">Why Choose Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Effective detective Warsaw - choose a local company that knows the area. The True Detective detective agency offers comprehensive detective services. We operate mainly in Warsaw and the surrounding area.</p>
              <p className="text-gray-300 leading-relaxed mb-4">We are a Warsaw-based licensed detective agency <span className="text-[#B49938] font-semibold">(license number 0007982)</span>. Our main detective office is located in Warsaw - ul. Swietokrzyska 30/63, 00-116 Warsaw.</p>
              <p className="text-gray-300 leading-relaxed mb-8">We provide detective services in the Mazowieckie Voivodeship for individuals and companies.</p>
              <a href="#contact" className="inline-block px-8 py-4 bg-[#B49938] hover:bg-[#c9a84c] text-black font-semibold rounded transition-colors">Get a Quote</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0a0a14] border border-gray-800 rounded-lg p-5 hover:border-[#B49938]/50 transition-colors">
                <div className="text-[#B49938] mb-3"><svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg></div>
                <h3 className="font-semibold text-white mb-2 text-sm">Professionalism and quality</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Solving the case is our top priority. Everything is handled at the highest level so the client feels safe in every activity.</p>
              </div>
              <div className="bg-[#0a0a14] border border-gray-800 rounded-lg p-5 hover:border-[#B49938]/50 transition-colors">
                <div className="text-[#B49938] mb-3"><svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg></div>
                <h3 className="font-semibold text-white mb-2 text-sm">Discreet and anonymous</h3>
                <p className="text-gray-400 text-xs leading-relaxed">We act extremely carefully and imperceptibly. We always provide only verified information and maintain full anonymity of our clients.</p>
              </div>
              <div className="bg-[#0a0a14] border border-gray-800 rounded-lg p-5 hover:border-[#B49938]/50 transition-colors">
                <div className="text-[#B49938] mb-3"><svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg></div>
                <h3 className="font-semibold text-white mb-2 text-sm">Innovative equipment</h3>
                <p className="text-gray-400 text-xs leading-relaxed">We use high-class detective equipment and apply modern technological solutions. We solve cases effectively and in a short time.</p>
              </div>
              <div className="bg-[#0a0a14] border border-gray-800 rounded-lg p-5 hover:border-[#B49938]/50 transition-colors">
                <div className="text-[#B49938] mb-3"><svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg></div>
                <h3 className="font-semibold text-white mb-2 text-sm">Effectiveness</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Detective Warsaw has the ability to combine non-obvious facts, is perceptive and creative, solving seemingly impossible problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCREET OBSERVATION */}
      <section id="observation" className="py-20 sm:py-28 bg-[#0a0a14] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <p className="font-[family-name:var(--font-bebas)] text-[#B49938] text-xl tracking-widest mb-2">Detective Service</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl tracking-wider text-white mb-6">Discreet Observation of People</h2>
            <p className="text-gray-300 leading-relaxed">A method that has been one of the most effective in cases commissioned to detective agencies for years. Thanks to its implementation, we can effectively determine: everyday behaviors and habits of the observed person, places of work and residence, contacts with other people, including intimate relationships - particularly important in divorce cases, childcare opportunities, addictions, and business connections.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["Specific Agents For Needs", "Fully Equipped", "24/7 Management", "Expertise in Observation"].map((b) => (
              <div key={b} className="border border-[#B49938]/30 rounded-lg p-5 text-center hover:border-[#B49938] hover:bg-[#B49938]/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#B49938] mx-auto mb-3" />
                <p className="text-white text-sm font-medium leading-snug">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#contact" className="inline-block px-8 py-4 border border-[#B49938] text-[#B49938] hover:bg-[#B49938] hover:text-black font-semibold rounded transition-colors">Get a Quote</a>
          </div>
        </div>
      </section>

      {/* FOR COMPANIES */}
      <section className="py-20 sm:py-28 bg-[#0d0d1f] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-[family-name:var(--font-bebas)] text-[#B49938] text-xl tracking-widest mb-2">Corporate Services</p>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl tracking-wider text-white mb-6">Private Investigator Warsaw - a great solution for your company</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Although the largest number of orders is most often carried out in cases of infidelity, checking the partner's fidelity and collecting evidence necessary for court cases, our detective company Warsaw also provides many other services.</p>
              <p className="text-gray-300 leading-relaxed mb-8">We run, among others, observation of people in business, economic matters, checking the contractor's credibility or searching for assets that could satisfy the creditor's claims. The range of detective services is very wide and the offer is addressed not only to individual clients, but also to business clients.</p>
              <a href="#contact" className="inline-block px-8 py-4 bg-[#B49938] hover:bg-[#c9a84c] text-black font-semibold rounded transition-colors">Get a Quote</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Customized solutions per client needs", "Fully Equipped", "Consistent property monitoring", "24/7 Management"].map((b) => (
                <div key={b} className="bg-[#0a0a14] border border-gray-800 rounded-lg p-5 hover:border-[#212471] transition-colors">
                  <div className="w-6 h-6 rounded-sm bg-[#212471] mb-3 flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full" /></div>
                  <p className="text-white text-sm font-medium leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-[#0a0a14] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl tracking-wider text-white mb-12 text-center">What Our Customers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Precise, quick execution of the order, great commitment. A man with a heart and always reachable!", name: "Monika K.", img: "/images/testimonial-monika.webp" },
              { quote: "Betrayal detected 100%. The agency provided me with irrefutable evidence in the form of recordings and photos. Professional approach and instant response. Highly recommend!", name: "Ann", img: "/images/testimonial-ann.webp" },
              { quote: "After many searches for a competent company, I could not have found a better place. My order not only solved the problem quickly but also saved my company from huge losses!", name: "Paul G.", img: "/images/testimonial-paul.webp" },
            ].map((t) => (
              <div key={t.name} className="bg-[#0d0d1f] border border-gray-800 rounded-lg p-6 flex flex-col gap-4">
                <div className="text-[#B49938] text-3xl leading-none">&ldquo;</div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 mt-2">
                  <Image src={t.img} alt={t.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-[#B49938]/40" />
                  <span className="text-[#B49938] font-semibold text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28 bg-[#B49938]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl tracking-wider text-black mb-2">Get a Quote</h2>
          <p className="text-black/70 mb-12 text-lg">Free consultation - contact us today</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-10">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" /></svg>
              <div className="text-left">
                <p className="text-black/60 text-xs font-medium uppercase tracking-wider">Call us free</p>
                <div className="flex gap-4">
                  <a href="tel:221800095" className="text-black font-bold text-lg hover:underline">22 180 00 95</a>
                  <a href="tel:783064940" className="text-black font-bold text-lg hover:underline">783 064 940</a>
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-black/20" />
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              <div className="text-left">
                <p className="text-black/60 text-xs font-medium uppercase tracking-wider">Email</p>
                <a href="mailto:kontakt@detektywtd24.pl" className="text-black font-bold hover:underline">kontakt@detektywtd24.pl</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <a href="https://detektywtd24.pl/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-white font-semibold rounded hover:bg-gray-900 transition-colors">Visit Our Official Website in Polish</a>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/dobrydetektywwarszawa" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors"><svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
              <a href="https://www.instagram.com/detektyw_td24/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors"><svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="https://www.linkedin.com/company/detektyw-td24/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors"><svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-[#0a0a14] border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">&copy; True Detective. All rights reserved. License No. 0007982</p>
      </footer>

      {/* BACK TO TOP */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#B49938] hover:bg-[#c9a84c] text-black rounded-full flex items-center justify-center shadow-lg transition-colors" aria-label="Back to top">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
        </button>
      )}
    </div>
  );
}