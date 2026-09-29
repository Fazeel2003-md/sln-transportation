"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, MapPin, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#f4eeee] overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#160202]/10 text-[#160202] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#f97316]" />
            <span>About SLN Transportation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#160202] tracking-tight leading-[1.2] mb-5 font-heading">
            Bridging the Gap in Specialized Student Transportation Across Chicago
          </h2>
          <p className="text-base sm:text-lg text-[#160202]/75 leading-relaxed">
            We provide personalized, door-to-door transit solutions designed specifically for students with unique needs, out-of-district routes, and specialized programs throughout Cook County.
          </p>
        </div>

        {/* 2-Column Grid: Visual Showcase & Mission Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Image with Floating Stat Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/80 shadow-[0_16px_40px_rgba(22,2,2,0.08)] bg-white aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/about-fleet.webp"
                alt="SLN Transportation Fleet Van"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#160202]/60 uppercase tracking-wider">
                    Service Standard
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#160202]">
                    Dedicated 2-Person Crew (Driver + Monitor)
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-[#f97316]" />
                </div>
              </div>
            </div>

            {/* Floating Top-Right Stat Pill */}
            <div className="absolute -top-4 -right-2 sm:-right-4 px-4 py-3 rounded-2xl bg-white shadow-[0_8px_24px_rgba(22,2,2,0.1)] border border-white/90 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-[#160202] leading-none">99.8%</p>
                <p className="text-xs font-semibold text-[#160202]/60 mt-0.5">On-Time Arrival</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Story & Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#160202] font-heading">
                Safety, Dignity, and Dependability for Every Route
              </h3>
              <p className="text-sm sm:text-base text-[#160202]/80 leading-relaxed">
                Traditional big yellow buses often struggle with isolated routes, tight schedules, and specialized individual student care. SLN Transportation operates small, modern transit vans equipped for student comfort, wheelchair accessibility, and individual attention.
              </p>
            </div>

            {/* Pillar List */}
            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-xs flex items-start gap-4 transition-transform duration-200 hover:translate-x-1">
                <div className="p-2.5 rounded-xl bg-[#f97316]/10 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#f97316]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#160202]">
                    Certified & Fingerprinted Staff
                  </h4>
                  <p className="text-xs sm:text-sm text-[#160202]/70 mt-1 leading-normal">
                    Every driver and aide undergoes thorough background checks, CPR/First Aid training, and specialized behavior-management certification.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-xs flex items-start gap-4 transition-transform duration-200 hover:translate-x-1">
                <div className="p-2.5 rounded-xl bg-[#171717]/10 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#171717]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#160202]">
                    GPS Live Tracking & Direct Communication
                  </h4>
                  <p className="text-xs sm:text-sm text-[#160202]/70 mt-1 leading-normal">
                    Real-time vehicle telemetry keeps school administrators and parents informed with ETA notifications and instant route dispatch.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-xs flex items-start gap-4 transition-transform duration-200 hover:translate-x-1">
                <div className="p-2.5 rounded-xl bg-orange-100 shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-[#f97316]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#160202]">
                    Tailored School District Partnerships
                  </h4>
                  <p className="text-xs sm:text-sm text-[#160202]/70 mt-1 leading-normal">
                    Flexible and cost-effective contracts that adapt dynamically to individual IEP placements, homeless student transit, and charter schedules.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] text-white text-sm font-bold shadow-sm transition-all hover:bg-[#160202] hover:scale-[1.02]"
              >
                <span>Explore Specialized Programs</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Quick Stat Highlights in Floating Pill Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white shadow-[0_12px_32px_rgba(22,2,2,0.06)]">
          <div className="text-center p-3">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f97316] font-heading">
              100%
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#160202] mt-1">Certified Drivers</p>
            <p className="text-[11px] text-[#160202]/60 mt-0.5">Fully Vetted & Trained</p>
          </div>

          <div className="text-center p-3 border-l border-[#160202]/10">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171717] font-heading">
              24/7
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#160202] mt-1">Live Telemetry</p>
            <p className="text-[11px] text-[#160202]/60 mt-0.5">Real-Time Fleet GPS</p>
          </div>

          <div className="text-center p-3 border-l border-[#160202]/10">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f97316] font-heading">
              Zero
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#160202] mt-1">Missed Days</p>
            <p className="text-[11px] text-[#160202]/60 mt-0.5">McKinney-Vento Transit</p>
          </div>

          <div className="text-center p-3 border-l border-[#160202]/10">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171717] font-heading">
              Cook Co.
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#160202] mt-1">Wide Coverage</p>
            <p className="text-[11px] text-[#160202]/60 mt-0.5">Chicago & Suburbs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
