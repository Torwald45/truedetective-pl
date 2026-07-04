"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showTop) return null;

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#B49938] hover:bg-[#c9a84c] text-black rounded-full flex items-center justify-center shadow-lg transition-colors" aria-label="Back to top">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
    </button>
  );
}
