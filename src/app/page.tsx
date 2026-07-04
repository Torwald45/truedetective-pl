import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Observation from "@/components/Observation";
import ForCompanies from "@/components/ForCompanies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="bg-[#0a0a14] text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Observation />
      <ForCompanies />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
