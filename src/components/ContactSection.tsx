import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Dribbble,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ProfileData } from "../portfolioData";

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "product",
    budget: "5-15",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f7f4ec]" aria-labelledby="contact-h">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Intro & Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#d98d12]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#63756d]">
                  Let's talk
                </span>
              </div>
              <h2
                id="contact-h"
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11241d] tracking-tight leading-[1.1]"
              >
                Have a project in mind? I'd love to hear it.
              </h2>
              <p className="text-base text-[#4f6158] leading-relaxed">
                I take on a small number of projects each quarter so I can give each one real attention. Tell me a little about what you're building and I'll reply within two working days.
              </p>
            </div>

            {/* Direct Channels */}
            <ul className="space-y-5 text-sm text-[#273a31]">
              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ece6d5] border border-[#ded8c7] flex items-center justify-center text-[#d98d12] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#71827a]">
                    Email
                  </span>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="font-medium hover:text-[#d98d12] transition-colors"
                  >
                    {profile.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ece6d5] border border-[#ded8c7] flex items-center justify-center text-[#d98d12] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#71827a]">
                    Phone
                  </span>
                  <a
                    href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                    className="font-medium hover:text-[#d98d12] transition-colors"
                  >
                    {profile.contact.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ece6d5] border border-[#ded8c7] flex items-center justify-center text-[#d98d12] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#71827a]">
                    Based in
                  </span>
                  <span className="font-medium text-[#273a31]">
                    {profile.contact.location}
                  </span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-2">
              <ul className="flex items-center gap-3.5 text-[#374941]">
                <li>
                  <a
                    href={profile.contact.dribbbleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#d6cfbe] hover:border-[#d98d12] hover:text-[#d98d12] flex items-center justify-center transition-all"
                    aria-label="Dribbble"
                  >
                    <Dribbble className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.contact.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#d6cfbe] hover:border-[#d98d12] hover:text-[#d98d12] flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.contact.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#d6cfbe] hover:border-[#d98d12] hover:text-[#d98d12] flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#ede8dc] border border-[#ddd6c5] rounded-3xl p-6 sm:p-10 shadow-xl text-left">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#11241d]">
                    Message received!
                  </h3>
                  <p className="text-sm text-[#4d5e56] max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out — your message is on its way to {profile.name}. I'll review what you shared and get back to you within two working days.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        type: "product",
                        budget: "5-15",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center px-5 py-2.5 rounded-lg border border-[#c9c1ae] text-xs font-semibold text-[#182a22] hover:bg-[#e4dcbf] transition-all mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMsg && (
                    <div className="p-3 text-xs bg-rose-500/10 border border-rose-500/20 text-rose-800 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cf-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#43554d] mb-1.5"
                      >
                        Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="cf-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] placeholder:text-[#889890] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cf-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#43554d] mb-1.5"
                      >
                        Email <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="cf-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] placeholder:text-[#889890] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cf-type"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#43554d] mb-1.5"
                    >
                      What do you need?
                    </label>
                    <select
                      id="cf-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] outline-none transition-all cursor-pointer"
                    >
                      <option value="product">Product design (UX/UI)</option>
                      <option value="brand">Brand &amp; identity</option>
                      <option value="system">Design system</option>
                      <option value="direction">Art direction</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="cf-budget"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#43554d] mb-1.5"
                    >
                      Rough budget
                    </label>
                    <select
                      id="cf-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] outline-none transition-all cursor-pointer"
                    >
                      <option value="lt5">Under €5k</option>
                      <option value="5-15">€5k – €15k</option>
                      <option value="15-40">€15k – €40k</option>
                      <option value="40plus">€40k+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="cf-msg"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#43554d] mb-1.5"
                    >
                      Tell me about the project <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      id="cf-msg"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What are you building, and what does success look like?"
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] placeholder:text-[#889890] outline-none transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#d98d12] hover:bg-[#c27c0d] active:scale-[0.99] text-[#0d221b] font-display font-bold text-sm tracking-wide transition-all shadow-md shadow-[#d98d12]/20"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#6b7d75] text-center">
                    I treat your project details confidentially. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
