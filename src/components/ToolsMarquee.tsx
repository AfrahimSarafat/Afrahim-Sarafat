import React from "react";
import {
  Film,
  Sparkles,
  PenTool,
  Image as ImageIcon,
} from "lucide-react";
import { TOOLS_LIST } from "../portfolioData";

export const ToolsMarquee: React.FC = () => {
  const getToolIcon = (name: string) => {
    switch (name) {
      case "Adobe Premiere Pro":
        return <Film className="w-4 h-4 text-[#d98d12]" />;
      case "Adobe After Effect":
      case "Adobe After Effects":
        return <Sparkles className="w-4 h-4 text-[#d98d12]" />;
      case "Adobe Illustrator":
        return <PenTool className="w-4 h-4 text-[#d98d12]" />;
      case "Adobe Photoshop":
        return <ImageIcon className="w-4 h-4 text-[#d98d12]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#d98d12]" />;
    }
  };

  // Group duplicated for seamless infinite loop (two balanced halves for 50% translate)
  const singleSet = [...TOOLS_LIST, ...TOOLS_LIST, ...TOOLS_LIST];
  const duplicatedTools = [...singleSet, ...singleSet];

  return (
    <section className="py-10 border-y border-[#e5dfcf] bg-[#f2ede0] overflow-hidden" aria-label="Tools I work with">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7b73]">
          The kit I reach for every day
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#f2ede0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#f2ede0] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3">
          {duplicatedTools.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#faf7f0] border border-[#ded7c4] shadow-xs text-xs font-semibold text-[#182a22] shrink-0 hover:border-[#d98d12] transition-colors"
            >
              {getToolIcon(tool.name)}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
