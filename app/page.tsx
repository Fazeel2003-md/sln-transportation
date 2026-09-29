import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f4eeee]">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: About Us */}
      <About />

      {/* Section 3: Specialized Services */}
      <Services />
    </div>
  );
}
