import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SLN Transportation",
  description:
    "Safe, reliable, and compassionate student transportation across Chicago and Cook County.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
