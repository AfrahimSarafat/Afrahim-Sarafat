import React from "react";
import { Instagram, Linkedin, Youtube, Facebook, ArrowUp } from "lucide-react";
import { ProfileData } from "../portfolioData";

interface FooterProps {
  profile: ProfileData;
}

const BehanceIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1e18] text-[#f7f4ec] pt-16 pb-12 border-t border-[#18392f]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1b4337] text-left">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-5">
            <a href="#top" className="flex items-center gap-3 group inline-flex" aria-label="Back to top">
              <div className="w-9 h-9 rounded-lg bg-[#d98d12] text-[#0b1e18] flex items-center justify-center font-display font-bold text-sm">
                {profile.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-[#f7f4ec] leading-tight">
                  {profile.name}
                </span>
                <span className="text-[11px] text-[#8ea79b] font-medium">
                  Graphic Designer &amp; Video Editor
                </span>
              </div>
            </a>

            <p className="text-sm text-[#92ab9e] max-w-sm leading-relaxed">
              Graphic designer and video editor creating bold visuals and engaging videos. {profile.availability}.
            </p>

            <ul className="flex items-center gap-3 pt-2 text-[#9bb3a6]">
              {[
                {
                  id: "behance",
                  name: "Behance",
                  url: profile.contact.behanceUrl || "https://www.behance.net/hmsharafat",
                  icon: BehanceIcon,
                },
                {
                  id: "linkedin",
                  name: "LinkedIn",
                  url: profile.contact.linkedinUrl,
                  icon: Linkedin,
                },
                {
                  id: "instagram",
                  name: "Instagram",
                  url: profile.contact.instagramUrl,
                  icon: Instagram,
                },
                {
                  id: "youtube",
                  name: "YouTube",
                  url: profile.contact.youtubeUrl || "https://www.youtube.com/@dreamongraphic",
                  icon: Youtube,
                },
                {
                  id: "facebook",
                  name: "Facebook Page",
                  url: profile.contact.facebookUrl || "https://www.facebook.com/share/1EBGJ4XRRo/",
                  icon: Facebook,
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.id} className="relative group/tooltip">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-full border border-[#1f483a] bg-[#14342b]/50 text-[#c7dad0] hover:border-[#d98d12] hover:bg-[#d98d12] hover:text-[#0b1e18] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
                    >
                      <Icon className="w-4 h-4" />
                    </a>

                    {/* Tooltip on hover */}
                    <div
                      role="tooltip"
                      className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#d98d12] text-[#0b1e18] text-[11px] font-bold tracking-wide shadow-xl pointer-events-none opacity-0 group-hover/tooltip:opacity-100 -translate-y-1 group-hover/tooltip:translate-y-0 transition-all duration-150 whitespace-nowrap z-30"
                    >
                      {social.name}
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#d98d12]"
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Explore Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#d98d12]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#92ab9e]">
              <li><a href="#top" className="hover:text-[#f7f4ec] transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-[#f7f4ec] transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-[#f7f4ec] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#f7f4ec] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#f7f4ec] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#d98d12]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#92ab9e]">
              <li><a href="#services" className="hover:text-[#f7f4ec] transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="hover:text-[#f7f4ec] transition-colors">Video Editing</a></li>
              <li><a href="#services" className="hover:text-[#f7f4ec] transition-colors">Brand &amp; Visual Identity</a></li>
              <li><a href="#services" className="hover:text-[#f7f4ec] transition-colors">Motion Graphics &amp; Animation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e968a]">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>
              Free template by{" "}
              <a
                href="https://uicookies.com/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#d98d12] transition-colors"
              >
                uiCookies
              </a>
              .
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-full border border-[#1b4337] hover:border-[#d98d12] hover:text-[#d98d12] transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
