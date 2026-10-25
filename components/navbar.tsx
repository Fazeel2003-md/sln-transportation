"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Trigger detachment when scrolled past 30px
      setScrolled(window.scrollY > 30);

      // Scroll-spy: highlight the nav item of the current section
      const sectionIds = navItems
        .map((item) => item.href.replace("#", ""))
        .filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const matched = navItems.find(
              (item) => item.href === `#${sectionId}`
            );
            if (matched) setActiveItem(matched.label);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fallback spy: re-checks the active section periodically, guaranteeing the
  // highlight stays correct even if scroll events are ever missed
  useEffect(() => {
    const id = setInterval(() => {
      const sectionIds = navItems
        .map((item) => item.href.replace("#", ""))
        .filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const matched = navItems.find(
              (item) => item.href === `#${sectionId}`
            );
            if (matched) setActiveItem(matched.label);
          }
        }
      }
    }, 350);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className={`fixed top-2.5 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-700 ease-out ${
        mounted
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4"
      }`}
    >
      <nav
        className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-full w-full bg-transparent border-transparent shadow-none p-0"
            : "max-w-5xl w-full rounded-full py-2 sm:py-2.5 px-4 sm:px-6"
        }`}
        style={
          scrolled
            ? undefined
            : {
                background: "rgba(241, 245, 249, 0.78)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                backdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow:
                  "0 10px 28px 0 rgba(15, 23, 42, 0.08), inset 0 1px 2px 0 rgba(255, 255, 255, 0.9)",
              }
        }
      >
        {/* Left Side: Brand Logo (Detaches to Left Pill on Scroll) */}
        <div
          className={`flex items-center transition-all duration-500 ease-out rounded-full ${
            scrolled
              ? "py-1.5 sm:py-2 px-3.5 sm:px-5"
              : "p-0"
          }`}
          style={
            scrolled
              ? {
                  background: "rgba(241, 245, 249, 0.88)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  boxShadow:
                    "0 10px 28px 0 rgba(15, 23, 42, 0.08), inset 0 1px 2px 0 rgba(255, 255, 255, 0.9)",
                }
              : {
                  border: "1px solid transparent",
                }
          }
        >
          <Link
            href="/"
            className="flex items-center shrink-0 group outline-none focus:outline-none select-none"
            aria-label="SLN Transportation Home"
            style={{
              WebkitTapHighlightColor: "transparent",
              outline: "none",
            }}
          >
            <Image
              src="/images/logo.webp"
              alt="SLN Transportation Logo"
              width={479}
              height={106}
              priority
              className="h-7 sm:h-8 md:h-[32px] w-auto object-contain drop-shadow-[0_1px_4px_rgba(22,2,2,0.06)] transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Right Side: Desktop Nav Buttons (Detaches to Right Pill on Scroll) */}
        <div
          className={`hidden md:flex items-center space-x-1 lg:space-x-1.5 transition-all duration-500 ease-out rounded-full ${
            scrolled
              ? "py-1 sm:py-1.5 px-2 sm:px-2.5"
              : "p-0"
          }`}
          style={
            scrolled
              ? {
                  background: "rgba(241, 245, 249, 0.88)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  boxShadow:
                    "0 10px 28px 0 rgba(15, 23, 42, 0.08), inset 0 1px 2px 0 rgba(255, 255, 255, 0.9)",
                }
              : {
                  border: "1px solid transparent",
                }
          }
        >
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`group relative px-3.5 py-1.5 text-[13.5px] lg:text-[14px] font-semibold tracking-normal transition-all duration-200 rounded-full border outline-none focus:outline-none focus:ring-0 select-none ${
                  isActive
                    ? "text-[#160202] font-bold bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(22,2,2,0.06)] border-white"
                    : "text-[#160202]/85 hover:text-[#160202] bg-white/0 border-white/0"
                }`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                  outline: "none",
                }}
              >
                {item.label}

                {/* Underline Animation ONLY on Hover for Inactive Links */}
                {!isActive && (
                  <span className="absolute left-3 right-3 bottom-1 h-[1.5px] bg-[#160202] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-center pointer-events-none" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#160202] transition-all outline-none focus:outline-none focus:ring-0 select-none hover:bg-white/40"
            style={{
              background: scrolled
                ? "rgba(241, 245, 249, 0.88)"
                : "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.9), 0 2px 6px rgba(22,2,2,0.04)",
              WebkitTapHighlightColor: "transparent",
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-4.5 h-4.5 text-[#160202]" />
            ) : (
              <Menu className="w-4.5 h-4.5 text-[#160202]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2.5 max-w-sm ml-auto pointer-events-auto animate-in slide-in-from-top-2 duration-200">
          <div
            className="p-2 rounded-2xl space-y-1"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.85)",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.9), 0 8px 24px rgba(22,2,2,0.08)",
            }}
          >
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all outline-none focus:outline-none focus:ring-0 select-none ${
                    isActive
                      ? "text-[#160202] bg-white shadow-xs border border-white font-bold"
                      : "text-[#160202]/80 hover:text-[#160202] bg-white/0 border border-white/0"
                  }`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    outline: "none",
                  }}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
