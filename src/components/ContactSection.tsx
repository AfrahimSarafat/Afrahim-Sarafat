import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { ProfileData } from "../portfolioData";

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Graphic Design",
    budget: "৳5,000–৳10,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [needsActivationNote, setNeedsActivationNote] = useState(false);

  // Exact contact information with both verified address variants
  const primaryEmail = "hmsharafat6@gmail.com";
  const displayEmail = "hmsarafat6@gmail.com";
  const contactPhone = "+8801608-201844";
  const contactLocation = "Dhaka, Bangladesh";

  // Exactly 4 social channels with tooltips and exact links
  const socialChannels = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/8801608201844",
      icon: MessageCircle,
      tooltipColor: "bg-[#0e261f]",
    },
    {
      id: "facebook",
      name: "Facebook",
      url: profile.contact.facebookUrl || "https://www.facebook.com/share/1EBGJ4XRRo/",
      icon: Facebook,
      tooltipColor: "bg-[#0e261f]",
    },
    {
      id: "instagram",
      name: "Instagram",
      url: profile.contact.instagramUrl || "https://www.instagram.com/afrahim_sarafat/",
      icon: Instagram,
      tooltipColor: "bg-[#0e261f]",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: profile.contact.linkedinUrl || "https://www.linkedin.com/in/afrahim-sarafat-3b6348437/",
      icon: Linkedin,
      tooltipColor: "bg-[#0e261f]",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);
    setNeedsActivationNote(false);

    try {
      // Direct email delivery via FormSubmit ajax endpoint delivering to both email addresses
      const response = await fetch(`https://formsubmit.co/ajax/${primaryEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name.trim(),
          Email: formData.email.trim(),
          Service: formData.type,
          Budget: formData.budget,
          Message: formData.message.trim(),
          _replyto: formData.email.trim(),
          _cc: displayEmail,
          _subject: `New Portfolio Message from ${formData.name.trim()} (${formData.type})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === "true" || data.message?.includes("Activation")))) {
        if (data?.message?.includes("Activation")) {
          setNeedsActivationNote(true);
        }
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        throw new Error(data?.message || "Failed to deliver message");
      }
    } catch (err: any) {
      console.warn("Form submission error:", err);
      // Fallback: still notify the user and provide instant direct email option
      setErrorMsg(
        "Could not send automatically. Please click below to send directly via your email app."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#ece7db] relative border-t border-[#0e261f]/25"
      aria-labelledby="contact-h"
    >
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
                    href={`mailto:${displayEmail}?cc=${primaryEmail}`}
                    className="font-medium hover:text-[#d98d12] transition-colors"
                  >
                    {displayEmail}
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
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="font-medium hover:text-[#d98d12] transition-colors"
                  >
                    {contactPhone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ece6d5] border border-[#ded8c7] flex items-center justify-center text-[#d98d12] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#71827a]">
                    Location
                  </span>
                  <span className="font-medium text-[#273a31]">
                    {contactLocation}
                  </span>
                </div>
              </li>
            </ul>

            {/* Exactly 4 Social Channel Icons with Hover Tooltips */}
            <div className="pt-2">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#71827a] mb-3">
                Connect Directly
              </span>
              <ul className="flex items-center gap-3.5 text-[#374941]">
                {socialChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <li key={channel.id} className="relative group/tooltip">
                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full border border-[#d6cfbe] bg-[#f2ede0] text-[#2b3e34] hover:border-[#d98d12] hover:bg-[#d98d12] hover:text-[#0e261f] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
                        aria-label={channel.name}
                        title={channel.name}
                      >
                        <Icon className="w-4 h-4" />
                      </a>

                      {/* Tooltip on hover */}
                      <div
                        role="tooltip"
                        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#0e261f] text-white text-[11px] font-medium tracking-wide shadow-xl pointer-events-none opacity-0 group-hover/tooltip:opacity-100 -translate-y-1 group-hover/tooltip:translate-y-0 transition-all duration-200 whitespace-nowrap z-30"
                      >
                        {channel.name}
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0e261f]"
                          aria-hidden="true"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#ede8dc] border border-[#ddd6c5] rounded-3xl p-6 sm:p-10 shadow-xl text-left">
              {submitted ? (
                <div className="py-10 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#11241d]">
                    Message sent successfully!
                  </h3>
                  <p className="text-sm text-[#4d5e56] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message details have been dispatched to{" "}
                    <strong className="text-[#11241d]">{displayEmail}</strong>. I will review your inquiry and reply within two working days.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${displayEmail}?cc=${primaryEmail}&subject=${encodeURIComponent(
                        `Portfolio Inquiry: ${formData.type} from ${formData.name}`
                      )}&body=${encodeURIComponent(
                        `Hi Afrahim,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.type}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e261f] text-white hover:bg-[#194033] text-xs font-semibold shadow-sm transition-all"
                    >
                      <Mail className="w-4 h-4 text-[#d98d12]" />
                      <span>Open directly in Gmail / Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          type: "Graphic Design",
                          budget: "৳5,000–৳10,000",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center px-4 py-2.5 rounded-xl border border-[#c9c1ae] text-xs font-semibold text-[#182a22] hover:bg-[#e4dcbf] transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMsg && (
                    <div className="p-3.5 text-xs bg-rose-500/10 border border-rose-500/20 text-rose-800 rounded-xl flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                      <div className="space-y-1.5">
                        <p>{errorMsg}</p>
                        <a
                          href={`mailto:${displayEmail}?cc=${primaryEmail}&subject=${encodeURIComponent(
                            `Portfolio Inquiry: ${formData.type}`
                          )}&body=${encodeURIComponent(
                            `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
                          )}`}
                          className="inline-block font-bold underline hover:text-rose-950"
                        >
                          Click here to send directly via your email client
                        </a>
                      </div>
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
                      WHAT DO YOU NEED?
                    </label>
                    <select
                      id="cf-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] outline-none transition-all cursor-pointer"
                    >
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Logo Design & Brand Identity">Logo Design &amp; Brand Identity</option>
                      <option value="Social Media Design">Social Media Design</option>
                      <option value="Presentation Design">Presentation Design</option>
                      <option value="Print Design">Print Design</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Short-form Video Editing">Short-form Video Editing</option>
                      <option value="Long-form Video Editing">Long-form Video Editing</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Promotional / Ad Video">Promotional / Ad Video</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="cf-budget"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#43554d] mb-1.5"
                    >
                      ROUGH BUDGET
                    </label>
                    <select
                      id="cf-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] outline-none transition-all cursor-pointer"
                    >
                      <option value="Below ৳5,000">Below ৳5,000</option>
                      <option value="৳5,000–৳10,000">৳5,000–৳10,000</option>
                      <option value="৳10,000–৳20,000">৳10,000–৳20,000</option>
                      <option value="৳20,000–৳50,000">৳20,000–৳50,000</option>
                      <option value="৳50,000+">৳50,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
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
                      placeholder="Tell me about your project, goals, and what you’d like to create."
                      className="w-full px-4 py-3 rounded-xl bg-[#f7f4ec] border border-[#d5cebd] focus:border-[#d98d12] focus:ring-1 focus:ring-[#d98d12] text-sm text-[#11241d] placeholder:text-[#889890] outline-none transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#d98d12] hover:bg-[#c27c0d] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed text-[#0d221b] font-display font-bold text-sm tracking-wide transition-all shadow-md shadow-[#d98d12]/20 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#6b7d75] text-center">
                    Submissions are delivered directly to {displayEmail}. No spam, ever.
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
