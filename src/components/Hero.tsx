import Image from "next/image";

export default function Hero() {
  return (
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
  );
}
