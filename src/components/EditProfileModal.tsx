import React, { useState } from "react";
import { X, Save, RotateCcw, Check, Sparkles } from "lucide-react";
import { ProfileData, INITIAL_PROFILE } from "../portfolioData";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  onReset: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [activeTab, setActiveTab] = useState<"general" | "about" | "contact">("general");
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  const handleResetToDefault = () => {
    if (window.confirm("Reset all profile information to original template defaults?")) {
      setFormData(INITIAL_PROFILE);
      onReset();
      onClose();
    }
  };

  return (
    <div
      id="edit-profile-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#091712]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#f7f4ec] text-[#11241d] rounded-3xl overflow-hidden shadow-2xl border border-[#d6cfbe] my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#e2dbcb] flex items-center justify-between bg-[#f0ebe0]">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d98d12]" />
              <h2 className="font-display font-bold text-xl text-[#11241d]">
                Customize Portfolio Info
              </h2>
            </div>
            <p className="text-xs text-[#607168] mt-0.5">
              Edit your details below to personalize the website. Changes update live!
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#56685f] hover:text-[#11241d] rounded-full hover:bg-[#e4dcbf] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center px-6 pt-3 border-b border-[#e2dbcb] gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("general")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "general"
                ? "border-[#d98d12] text-[#11241d]"
                : "border-transparent text-[#6e8076] hover:text-[#11241d]"
            }`}
          >
            General &amp; Hero
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("about")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "about"
                ? "border-[#d98d12] text-[#11241d]"
                : "border-transparent text-[#6e8076] hover:text-[#11241d]"
            }`}
          >
            About &amp; Stats
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("contact")}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === "contact"
                ? "border-[#d98d12] text-[#11241d]"
                : "border-transparent text-[#6e8076] hover:text-[#11241d]"
            }`}
          >
            Contact &amp; Socials
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-4 text-left text-xs">
          {activeTab === "general" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      const name = e.target.value;
                      const parts = name.trim().split(" ");
                      const first = parts[0] || "";
                      const last = parts.slice(1).join(" ") + (parts.length > 1 ? "." : "");
                      const initials = (first[0] || "") + (parts[1]?.[0] || "");
                      setFormData({
                        ...formData,
                        name,
                        firstName: first,
                        lastNameAccent: last,
                        initials: initials.toUpperCase() || "ME",
                      });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Initials (Logo Badge)
                  </label>
                  <input
                    type="text"
                    maxLength={3}
                    value={formData.initials}
                    onChange={(e) =>
                      setFormData({ ...formData, initials: e.target.value.toUpperCase() })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  Professional Role &amp; Location Tagline
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  Availability Status Badge
                </label>
                <input
                  type="text"
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  Hero Intro Statement
                </label>
                <textarea
                  rows={3}
                  value={formData.intro}
                  onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  Hero Portrait Image URL
                </label>
                <input
                  type="url"
                  value={formData.heroImage}
                  onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  About Section Heading
                </label>
                <input
                  type="text"
                  value={formData.aboutHeading}
                  onChange={(e) => setFormData({ ...formData, aboutHeading: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  About Lead Paragraph
                </label>
                <textarea
                  rows={2}
                  value={formData.aboutLead}
                  onChange={(e) => setFormData({ ...formData, aboutLead: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Years Freelancing
                  </label>
                  <input
                    type="number"
                    value={formData.stats.yearsFreelancing}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stats: { ...formData.stats, yearsFreelancing: Number(e.target.value) || 0 },
                        yearsExperience: Number(e.target.value) || 0,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Projects Shipped
                  </label>
                  <input
                    type="number"
                    value={formData.stats.projectsShipped}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stats: { ...formData.stats, projectsShipped: Number(e.target.value) || 0 },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Happy Clients
                  </label>
                  <input
                    type="number"
                    value={formData.stats.happyClients}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stats: { ...formData.stats, happyClients: Number(e.target.value) || 0 },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  Studio Location Badge Text
                </label>
                <input
                  type="text"
                  value={formData.studioLocation}
                  onChange={(e) => setFormData({ ...formData, studioLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, email: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.contact.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, phone: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#44564e] mb-1">
                  Location Text
                </label>
                <input
                  type="text"
                  value={formData.contact.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, location: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={formData.contact.linkedinUrl}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, linkedinUrl: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#44564e] mb-1">
                    Dribbble / Portfolio URL
                  </label>
                  <input
                    type="url"
                    value={formData.contact.dribbbleUrl}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, dribbbleUrl: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d5cebd] text-sm text-[#11241d] outline-none focus:border-[#d98d12]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#e2dbcb] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#73857d] hover:text-[#11241d] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#54665d] hover:text-[#11241d] transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#d98d12] hover:bg-[#c27c0d] text-[#0d221b] font-display font-bold text-xs tracking-wide transition-all shadow-sm"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
