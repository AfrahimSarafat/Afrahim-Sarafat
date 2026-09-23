import React from "react";
import { ArrowRight, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { ProfileData } from "../portfolioData";

interface HeroProps {
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

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const socialPlatforms = [
    {
      name: "Behance",
      url: profile.contact.behanceUrl || "https://www.behance.net/hmsharafat",
      icon: <BehanceIcon className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      url: profile.contact.linkedinUrl || "https://www.linkedin.com/in/afrahim-sarafat-3b6348437/",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "Instagram",
      url: profile.contact.instagramUrl || "https://www.instagram.com/afrahim_sarafat/",
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      name: "YouTube",
      url: profile.contact.youtubeUrl || "https://www.youtube.com/@dreamongraphic",
      icon: <Youtube className="w-4 h-4" />,
    },
    {
      name: "Facebook",
      url: profile.contact.facebookUrl || "https://www.facebook.com/share/1EBGJ4XRRo/",
      icon: <Facebook className="w-4 h-4" />,
    },
  ];

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden" aria-labelledby="hero-name">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1b3e32]/20 bg-[#e7e1d1]/70 text-xs font-medium text-[#1c3027]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Available for Projects</span>
            </div>

            {/* Main Name Heading with smooth inside-out scale popup animation on entry/scroll */}
            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, scale: 0.84, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display font-extrabold tracking-tight text-[#11241d] leading-[1.05] origin-left"
            >
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-[#34483e] mb-2 sm:mb-3">
                Hi, I am
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                {profile.firstName}{" "}
                <span className="text-[#d98d12]">{profile.lastNameAccent}</span>
              </span>
            </motion.h1>

            {/* Role */}
            <p className="font-display font-semibold text-lg sm:text-xl text-[#23382f]">
              {profile.role}
            </p>

            {/* Intro paragraph */}
            <p className="text-[#4e5f56] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {profile.intro}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-view-work-btn"
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#d98d12] hover:bg-[#c27c0d] active:scale-[0.98] text-[#0d221b] font-display font-bold text-sm tracking-wide transition-all shadow-md shadow-[#d98d12]/25"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                id="hero-lets-talk-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#22362d]/70 hover:border-[#11241d] hover:bg-[#ece6d5] active:scale-[0.98] text-[#11241d] font-display font-bold text-sm tracking-wide transition-all"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <ul className="flex items-center gap-3.5 sm:gap-4 text-[#394a42]">
                {socialPlatforms.map((platform) => (
                  <li key={platform.name} className="relative group/tooltip">
                    <a
                      id={`hero-social-${platform.name.toLowerCase()}`}
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer"
                      title={platform.name}
                      aria-label={platform.name}
                      className="w-10 h-10 rounded-full border border-[#d6cfbe] bg-[#f7f4ec]/80 hover:border-[#d98d12] hover:text-[#d98d12] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-xs"
                    >
                      {platform.icon}
                    </a>
                    {/* Tooltip */}
                    <div
                      role="tooltip"
                      className="absolute -top-9 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 transition-all duration-200 z-30 flex flex-col items-center"
                    >
                      <div className="bg-[#0e261f] text-[#f7f4ec] text-[11px] font-medium tracking-wide py-1 px-2.5 rounded-md shadow-md whitespace-nowrap border border-[#214c3e]">
                        {platform.name}
                      </div>
                      <div className="w-1.5 h-1.5 bg-[#0e261f] rotate-45 -mt-0.5 border-r border-b border-[#214c3e]" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Figure matching screenshot with golden offset border & years badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Golden warm background frame card */}
              <div
                className="absolute inset-0 bg-[#e49c25] rounded-[2.2rem] translate-x-3 translate-y-3 -rotate-1 opacity-90 transition-transform"
                aria-hidden="true"
              />

              {/* Main portrait frame */}
              <div className="relative z-10 rounded-[2.2rem] overflow-hidden border-2 border-[#132c25]/15 bg-[#142e26] shadow-2xl aspect-[4/5] group">
                <img
                  src={profile.heroImage}
                  alt={`Portrait of ${profile.name}`}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
