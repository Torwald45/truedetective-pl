export default function Observation() {
  return (
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
  );
}
