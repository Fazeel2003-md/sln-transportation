"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Users,
  MapPin,
  Heart,
} from "lucide-react";

const VIDEO_SRC = "/videos/about-us-background.mp4";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#160202] py-24 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Left content column */}
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
            <ShieldCheck className="w-4 h-4 text-[#f97316]" />
            <span>About SLN Transportation</span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] font-bold tracking-tight leading-[1.15] mb-5 [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
            <span className="text-white">Safe Rides. </span>
            <span className="text-[#f97316]">Trusted Care.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-[17px] text-white/90 leading-relaxed max-w-[480px] mb-8 [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
            Reliable student transportation across Chicago and Cook County, with
            safety and care in every journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#f97316] hover:bg-[#ea6a0c] text-white font-bold text-[14px] shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="about-panel mt-16 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-white/15 backdrop-blur-[14px] border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.14)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0">
          {/* Safety First */}
          <div className="group flex items-start gap-4 lg:pr-6 lg:border-r border-white/15">
            <div className="about-shield w-14 h-14 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Safety First</h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Rigorous training, background checks, and ongoing safety
                protocols.
              </p>
            </div>
          </div>

          {/* Experienced Team */}
          <div className="group flex items-start gap-4 lg:px-6 lg:border-r border-white/15">
            <div className="about-users w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[#160202]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Experienced Team
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Dedicated drivers and monitors who truly care.
              </p>
            </div>
          </div>

          {/* Local Expertise */}
          <div className="group flex items-start gap-4 lg:px-6 lg:border-r border-white/15">
            <div className="about-pin w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#160202]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Local Expertise
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Serving Chicago and Cook County with reliable, on-time service.
              </p>
            </div>
          </div>

          {/* Student-Focused */}
          <div className="group flex items-start gap-4 lg:pl-6">
            <div className="about-heart w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-[#160202]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Student-Focused
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Personalized care for students with unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
