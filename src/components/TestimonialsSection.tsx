import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_LIST } from "../portfolioData";

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_LIST[activeIndex];

  return (
    <section
      id="voices"
      className="py-24 md:py-32 bg-[#0e261f] text-[#f7f4ec] relative overflow-hidden"
      aria-labelledby="voices-h"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d98d12]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9db1a8]">
              Kind words
            </span>
          </div>
          <h2
            id="voices-h"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f7f4ec] tracking-tight leading-[1.1]"
          >
            What it's like to work with me
          </h2>
          <p className="text-base sm:text-lg text-[#9cb2a9] leading-relaxed">
            Honest notes from founders and design leads I've shipped alongside.
          </p>
        </div>

        {/* Carousel Presentation */}
        <div className="relative max-w-4xl mx-auto bg-[#14342b]/95 border border-[#214c3e] rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
          {/* Quote Mark */}
          <div className="absolute top-6 left-8 text-[#d98d12]/20 select-none pointer-events-none" aria-hidden="true">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10 space-y-8 text-left">
            <blockquote className="font-display font-medium text-xl sm:text-2xl md:text-3xl text-[#f3f7f4] leading-snug">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between pt-6 border-t border-[#1f483b] flex-wrap gap-4">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatarUrl}
                  alt={current.author}
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#d98d12]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-lg text-[#f7f4ec]">
                    {current.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8fa79c]">
                    {current.role}, <span className="text-[#d98d12]">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-[#295445] hover:border-[#d98d12] hover:bg-[#1a4135] text-[#d98d12] flex items-center justify-center transition-all active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-[#295445] hover:border-[#d98d12] hover:bg-[#1a4135] text-[#d98d12] flex items-center justify-center transition-all active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS_LIST.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? "w-8 bg-[#d98d12]"
                    : "w-2 bg-[#254f40] hover:bg-[#346b57]"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
