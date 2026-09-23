import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ProfileData } from "../portfolioData";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface HeaderProps {
  profile: ProfileData;
  onOpenEditModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="siteHeader"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7f4ec]/95 backdrop-blur-md shadow-xs border-b border-[#e5dfcf]/80 py-3.5"
          : "bg-[#f7f4ec] py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 group select-none text-left shrink-0"
          aria-label={`${profile.name} — home`}
        >
          <div className="w-9 h-9 rounded-lg bg-[#0e261f] text-[#f7f4ec] flex items-center justify-center font-display font-bold text-sm tracking-tighter group-hover:bg-[#d98d12] transition-colors header-brand-icon">
            {profile.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base leading-tight text-[#11241d] tracking-tight group-hover:text-[#d98d12] transition-colors header-brand-name">
              {profile.name}
            </span>
            <span className="text-[11px] text-[#63726a] tracking-normal font-medium header-brand-sub">
              Graphic Designer &amp; Video Editor
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary">
          <ul className="flex items-center gap-5 lg:gap-7 text-sm font-medium text-[#2f3d36] header-nav-list">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[#d98d12] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d98d12] hover:after:w-full after:transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme switcher with Light, Night, and Dark modes */}
            <ThemeSwitcher variant="desktop" />

            {/* Let's Talk CTA Button */}
            <a
              id="header-cta-btn"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 lg:px-5 py-2.5 rounded-lg bg-[#d98d12] hover:bg-[#c27c0d] active:scale-[0.98] text-[#0d221b] font-display font-bold text-sm tracking-wide transition-all shadow-sm shadow-[#d98d12]/20 shrink-0"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg border border-[#d6cfbe] text-[#1a2b23] hover:bg-[#ede8dc] transition-colors mobile-menu-btn"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5dfcf] bg-[#f7f4ec] px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200 mobile-drawer-container">
          <ul className="space-y-3 text-base font-medium text-[#203128] mobile-nav-links">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#d98d12]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Switcher for Mobile */}
          <div className="pt-3 border-t border-[#e5dfcf]/80">
            <ThemeSwitcher variant="mobile" />
          </div>

          <div className="pt-2 border-t border-[#e5dfcf] flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#d98d12] text-[#0d221b] font-display font-bold text-sm tracking-wide shadow-sm"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
