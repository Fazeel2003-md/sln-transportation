import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Careers from "@/components/careers";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f4eeee]">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: About Us */}
      <About />

      {/* Section 3: Specialized Services */}
      <Services />

      {/* Section 4: Why Choose Us */}
      <WhyUs />

      {/* Section 5: Careers */}
      <Careers />

      {/* Section 6: Contact */}
      <Contact />
    </div>
  );
}
