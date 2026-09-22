import React, { useEffect } from "react";
import { X, Check, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../portfolioData";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="case-study-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#091712]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#f7f4ec] text-[#11241d] rounded-3xl overflow-hidden shadow-2xl border border-[#d6cfbe] my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0e261f]/80 text-[#f7f4ec] hover:bg-[#d98d12] hover:text-[#0e261f] flex items-center justify-center transition-all shadow-md"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative w-full max-h-[58vh] overflow-hidden bg-[#091712] flex items-center justify-center">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full max-h-[58vh] object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0e261f]/90 via-transparent to-black/20" />
          <div className="absolute bottom-4 left-6 right-6 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d98d12] text-[#0e261f] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-sm">
              {project.categoryLabel}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white drop-shadow-md">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          <div>
            <h3 className="font-display font-bold text-lg text-[#11241d] mb-2">
              Project Overview
            </h3>
            <p className="text-[#4e6057] text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#e2dbcb]">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#708179] mb-1">
                Role &amp; Scope
              </span>
              <p className="text-sm font-medium text-[#11241d]">{project.role}</p>
            </div>

            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#708179] mb-1">
                Client / Brand
              </span>
              <p className="text-sm font-medium text-[#11241d]">{project.client}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#e2dbcb]">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#708179] mb-3">
              Key Deliverables
            </span>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ece6d5] border border-[#dad2bf] text-xs font-medium text-[#22362d]"
                >
                  <Check className="w-3.5 h-3.5 text-[#d98d12]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#e2dbcb]">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d98d12] hover:bg-[#c27c0d] text-[#0d221b] font-display font-bold text-xs tracking-wide transition-all shadow-sm"
            >
              <span>Discuss similar project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-[#5d6f66] hover:text-[#11241d] px-3 py-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
