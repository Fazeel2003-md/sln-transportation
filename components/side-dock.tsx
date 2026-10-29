"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Users, Bus, Award, Briefcase, Phone } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/#home", icon: <Home className="w-4 h-4" /> },
  { label: "About Us", href: "/#about", icon: <Users className="w-4 h-4" /> },
  { label: "Services", href: "/#services", icon: <Bus className="w-4 h-4" /> },
  { label: "Why Choose Us", href: "/#why-us", icon: <Award className="w-4 h-4" /> },
  { label: "Careers", href: "/#careers", icon: <Briefcase className="w-4 h-4" /> },
  { label: "Contact", href: "/#contact", icon: <Phone className="w-4 h-4" /> },
];

export default function SideDock() {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    let listening = false;

    const handleScroll = () => {
      if (frame || !desktop.matches) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const nextVisible = window.scrollY > window.innerHeight * 0.55;
        setIsVisible((current) => current === nextVisible ? current : nextVisible);

        const scrollPosition = window.scrollY + window.innerHeight * 0.35;
        for (const item of navItems) {
          const sectionId = item.href.split("#")[1];
          const section = sectionId ? document.getElementById(sectionId) : null;
          if (!section) continue;
          const top = section.offsetTop;
          if (scrollPosition >= top && scrollPosition < top + section.offsetHeight) {
            setActiveSection((current) => current === item.label ? current : item.label);
            break;
          }
        }
      });
    };

    const start = () => {
      if (listening || !desktop.matches) return;
      listening = true;
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll, { passive: true });
      handleScroll();
    };
    const updateBreakpoint = () => {
      if (desktop.matches) start();
      else {
        listening = false;
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        setIsVisible(false);
      }
    };

    updateBreakpoint();
    desktop.addEventListener("change", updateBreakpoint);
    return () => {
      desktop.removeEventListener("change", updateBreakpoint);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname !== "/") return;
    const sectionId = href.split("#")[1];
    if (!sectionId) return;
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  return (
    <aside
      aria-label="Quick Section Navigation"
      className={`hidden lg:block fixed right-3 xl:right-5 top-1/2 -translate-y-1/2 z-40 transition-all duration-400 ease-out ${
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
