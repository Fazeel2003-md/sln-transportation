"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Accessibility,
  Home,
  Compass,
  ArrowRight,
  ShieldCheck,
  Users2,
  Clock,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "special-needs",
    title: "Special Needs & Individualized IEP Transit",
    badge: "Specialized Care",
    description:
      "Comfortable, stress-free transportation for students with autism, physical mobility needs, sensory sensitivities, and medical accommodations.",
    image: "/images/special-needs.webp",
    icon: <Accessibility className="w-5 h-5 text-[#f97316]" />,
    highlights: [
      "Wheelchair accessibility & secure 3-point harness systems",
      "Trained dedicated monitors assisting with sensory comfort",
      "Consistent drivers to build student familiarity and trust",
    ],
  },
  {
    id: "mckinney-vento",
    title: "McKinney-Vento Homeless Assistance",
    badge: "Zero Missed Days",
    description:
      "Reliable, discrete, door-to-door transportation ensuring displaced and foster youth maintain uninterrupted educational stability in their home school.",
    image: "/images/mckinney-vento.webp",
    icon: <Home className="w-5 h-5 text-[#f97316]" />,
    highlights: [
      "Rapid route assignment within 24-48 hours",
      "Discreet, non-stigmatizing modern passenger vans",
      "Flexible pickup adjustments as living arrangements change",
    ],
  },
  {
    id: "hard-to-serve",
    title: "Hard-to-Serve & Out-of-District Routes",
    badge: "High Efficiency",
    description:
      "Agile transit solutions for specialized magnet academies, vocational schools, and remote routes where 72-passenger buses are impractical and costly.",
    image: "/images/hard-to-serve.webp",
    icon: <Compass className="w-5 h-5 text-[#f97316]" />,
    highlights: [
      "Significant fuel & operational cost savings for districts",
      "Shorter transit times and direct, non-stop routes",
      "Cross-county and out-of-boundary service capabilities",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4eeee] border border-[#160202]/10 text-[#160202] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#f97316]" />
            <span>Tailored Transit Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#160202] tracking-tight leading-[1.2] mb-5 font-heading">
            Specialized School Transit Services Tailored for Every District Need
          </h2>
          <p className="text-base sm:text-lg text-[#160202]/75 leading-relaxed">
            We partner with Illinois public school districts, charter networks, and private academies to provide safe, reliable, and compliant specialized transportation.
          </p>
        </div>

        {/* 3-Column Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-3xl bg-[#f8fafc] border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-[0_20px_40px_rgba(22,2,2,0.08)] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image Container with Soft Zoom on Hover */}
              <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#160202] text-xs font-bold shadow-sm">
                  {service.icon}
                  <span>{service.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#160202] font-heading mb-3 group-hover:text-[#f97316] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#160202]/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 mb-6">
                    {service.highlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#160202]/85 font-medium leading-normal"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#f97316] group-hover:text-orange-600 transition-colors"
                  >
                    <span>Request Route Estimate</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="rounded-3xl bg-[#171717] p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f97316]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316] mb-2">
                <Users2 className="w-4 h-4" />
                School District Coordinators
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
                Need a Custom Route Quote for Your School District?
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Contact our dispatch team today for prompt route assessments, transparent per-route pricing, and immediate student assignment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-[#f97316] text-white font-bold text-sm shadow-md transition-all hover:bg-orange-600 hover:scale-[1.02]"
              >
                Request District Quote
              </Link>
              <Link
                href="tel:3125550199"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition-all"
              >
                Call Dispatch Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
