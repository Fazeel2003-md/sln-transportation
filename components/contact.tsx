"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  User,
  Layers,
  MessageSquareMore,
  Send,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const contactCards = [
  {
    label: "Our Address",
    value: "9002 Senate Dr, Des Plaines, IL 60016",
    linkText: "Open in Google Maps",
    linkHref: "https://www.google.com/maps?q=9002+Senate+Dr,+Des+Plaines,+IL+60016",
    icon: <MapPin className="w-5 h-5" />,
    chip: "bg-[#ffd9b5] text-[#ea6a0c]",
  },
  {
    label: "Email Us",
    value: "slntransportationllc999@gmail.com",
    linkText: "Send an Email",
    linkHref: "mailto:slntransportationllc999@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    chip: "bg-[#fde9a8] text-[#b57e0c]",
  },
  {
    label: "Call or WhatsApp",
    value: "+1 (773) 349-2773\n+1 (773) 564-0949",
    linkText: "Start WhatsApp Chat",
    linkHref: "https://wa.me/17733492773",
    icon: <Phone className="w-5 h-5" />,
    chip: "bg-[#c9eccd] text-[#227a2c]",
  },
];

const subjects = [
  "General Inquiry",
  "Daily School Routes",
  "Special Needs Transport",
  "McKinney-Vento Homeless Assistance",
  "Hard-to-Serve & Out-of-District Routes",
  "Careers",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "General Inquiry", message: "" });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#faf3ec] overflow-hidden"
    >
      {/* Decorative accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#fdeacc]/70 blur-3xl" />
        <div className="absolute bottom-8 left-0 w-56 h-56 rounded-full bg-[#fdeacc]/60 blur-3xl" />
        {/* Dot grid (bottom-left) */}
        <div
          className={`absolute bottom-10 left-6 w-24 h-16 opacity-70 transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: "radial-gradient(#f97316 1.4px, transparent 1.4px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left column */}
        <div className={inView ? "ct-reveal is-in" : "ct-reveal"}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f97316]">
              Get In Touch
            </span>
            <span className="h-px w-14 bg-[#f97316]/60 inline-flex" />
            <span className="text-[#f97316]/60 text-xs">·</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] text-[#160202] mb-5">
            We&rsquo;re Here
            <br />
            to <span className="text-[#f97316]">Help You</span>
          </h2>

          <p className="text-sm sm:text-base text-[#160202]/65 leading-relaxed max-w-md mb-10">
            Have a question, need support, or want to discuss your
            transportation needs? Reach out to us — we&rsquo;d love to hear
            from you.
          </p>

          {/* Contact info cards */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card, i) => (
              <div
                key={card.label}
                className="group flex items-center gap-4 sm:gap-5 p-5 rounded-2xl bg-white shadow-[0_6px_24px_rgba(22,2,2,0.06)] hover:shadow-[0_14px_36px_rgba(22,2,2,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${card.chip}`}
                >
                  {card.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#160202]/45 mb-1">
                    {card.label}
                  </p>
                  <p className="text-sm sm:text-[15px] font-semibold text-[#160202] whitespace-pre-line truncate">
                    {card.value}
                  </p>
                  <a
                    href={card.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-[#f97316] hover:text-[#ea6a0c]"
                  >
                    {card.linkText}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#f6f5f4] border border-slate-200/70 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#f97316] group-hover:border-[#f97316] group-hover:text-white text-[#160202]/60">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — form card */}
        <div className={inView ? "ct-form is-in" : "ct-form"}>
          <div className="p-6 sm:p-10 rounded-[28px] bg-white shadow-[0_18px_50px_rgba(22,2,2,0.10)]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fdeacc] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#ea6a0c] mb-4">
              Send Us a Message
            </span>

            <h3 className="text-3xl font-extrabold font-heading tracking-tight text-[#160202] mb-2">
              Let&rsquo;s Talk
            </h3>

            <p className="text-sm text-[#160202]/60 leading-relaxed mb-8">
              Fill out the form below and we&rsquo;ll get back to you as soon
              as possible.
            </p>

            {sent ? (
              <div className="flex flex-col items-center text-center py-10 gap-3">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <p className="text-lg font-bold font-heading text-[#160202]">
                  Message Sent!
                </p>
                <p className="text-sm text-[#160202]/60">
                  Our dispatch team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-sm font-semibold text-[#160202] mb-2">
                      Your Full Name <span className="text-[#f97316]">*</span>
                    </span>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#160202]/35" />
                      <input
                        required
                        type="text"
                        placeholder="e.g. Sarah Johnson"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#f6f5f4] border border-slate-200/80 text-sm text-[#160202] placeholder:text-[#160202]/35 outline-none transition-all duration-200 focus:border-[#f97316] focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="block text-sm font-semibold text-[#160202] mb-2">
                      Phone Number <span className="text-[#f97316]">*</span>
                    </span>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#160202]/35" />
                      <input
                        required
                        type="tel"
                        placeholder="(773) 000-0000"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#f6f5f4] border border-slate-200/80 text-sm text-[#160202] placeholder:text-[#160202]/35 outline-none transition-all duration-200 focus:border-[#f97316] focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="block text-sm font-semibold text-[#160202] mb-2">
                    Email Address <span className="text-[#f97316]">*</span>
                  </span>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#160202]/35" />
                    <input
                      required
                      type="email"
                      placeholder="sarah@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#f6f5f4] border border-slate-200/80 text-sm text-[#160202] placeholder:text-[#160202]/35 outline-none transition-all duration-200 focus:border-[#f97316] focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-[#160202] mb-2">
                    Subject
                  </span>
                  <div className="relative">
                    <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#160202]/35 pointer-events-none" />
                    <select
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#f6f5f4] border border-slate-200/80 text-sm text-[#160202] outline-none transition-all duration-200 focus:border-[#f97316] focus:bg-white appearance-none cursor-pointer"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#160202]/45 rotate-90 pointer-events-none" />
                  </div>
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-[#160202] mb-2">
                    Message <span className="text-[#f97316]">*</span>
                  </span>
                  <div className="relative">
                    <MessageSquareMore className="absolute left-4 top-4 w-4 h-4 text-[#160202]/35" />
                    <textarea
                      required
                      rows={3}
                      placeholder="How can SLN Transportation assist you today?"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#f6f5f4] border border-slate-200/80 text-sm text-[#160202] placeholder:text-[#160202]/35 outline-none transition-all duration-200 focus:border-[#f97316] focus:bg-white focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)] resize-none"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#f97316] to-[#ea6a0c] text-white font-bold text-sm shadow-[0_10px_26px_rgba(249,115,22,0.35)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(249,115,22,0.5)] hover:scale-[1.02] cursor-pointer"
                >
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
