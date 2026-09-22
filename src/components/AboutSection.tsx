import React from "react";
import { ProfileData } from "../portfolioData";

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const aboutImage = "https://i.ibb.co/2YC2T9jk/afra.png";

  return (
    <section id="about" className="py-20 md:py-28 bg-[#f7f4ec]" aria-labelledby="about-h">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Profile Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="rounded-3xl overflow-hidden border border-[#d6cfbe] shadow-xl bg-[#ece5d5] aspect-[4/5] relative">
                <img
                  src={aboutImage}
                  alt={`${profile.name} - Graphic Designer & Video Editor`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#d98d12]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#64746d]">
                A little about me
              </span>
            </div>

            <h2
              id="about-h"
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11241d] tracking-tight leading-[1.15]"
            >
              I turn ideas into bold visuals and engaging stories.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#475950] leading-relaxed">
              <p>
                I'm Afrahim Sarafat, a Graphic Designer &amp; Video Editor focused on creating clear, engaging, and visually compelling content. I combine design and video to help brands, businesses, and creators communicate their ideas with confidence.
              </p>
              <p>
                My work spans visual identity, social media design, presentation design, video editing, motion graphics, and promotional content. I care about strong composition, thoughtful typography, clean visuals, and editing that keeps the story moving.
              </p>
              <p>
                I believe good visual work should do more than look good — it should communicate, connect, and leave a lasting impression. Whether I'm designing a visual or editing a video, I focus on turning ideas into polished experiences that feel intentional and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
