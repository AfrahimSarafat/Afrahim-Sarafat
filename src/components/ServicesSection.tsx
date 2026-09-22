import React from "react";
import {
  Palette,
  Megaphone,
  Presentation,
  Film,
  Sparkles,
  Video,
} from "lucide-react";
import {
  GRAPHIC_DESIGN_SERVICES,
  VIDEO_EDITING_SERVICES,
  ServiceItem,
} from "../portfolioData";

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette":
        return <Palette className="w-6 h-6 text-[#d98d12]" />;
      case "Megaphone":
        return <Megaphone className="w-6 h-6 text-[#d98d12]" />;
      case "Presentation":
        return <Presentation className="w-6 h-6 text-[#d98d12]" />;
      case "Film":
        return <Film className="w-6 h-6 text-[#d98d12]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#d98d12]" />;
      case "Video":
        return <Video className="w-6 h-6 text-[#d98d12]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d98d12]" />;
    }
  };

  const renderServiceCard = (svc: ServiceItem) => (
    <article
      key={svc.id}
      className="bg-[#14342b]/90 border border-[#214c3e] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#d98d12]/70 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#1c473b] flex items-center justify-center group-hover:bg-[#d98d12]/20 transition-colors">
            {getIcon(svc.iconName)}
          </div>
          {svc.number && (
            <span className="font-mono text-xs font-bold text-[#d98d12] tracking-wider bg-[#102d24] px-2.5 py-1 rounded-md border border-[#214c3e]">
              {svc.number}
            </span>
          )}
        </div>

        <h4 className="font-display font-bold text-xl sm:text-2xl text-[#f7f4ec] mb-3 group-hover:text-[#d98d12] transition-colors leading-snug">
          {svc.title}
        </h4>

        <p className="text-sm text-[#a3b9af] leading-relaxed mb-6">
          {svc.description}
        </p>
      </div>

      <div className="pt-4 border-t border-[#1e4639]">
        <span className="font-mono text-xs font-semibold text-[#8ca398] tracking-wider">
          {svc.tag}
        </span>
      </div>
    </article>
  );

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#0e261f] text-[#f7f4ec] relative"
      aria-labelledby="svc-h"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d98d12]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9db1a8]">
              WHAT I DO
            </span>
          </div>
          <h2
            id="svc-h"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f7f4ec] tracking-tight leading-[1.1]"
          >
            Graphic Design & Video Editing
          </h2>
          <p className="text-base sm:text-lg text-[#9cb2a9] leading-relaxed">
            Visuals that build your brand, communicate your ideas, and make your content stand out — from polished design systems to engaging video experiences.
          </p>
        </div>

        {/* Category 1: Graphic Design */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d98d12]" aria-hidden="true" />
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f7f4ec] tracking-tight">
              Graphic Design
            </h3>
            <div className="h-px flex-1 bg-[#1e4639]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GRAPHIC_DESIGN_SERVICES.map(renderServiceCard)}
          </div>
        </div>

        {/* Category 2: Video Editing */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d98d12]" aria-hidden="true" />
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f7f4ec] tracking-tight">
              Video Editing
            </h3>
            <div className="h-px flex-1 bg-[#1e4639]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VIDEO_EDITING_SERVICES.map(renderServiceCard)}
          </div>
        </div>
      </div>
    </section>
  );
};
