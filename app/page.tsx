import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Specialties } from "@/components/sections/Specialties";
import { ForWhom } from "@/components/sections/ForWhom";
import { Differentials } from "@/components/sections/Differentials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <ForWhom />
      <Differentials />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
