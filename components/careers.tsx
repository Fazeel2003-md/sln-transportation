"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const roles = [
  {
    title: "Driver",
    description:
      "Fulfil the mission. Safely transport children from home to school and school to home…",
    image: "/images/careers-driver.jpg",
    alt: "Smiling SLN driver with crossed arms beside a silver SLN sedan in a residential neighborhood",
    accentClass: "career-card-left",
    topBorder: "border-t-4 border-[#1a3a7a]",
  },
  {
    title: "Monitor",
    description:
      "Supervise and help the children during the home/school – school/home routes…",
    image: "/images/careers-monitor.jpg",
    alt: "SLN monitor helping young students out of the vehicle at home",
    accentClass: "career-card-right",
    topBorder: "border-t-4 border-[#f97316]",
  },
];

export default function Careers() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = rowRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="careers"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#faf3ec] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.15] text-[#160202]">
            Become part of{" "}
            <span className="text-[#f97316] border-b-4 border-[#f97316]/70 pb-1">
              Our Family
            </span>
          </h2>
        </div>

        {/* Cards — slide out from the middle to their sides on reveal */}
        <div
          ref={rowRef}
          className={`careers-row grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl ${
            inView ? "is-in" : ""
          }`}
        >
          {roles.map((role) => (
            <div
              key={role.title}
              className={`${role.accentClass} ${role.topBorder} rounded-b-3xl rounded-t-lg bg-white shadow-[0_10px_30px_rgba(22,2,2,0.10)] overflow-hidden flex flex-col`}
            >
              {/* Photo */}
              <div className="relative aspect-[16/9] sm:aspect-[7/5]">
                <Image
                  src={role.image}
                  alt={role.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 text-center flex flex-col flex-1">
                <h3 className="text-2xl sm:text-[26px] font-extrabold font-heading text-[#1a3a7a] mb-3">
                  {role.title}
                </h3>

                <p className="text-[15px] text-[#160202]/70 leading-relaxed mb-6 max-w-sm mx-auto">
                  {role.description}
                </p>

                <a
                  href="tel:3125550199"
                  className="mt-auto mx-auto inline-flex items-center justify-center w-full max-w-[240px] px-6 py-3 rounded-lg border border-[#160202]/25 text-[#160202] font-semibold text-sm transition-all duration-200 hover:bg-[#f97316] hover:border-[#f97316] hover:text-white"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
