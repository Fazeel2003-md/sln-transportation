"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Bus, ShieldCheck } from "lucide-react";

type HeroImage = { src: string; alt: string; h: string };

/* Column contents (both columns scroll through the full set in opposite directions) */
const columnOne: HeroImage[] = [
  {
    src: "/images/hero-photo.jpg",
    alt: "SLN driver opening the door for a student",
    h: "h-64",
  },
  {
    src: "/images/camry-brookridge.jpg",
    alt: "SLN sedan at an elementary school pickup lane",
    h: "h-60",
  },
  {
    src: "/images/monitor.webp",
    alt: "SLN monitor walking students to the vehicle",
    h: "h-72",
  },
  {
    src: "/images/sienna-safe.jpg",
    alt: "SLN minivan — Safe. Reliable. On Time. at the school loading zone",
    h: "h-40",
  },
  {
    src: "/images/mckinney-vento.webp",
    alt: "Students waving in front of an SLN bus",
    h: "h-52",
  },
];

const columnTwo: HeroImage[] = [
  {
    src: "/images/corolla-school.jpg",
    alt: "SLN sedan drop-off at an elementary school",
    h: "h-64",
  },
  {
    src: "/images/camry-home.jpg",
    alt: "SLN sedan arriving for a home pickup",
    h: "h-56",
  },
  {
    src: "/images/special-needs.webp",
    alt: "SLN attendant securing a student with special needs",
    h: "h-60",
  },
  {
    src: "/images/corolla-home.jpg",
    alt: "SLN driver greeting a mother and her students",
    h: "h-52",
  },
  {
    src: "/images/hard-to-serve.webp",
    alt: "Students boarding an SLN vehicle in the neighborhood",
    h: "h-56",
  },
];

/* One infinitely scrolling vertical marquee of photos */
function MarqueeColumn({
  images,
  direction,
  offset = "",
}: {
  images: HeroImage[];
  direction: "down" | "up";
  offset?: string;
}) {
  return (
    <div className={`marquee-pause relative overflow-hidden ${offset}`}>
      <div
        className={`marquee-track flex flex-col ${
          direction === "down" ? "marquee-down" : "marquee-up"
        }`}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className={`relative shrink-0 rounded-2xl overflow-hidden mb-4 ${img.h}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 26vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Re-play entrance animation every time the hero scrolls into view
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-[#faf3ec] pt-32 sm:pt-36 lg:pt-36 pb-16 lg:pb-20"
    >
      {/* Decorative dashed circles on the left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-28 w-[440px] h-[440px] rounded-full border border-dashed border-black/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-52 -left-44 w-[560px] h-[560px] rounded-full border border-dashed border-black/10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
        {/* ---- Left: Text Content ---- */}
        <div className="max-w-xl">
          {/* Step 1: Badge Tag (Delays 150ms) */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[13px] font-bold text-[#160202] mb-5 transition-all duration-700 ease-out ${
              inView
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-3 scale-95"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <MapPin className="w-4 h-4 text-[#160202]" />
            <span>Student Transportation • Chicago, IL</span>
          </div>

          {/* Step 2: Hero Title (Delays 300ms) */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#160202] leading-[1.08] mb-5 transition-all duration-800 ease-out ${
              inView
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-6 blur-sm"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Student Safety Is Always Our First Priority.
          </h1>

          {/* Step 3: Hero Description (Delays 500ms) */}
          <p
            className={`text-[15px] sm:text-base text-[#5f5252] max-w-lg font-normal leading-relaxed mb-8 transition-all duration-800 ease-out ${
              inView
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-5 blur-xs"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Providing trustworthy door-to-door transportation, specialized care for
            students with special needs, and attentive driver &amp; monitor teams across
            Chicago and Cook County.
          </p>

          {/* Step 4: CTA Buttons (Delays 700ms) */}
          <div
            className={`flex flex-wrap items-center gap-6 transition-all duration-700 ease-out ${
              inView
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <Link
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#f6c244] hover:bg-[#eec02f] text-[#160202] font-bold text-[14px] shadow-sm active:translate-y-0 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-[#160202] transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 text-[#160202] font-bold text-[14.5px] underline decoration-2 underline-offset-[6px] hover:decoration-[#f6c244] transition-colors duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#160202] transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ---- Right: Scrolling Photo Columns ---- */}
        <div
          className={`relative hidden lg:block transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="grid grid-cols-[1.05fr_0.9fr] gap-4 h-[620px]">
            {/* Column 1: scrolls top to bottom */}
            <MarqueeColumn
              images={[...columnOne, ...columnTwo]}
              direction="down"
            />

            {/* Column 2: scrolls bottom to top */}
            <MarqueeColumn
              images={[...columnTwo, ...columnOne]}
              direction="up"
              offset="pt-9"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute bottom-6 -right-3 z-20 flex flex-col items-stretch gap-2.5">
            <div className="flex items-center justify-between gap-3 bg-white rounded-xl pl-4 pr-3.5 py-2.5 shadow-md">
              <span className="text-[13px] font-bold text-[#160202]">
                Safe Journeys
              </span>
              <Bus className="w-4.5 h-4.5 text-[#160202]" />
            </div>
            <div className="flex items-center justify-between gap-3 bg-white rounded-xl pl-4 pr-3.5 py-2.5 shadow-md">
              <span className="text-[13px] font-bold text-[#160202]">
                Trusted Drivers
              </span>
              <ShieldCheck className="w-4.5 h-4.5 text-[#160202]" />
            </div>
          </div>
        </div>

        {/* Mobile fallback: single hero image */}
        <div
          className={`lg:hidden relative h-72 rounded-3xl overflow-hidden transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/images/hero-photo.jpg"
            alt="SLN driver helping a student board the vehicle"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
