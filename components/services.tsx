"use client";

import React, { useState, useEffect, useRef } from "react";
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
  num: string;
  title: string;
  description: string;
  image: string;
}

/* Every visual is a normal four-door sedan with a small SLN door decal */
const servicesList: ServiceItem[] = [
  {
    id: "daily-routes",
    num: "01",
    title: "Daily School Routes",
    description:
      "Everyday sedans running safe, punctual door-to-door routes between home and school, driven by background-checked, fingerprinted crews.",
    image: "/images/svc-daily-routes.jpg",
  },
  {
    id: "special-needs",
    num: "02",
    title: "Special Needs Transport",
    description:
      "Patient, caring rides tailored for students with individualized needs — calm home or school pickups, consistent crews, and unhurried attention.",
    image: "/images/svc-special-needs.jpg",
  },
  {
    id: "mckinney-vento",
    num: "03",
    title: "McKinney-Vento Homeless Assistance",
    description:
      "Discreet door-to-door rides that keep displaced and foster students connected to their home school, with flexible pickups that adapt as circumstances change.",
    image: "/images/svc-mckinney-vento.jpg",
  },
  {
    id: "hard-to-serve",
    num: "04",
    title: "Hard-to-Serve & Out-of-District Routes",
    description:
      "Direct, non-stop service to magnet academies, vocational campuses, and remote attendance centers — saving districts the cost of oversized buses.",
    image: "/images/svc-hard-to-serve.jpg",
  },
  {
    id: "driver-monitor",
    num: "05",
    title: "Driver & Monitor Teams",
    description:
      "A dedicated two-person crew in every sedan — an attentive driver and monitor pair who know your student by name and communicate every step of the ride.",
    image: "/images/svc-driver-monitor.jpg",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  const current = servicesList[Math.min(active, servicesList.length - 1)];

  useEffect(() => {
    // Only auto-cycle while the section is on screen
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Respect reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    // Automatic seamless rotation (~3.6s), paused on hover/interaction
    if (paused || reduced || !inView) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % servicesList.length),
      3600
    );
    return () => clearInterval(id);
  }, [paused, reduced, inView]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#faf3ec] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#f97316] mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#160202] tracking-tight leading-[1.15] mb-5 font-heading">
            Comprehensive Transportation Services
          </h2>
          <p className="text-base sm:text-lg text-[#160202]/75 leading-relaxed">
            We tailor our student transportation solutions to meet the specific
            requirements of schools, parents, and community organizations in
            Chicago and surrounding areas.
          </p>
        </div>

        {/* Animated two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: animated services list */}
          <ul className="relative order-1 space-y-1">
            {servicesList.map((service, i) => {
              const isActive = i === active;
              return (
                <li
                  key={service.id}
                  role="button"
                  tabIndex={0}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Show ${service.title}`}
                  onMouseEnter={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  onMouseLeave={() => setPaused(false)}
                  onFocus={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  onBlur={() => setPaused(false)}
                  onClick={() => setActive(i)}
                  onTouchStart={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  className={`group flex items-baseline gap-4 sm:gap-5 py-3 sm:py-3.5 cursor-pointer transition-all duration-500 ease-out outline-none ${
                    isActive
                      ? "translate-x-2"
                      : "translate-x-0 hover:translate-x-1"
                  }`}
                >
                  <span
                    className={`text-xs sm:text-sm font-bold tracking-wider transition-all duration-500 ${
                      isActive
                        ? "text-[#f97316] opacity-100"
                        : "text-[#160202]/40"
                    }`}
                  >
                    {service.num}
                  </span>
                  <span className="flex flex-col">
                    <span
                      className={`text-lg sm:text-xl lg:text-2xl font-bold font-heading leading-snug transition-all duration-500 ${
                        isActive
                          ? "text-[#160202]"
                          : "text-[#160202]/35 group-hover:text-[#160202]/60"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`block h-0.5 bg-[#f97316] mt-1.5 transition-all duration-500 ${
                        isActive ? "w-10 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Right: animated visual panel */}
          <div className="relative order-2">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-[#f4eeee] shadow-[0_18px_44px_rgba(22,2,2,0.10)]">
              {servicesList.map((service, i) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>

            {/* Description synced with the active service */}
            <div className="flex items-start gap-3.5 mt-5 px-1 min-h-[76px]">
              <div className="w-9 h-9 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[11px] font-bold text-[#f97316]">
                  {current.num}
                </span>
              </div>
              <p
                key={current.id}
                className="fade-up text-sm sm:text-[15px] text-[#160202]/80 leading-relaxed max-w-xl"
              >
                {current.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 rounded-3xl bg-[#171717] p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
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
                Contact our dispatch team today for prompt route assessments,
                transparent per-route pricing, and immediate student assignment.
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
