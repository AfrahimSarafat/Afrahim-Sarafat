import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ToolsMarquee } from "./components/ToolsMarquee";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { WorkSection } from "./components/WorkSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { EditProfileModal } from "./components/EditProfileModal";
import { ProfileData, INITIAL_PROFILE, ProjectItem } from "./portfolioData";

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem("afrahim_sarafat_portfolio_profile");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name && !parsed.name.includes("Nadia")) {
          if (parsed.heroImage?.includes("unsplash.com/photo-1507003211169")) {
            parsed.heroImage = INITIAL_PROFILE.heroImage;
          }
          if (parsed.role === "Product Designer & Art Director") {
            parsed.role = INITIAL_PROFILE.role;
          }
          if (parsed.intro?.includes("Eight years, one obsession: clarity")) {
            parsed.intro = INITIAL_PROFILE.intro;
          }
          if (parsed.availability?.includes("Autumn 2026") || parsed.availability?.includes("Freelance")) {
            parsed.availability = INITIAL_PROFILE.availability;
          }
          if (!parsed.contact?.behanceUrl || parsed.contact?.instagramUrl?.includes("instagram.com/p/")) {
            parsed.contact = { ...parsed.contact, ...INITIAL_PROFILE.contact };
          }
          if (parsed.aboutHeading?.includes("quiet parts")) {
            parsed.aboutHeading = INITIAL_PROFILE.aboutHeading;
            parsed.aboutLead = INITIAL_PROFILE.aboutLead;
            parsed.aboutParagraph1 = INITIAL_PROFILE.aboutParagraph1;
            parsed.aboutParagraph2 = INITIAL_PROFILE.aboutParagraph2;
            parsed.studioImage = INITIAL_PROFILE.studioImage;
          }
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROFILE;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Update document title dynamically if user changes their name
  useEffect(() => {
    document.title = `${profile.name} — Product Designer & Art Director`;
  }, [profile.name]);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem("afrahim_sarafat_portfolio_profile", JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not persist profile changes", e);
    }
  };

  const handleResetProfile = () => {
    setProfile(INITIAL_PROFILE);
    try {
      localStorage.removeItem("afrahim_sarafat_portfolio_profile");
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17211d] flex flex-col font-sans selection:bg-[#e49c25] selection:text-[#0e261f]">
      {/* Top Anchor for smooth scroll */}
      <span id="top" className="block -mt-20 pt-20" aria-hidden="true" />

      {/* Navigation Header */}
      <Header
        profile={profile}
        onOpenEditModal={() => setEditModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main id="main" className="flex-1">
        {/* 1. Home Section (Hero & Tools Marquee) */}
        <Hero profile={profile} />
        <ToolsMarquee />

        {/* 2. Work Section */}
        <WorkSection onSelectProject={setSelectedProject} />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. About Section */}
        <AboutSection profile={profile} />

        {/* Testimonials Voices Section */}
        <TestimonialsSection />

        {/* 5. Contact Section */}
        <ContactSection profile={profile} />
      </main>

      {/* Site Footer */}
      <Footer profile={profile} />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Edit Profile Info Modal */}
      <EditProfileModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
