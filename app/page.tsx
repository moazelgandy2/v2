import { Header } from "@/components/section/header";
import { Hero } from "@/components/section/hero/hero";
import { FeaturesSection } from "@/components/section/features/features";
import { OurWorkSection } from "@/components/section/work/work";
import { TeamSection } from "@/components/section/team/team";
import { TestimonialsSection } from "@/components/section/testimonials/testimonials";
import { ContactSection } from "@/components/section/contact/contact";
import { Footer } from "@/components/section/footer/footer";
import {
  FeaturesType,
  ProjectsType,
  TeamType,
  TestimonialsType,
} from "@/types";

export default async function LandingPage() {
  const baseUrl = process.env.baseUrl;
  const [projects, testimonials, team]: [
    ProjectsType,
    TestimonialsType,
    TeamType
  ] = await Promise.all([
    fetch(`${baseUrl}/api/projects`)
      .then((res) => res.json())
      .then((data) => data.data),
    fetch(`${baseUrl}/api/clientsopinion`)
      .then((res) => res.json())
      .then((data) => data.data),
    fetch(`${baseUrl}/api/team`)
      .then((res) => res.json())
      .then((data) => data.data),
  ]);

  console.log("projects", projects);
  console.log("testimonials", testimonials);

  const features: FeaturesType = [];
  // const team: TeamType = [];
  // const projects: ProjectsType = await fetch(`${baseUrl}/api/projects`)
  //   .then((res) => res.json())
  //   .then((data) => data.data);

  // const testimonials: TestimonialsType = await fetch(
  //   `${baseUrl}/api/testimonials`
  // )
  //   .then((res) => res.json())
  //   .then((data) => data.data);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="w-full">
        <Hero />
        <FeaturesSection features={features} />
        <OurWorkSection projects={projects} />
        <TeamSection team={team} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
