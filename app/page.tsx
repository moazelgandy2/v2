"use client";

import { Header } from "@/components/section/header";
import { HeroSection } from "@/components/section/hero/hero";
import { FeaturesSection } from "@/components/section/features/features";
import { OurWorkSection } from "@/components/section/work/work";
import { TeamSection } from "@/components/section/team/team";
import { TestimonialsSection } from "@/components/section/testimonials/testimonials";
import { ContactSection } from "@/components/section/contact/contact";
import { Footer } from "@/components/section/footer/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <OurWorkSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
