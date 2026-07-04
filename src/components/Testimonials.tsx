import Image from "next/image";

const testimonials = [
  { quote: "Precise, quick execution of the order, great commitment. A man with a heart and always reachable!", name: "Monika K.", img: "/images/testimonial-monika.webp" },
  { quote: "Betrayal detected 100%. The agency provided me with irrefutable evidence in the form of recordings and photos. Professional approach and instant response. Highly recommend!", name: "Ann", img: "/images/testimonial-ann.webp" },
  { quote: "After many searches for a competent company, I could not have found a better place. My order not only solved the problem quickly but also saved my company from huge losses!", name: "Paul G.", img: "/images/testimonial-paul.webp" },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a14] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl tracking-wider text-white mb-12 text-center">What Our Customers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
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
  );
}
