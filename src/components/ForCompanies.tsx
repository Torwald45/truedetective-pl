export default function ForCompanies() {
  return (
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
  );
}
