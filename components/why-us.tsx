"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  ClipboardCheck,
  HeartHandshake,
  Clock,
  ArrowUpRight,
} from "lucide-react";

interface FeatureItem {
  num: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

/* Every visual is an ordinary four-door sedan with a small SLN decal */
const features: FeatureItem[] = [
  {
    num: "01",
    title: "Uncompromising Safety",
    description:
      "Every driver undergoes rigorous background checks, MVR driving record audits, regular drug tests, and background screenings.",
    image: "/images/why-01-safety.jpg",
    alt: "SLN driver securing a young student in a booster seat outside Maplewood Elementary",
    icon: <ShieldCheck className="w-4.5 h-4.5 text-[#f97316]" />,
  },
  {
    num: "02",
    title: "Clean & Inspected Vehicles",
    description:
      "Our fleet undergoes daily pre-trip safety checks, routine mechanical maintenance, and thorough sanitation routines.",
    image: "/images/why-02-inspected.jpg",
    alt: "SLN technician completing an inspection checklist on a vehicle at Inspection Bay 2",
    icon: <ClipboardCheck className="w-4.5 h-4.5 text-[#f97316]" />,
  },
  {
    num: "03",
    title: "Caring Team Members",
    description:
      "Our drivers and monitors treat every child with patience, respect, and warm care, creating a safe, positive environment.",
    image: "/images/why-03-caring.jpg",
    alt: "SLN team members giving high-fives to happy students at Roosevelt Elementary pickup",
    icon: <HeartHandshake className="w-4.5 h-4.5 text-[#f97316]" />,
  },
  {
    num: "04",
    title: "Punctual & Reliable",
    description:
      "We pride ourselves on route consistency, clear communication with families, and strict adherence to school schedules.",
    image: "/images/why-04-punctual.jpg",
    alt: "SLN driver greeting a family at the Riverside Elementary curb on time",
    icon: <Clock className="w-4.5 h-4.5 text-[#f97316]" />,
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<number | null>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false); // after manual selection
  const [hoverPaused, setHoverPaused] = useState(false); // while hovering the row
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    // Cycle only while visible
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    // Seamless automatic rotation (~3.6s), paused on hover/interaction
    if (paused || hoverPaused || reduced || !inView) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % features.length),
      3600
    );
    return () => clearInterval(id);
  }, [paused, hoverPaused, reduced, inView]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
    if (resumeRef.current) window.clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => setPaused(false), 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#faf3ec] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#f97316] mb-4">
            The SLN Difference
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#160202] tracking-tight leading-[1.2] mb-5 font-heading">
            Why Schools &amp; Parents Choose Us
          </h2>

          <p className="text-base sm:text-lg text-[#160202]/75 leading-relaxed">
            We combine strict safety standards, friendly local staff, and
            well-maintained vehicles to set the benchmark in school
            transportation.
          </p>
        </div>

        {/* Interactive animated feature-card row */}
        <div
          ref={rowRef}
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          className="wc-row flex flex-col md:flex-row gap-3 md:gap-4"
        >
          {features.map((feature, i) => {
            const isActive = i === active;
            return (
              <div
                key={feature.num}
                role="button"
                tabIndex={0}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Show feature: ${feature.title}`}
                onMouseEnter={() => select(i)}
                onClick={() => select(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    select(i);
                  }
                }}
                className={`wc-card group relative flex flex-col justify-end p-5 sm:p-6 rounded-3xl overflow-hidden cursor-pointer select-none outline-none transition-[box-shadow,border-color] duration-300 ${
                  isActive
                    ? "is-active border-transparent shadow-[0_22px_48px_rgba(22,2,2,0.16)]"
                    : "border border-slate-200/90 bg-[#f6f5f4] shadow-xs hover:bg-[#f1efee] hover:shadow-sm"
                }`}
              >
                {/* Active-state photograph (crossfade) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                </div>

                {/* Feature number (inactive, pale gray top-right) */}
                <span
                  className={`wc-bignum absolute top-4 right-5 text-4xl font-extrabold text-[#160202]/15 select-none leading-none transition-opacity duration-500 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                  aria-hidden
                >
                  {feature.num}
                </span>

                {/* Arrow (active, top-right) */}
                <div
                  className={`absolute top-4.5 right-4.5 w-9 h-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                  aria-hidden
                >
                  <ArrowUpRight className="w-4.5 h-4.5 text-[#160202]" />
                </div>

                {/* Icon chip (top-left) */}
                <div className="absolute top-4.5 left-4.5 w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {feature.icon}
                </div>

                {/* Bottom content — synchronized with active card */}
                <div className="wc-content relative z-10 mt-auto">
                  <p
                    className={`text-xs font-bold tracking-wider mb-1.5 transition-colors duration-500 ${
                      isActive ? "text-white/85" : "text-[#160202]/40"
                    }`}
                  >
                    {feature.num}
                  </p>
                  <h3
                    className={`text-lg sm:text-xl font-bold font-heading leading-snug transition-colors duration-500 ${
                      isActive ? "text-white" : "text-[#160202]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-[13px] leading-relaxed mt-1.5 transition-colors duration-500 max-w-lg ${
                      isActive ? "text-white/90" : "text-[#160202]/50"
                    } hidden md:block`}
                  >
                    {feature.description}
                  </p>
                  <p
                    className={`text-[13px] leading-relaxed mt-1.5 max-w-lg md:hidden ${
                      isActive ? "text-white/90" : "hidden"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
