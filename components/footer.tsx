"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Driver & Monitor Careers", href: "/#careers" },
];

const careersLinks = [
  { label: "Apply as Driver", href: "/#careers" },
  { label: "Apply as Monitor", href: "/#careers" },
  { label: "General Application", href: "/#careers" },
];

export default function Footer() {
  return (
    <footer className="site-footer bg-[#10192d] text-[#9bb4d2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-12 sm:pt-14 pb-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.9fr_1fr] gap-10 lg:gap-14 pb-12 sm:pb-14">
          <div>
            <Link href="/#home" aria-label="SLN Transportation home" className="inline-flex items-center justify-center w-[194px] h-20 rounded-[22px] bg-white px-4 mb-5 hover:-translate-y-0.5 transition-transform">
              <Image src="/images/logo.webp" alt="SLN Transportation" width={460} height={95} className="w-full h-auto object-contain" />
            </Link>
            <p className="max-w-sm text-[15px] leading-[1.65]">
              SLN Transportation is dedicated to safe, reliable, and comfortable school transportation across Chicago, IL and surrounding communities.
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h2 className="text-lg font-bold text-white mb-6">Quick Links</h2>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => <li key={link.label}><Link className="footer-link" href={link.href}>{link.label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-label="Footer careers links">
            <h2 className="text-lg font-bold text-white mb-6">Careers</h2>
            <ul className="space-y-3.5">
              {careersLinks.map((link) => <li key={link.label}><Link className="footer-link" href={link.href}>{link.label}</Link></li>)}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-bold text-white mb-6">Contact Details</h2>
            <ul className="space-y-3.5 text-[15px] leading-relaxed">
              <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 mt-1 shrink-0 text-[#f04a8a]" /><span>9002 Senate Dr, Des Plaines, IL 60016</span></li>
              <li className="flex items-start gap-2.5"><Mail className="w-4 h-4 mt-1 shrink-0 text-[#f04a8a]" /><a className="footer-link break-all" href="mailto:slntransportationllc999@gmail.com">slntransportationllc999@gmail.com</a></li>
              <li className="flex items-start gap-2.5"><Phone className="w-4 h-4 mt-1 shrink-0 text-[#f04a8a]" /><span className="flex flex-col"><a className="footer-link" href="tel:+17733492773">+1 (773) 349-2773</a><a className="footer-link" href="tel:+17735640949">+1 (773) 564-0949</a></span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} SLN Transportation LLC. All Rights Reserved.</p>
          <p>Safe Student Transportation</p>
        </div>
      </div>
    </footer>
  );
}
