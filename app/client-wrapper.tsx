"use client";

import { ContactSection } from "@/components/section/contact/contact";
import { FeaturesSection } from "@/components/section/features/features";
import { Footer } from "@/components/section/footer/footer";
import { Header } from "@/components/section/header";
import { Hero } from "@/components/section/hero/hero";
import { TeamSection } from "@/components/section/team/team";
import { TestimonialsSection } from "@/components/section/testimonials/testimonials";
import { OurWorkSection } from "@/components/section/work/work";
import {
  FeaturesType,
  ProjectsType,
  TeamType,
  TestimonialsType,
} from "@/types";

interface ClientWrapperProps {
  projects: ProjectsType;
  testimonials: TestimonialsType;
  team: TeamType;
  features: FeaturesType;
}

export const ClientWrapper = ({
  projects,
  testimonials,
  team,
  features,
}: ClientWrapperProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full">
        <Hero />
        <FeaturesSection features={features} />
        <OurWorkSection projects={projects} />
        <TeamSection team={team} />
        {testimonials && <TestimonialsSection testimonials={testimonials} />}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
