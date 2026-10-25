"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";

const differentiators = [
  {
    title: "Safety First",
    description:
      "We prioritize responsible driving, appropriate driver screening, and consistent safety practices.",
    icon: <ShieldCheck className="w-5 h-5 text-[#f97316]" />,
  },
  {
    title: "Reliable Transportation",
    description:
      "We focus on dependable pickups, consistent routes, and punctual service.",
    icon: <Clock className="w-5 h-5 text-[#f97316]" />,
  },
  {
    title: "Caring Team",
    description:
      "We value respectful, patient, and professional interactions with students and families.",
    icon: <HeartHandshake className="w-5 h-5 text-[#f97316]" />,
  },
  {
    title: "Local Commitment",
    description:
      "We serve the transportation needs of schools, families, and organizations across Chicago and Cook County.",
    icon: <MapPin className="w-5 h-5 text-[#f97316]" />,
  },
];

const services = [
  "Daily School Routes",
  "Special Needs Transport",
  "McKinney-Vento Homeless Assistance",
  "Hard-to-Serve & Out-of-District Routes",
  "Driver & Monitor Teams",
];

const whyPoints = [
  {
    title: "Student Safety First",
    description:
      "Prioritizing student safety, security, and well-being throughout every journey.",
    icon: <ShieldCheck className="w-5.5 h-5.5 text-[#f97316] transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "Reliable Transportation",
    description:
      "Providing dependable and consistent transportation services for students and families.",
    icon: <Route className="w-5.5 h-5.5 text-[#f97316] transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "Professional Drivers",
    description:
      "Emphasizing responsible, courteous, and professional driving standards.",
    icon: <UserCog className="w-5.5 h-5.5 text-[#f97316] transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "On-Time Service",
    description:
      "Valuing punctuality and ensuring organized, timely transportation.",
    icon: <Clock className="w-5.5 h-5.5 text-[#f97316] transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "Personalized Care",
    description:
      "Treating every student with patience, respect, and individual attention.",
    icon: <HeartHandshake className="w-5.5 h-5.5 text-[#f97316] transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "Trusted Service",
    description:
      "Building lasting relationships with families through accountability, communication, and dependable service.",
    icon: <Users className="w-5.5 h-5.5 text-[#f97316] transition-colors duration-300 group-hover:text-white" />,
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#f4eeee]">
      {/* Section 1 — Why Choose SLN Transportation */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#f97316] mb-4">
              About SLN Transportation
            </span>

            <h1 className="text-[32px] sm:text-[38px] lg:text-[48px] font-bold font-heading tracking-tight leading-[1.15] text-[#160202] mb-4">
              Why Choose{" "}
              <span className="text-[#f97316]">SLN Transportation?</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="group flex items-start gap-5 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#ffd9bd] transition-all duration-300"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#fff3ea] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#f97316]">
                  {point.icon}
                </div>

                <div>
                  <h2 className="text-lg font-bold font-heading text-[#160202] mb-1.5">
                    {point.title}
                  </h2>
                  <p className="text-sm text-[#160202]/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#160202]/70 hover:text-[#f97316] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Our Mission */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#f97316] mb-4">
            Our Purpose
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-[#160202] mb-5">
            Our Mission
          </h2>

          <p className="text-base sm:text-lg text-[#160202]/75 leading-relaxed">
            Our mission is to help students reach their destinations safely and
            reliably while giving families, schools, and community organizations
            greater peace of mind.
          </p>
        </div>
      </section>

      {/* Section 3 — What Makes Us Different */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#f97316] mb-4">
              Why Families Trust Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-[#160202]">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#fff3ea] border border-[#ffd9bd] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-[#160202] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#160202]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Our Services */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#f97316] mb-4">
              What We Provide
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-[#160202]">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div
                key={service}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-[#f6f5f4] border border-slate-200/80 ${
                  i === services.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center shrink-0">
                  {i === 4 ? (
                    <UserCog className="w-5 h-5 text-[#f97316]" />
                  ) : (
                    <Route className="w-5 h-5 text-[#f97316]" />
                  )}
                </div>

                <h3 className="text-base font-bold font-heading text-[#160202]">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#160202]/60 mt-8">
            Visit our{" "}
            <Link
              href="/#services"
              className="font-semibold text-[#f97316] hover:underline underline-offset-2"
            >
              Services section
            </Link>{" "}
            to learn more about each service in detail.
          </p>
        </div>
      </section>

      {/* Section 5 — Contact CTA */}
      <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-[28px] bg-[#160202] relative overflow-hidden px-6 sm:px-12 py-14 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#f97316] mb-4">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white mb-5">
              Let&rsquo;s Make Student Transportation Easier
            </h2>

            <p className="text-base text-white/75 leading-relaxed mb-8">
              Have questions about our transportation services? Get in touch
              with our team to discuss your school&apos;s or family&apos;s
              transportation needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#f97316] hover:bg-[#ea6a0c] text-white font-bold text-sm shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="tel:3125550199"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
