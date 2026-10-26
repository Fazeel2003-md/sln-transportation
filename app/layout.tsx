import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Source_Serif_4 } from "next/font/google";
import Navbar from "@/components/navbar";
import SideDock from "@/components/side-dock";
import Footer from "@/components/footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-head",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SLN Transportation | School Transportation Services in Chicago, IL",
  description:
    "Safe, certified, and reliable school transportation vehicle services and student pickup in Chicago and surrounding Cook County communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f4eeee] text-[#160202]">
        <Navbar />
        <SideDock />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
