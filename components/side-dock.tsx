"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Users, Bus, Award, Briefcase } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { label: "About Us", href: "#about", icon: <Users className="w-4 h-4" /> },
  { label: "Services", href: "#services", icon: <Bus className="w-4 h-4" /> },
  { label: "Why Choose Us", href: "#why-us", icon: <Award className="w-4 h-4" /> },
  { label: "Careers", href: "#careers", icon: <Briefcase className="w-4 h-4" /> },
];

export default function SideDock() {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Becomes visible from Section 2 onwards (scrolled past ~60% of viewport)
      const heroThreshold = window.innerHeight * 0.55;
      setIsVisible(window.scrollY > heroThreshold);

      // Simple Scroll-Spy detection for sections
      const sections = ["home", "about", "services", "why-us", "careers"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const matched = navItems.find((item) => item.href === `#${sectionId}`);
            if (matched) setActiveSection(matched.label);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Quick Section Navigation"
      className={`fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 transition-all duration-400 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 pointer-events-auto scale-100"
          : "opacity-0 translate-x-6 pointer-events-none scale-95"
      }`}
    >
      <div
        className="p-1.5 rounded-full flex flex-col items-center gap-1.5 transition-all duration-300 shadow-[0_12px_36px_rgba(22,2,2,0.1)]"
        style={{
          background: "rgba(244, 238, 238, 0.82)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.label;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`group relative flex items-center justify-center p-2.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-[#171717] text-white shadow-sm"
                  : "text-[#160202]/75 hover:text-[#160202] hover:bg-white/80"
              }`}
              aria-label={item.label}
            >
              {/* Icon */}
              {item.icon}

              {/* Hover Tooltip Label extending to the left without blocking page content */}
              <span
                className="absolute right-full mr-3 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 shadow-md"
                style={{
                  background: "rgba(23, 23, 23, 0.92)",
                  color: "#ffffff",
                  backdropFilter: "blur(12px)",
                }}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
