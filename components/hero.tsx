"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Check } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on initial mount
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-900 pt-32 sm:pt-40 pb-20 sm:pb-28"
    >
      {/* Full-Screen Edge-to-Edge Background Image with Smooth Scale-In */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/hero-minivan.jpg"
          alt="SLN Transportation Toyota Sienna Student Vehicle"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-right md:object-[80%_center] transition-all duration-1200 ease-out ${
            mounted ? "scale-100 opacity-100" : "scale-108 opacity-40 blur-[3px]"
          }`}
        />

        {/* Soft, Subtle Dark Tint on Left: Photo remains fully bright and visible */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent sm:via-black/20 transition-opacity duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container with Staggered Kinetic Entrance */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl text-left">
          {/* Step 1: Badge Tag (Delays 100ms) */}
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white text-xs font-semibold mb-5 shadow-xs transition-all duration-700 ease-out ${
              mounted
                ? "opacity-100 translate-y-0 scale-100 blur-0"
                : "opacity-0 -translate-y-3 scale-95 blur-xs"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>Student Transportation • Chicago, IL</span>
          </div>

          {/* Step 2: Hero Title with Soft Lens Blur-to-Focus (Delays 300ms) */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-white/90 leading-[1.15] mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-800 ease-out ${
              mounted
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-6 blur-sm"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Student Safety Is Always{" "}
            <span className="text-white/90 block sm:inline">
              Our First Priority.
            </span>
          </h1>

          {/* Step 3: Hero Description (Delays 500ms) */}
          <p
            className={`text-sm sm:text-base text-white/80 max-w-lg font-normal leading-relaxed mb-7 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] transition-all duration-800 ease-out ${
              mounted
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-5 blur-xs"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Providing trustworthy door-to-door transportation, specialized care for
            students with special needs, and attentive driver & monitor teams across
            Chicago and Cook County.
          </p>

          {/* Step 4: CTA Buttons (Delays 700ms) */}
          <div
            className={`flex flex-wrap items-center gap-3 mb-7 transition-all duration-700 ease-out ${
              mounted
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <Link
              href="#apply"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-lg bg-[#f97316] text-white font-bold text-[13.5px] shadow-md active:translate-y-0 transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg bg-black/35 hover:bg-black/50 backdrop-blur-md border border-white/60 text-white font-semibold text-[13.5px] transition-all duration-200 shadow-xs hover:scale-[1.02]"
            >
              Contact Us
            </Link>
          </div>

          {/* Step 5: Trust Checklist (Delays 900ms) */}
          <div
            className={`flex flex-wrap items-center gap-y-2 gap-x-6 pt-5 border-t border-white/25 text-white text-xs sm:text-[13.5px] font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] transition-all duration-800 ease-out ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-white stroke-[3]" />
              <span>Background-Checked Staff</span>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-white stroke-[3]" />
              <span>Door-to-Door Routes</span>
            </div>

            <div className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-white stroke-[3]" />
              <span>Climate-Controlled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
