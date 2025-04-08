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
import { notFound } from "next/navigation";
import { featuresData } from "@/constants";

export const revalidate = 3600;

async function fetchData(url: string) {
  try {
    const res = await fetch(url, {
      next: {
        tags: ["content"],
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    return null;
  }
}

export default async function LandingPage() {
  const baseUrl = process.env.baseUrl;
  if (!baseUrl) {
    throw new Error("baseUrl environment variable is not defined");
  }

  const [projects, testimonials, team]: [
    ProjectsType,
    TestimonialsType,
    TeamType
  ] = await Promise.all([
    fetchData(`${baseUrl}/api/projects`),
    fetchData(`${baseUrl}/api/clientsopinion`),
    fetchData(`${baseUrl}/api/team`),
  ]);

  if (!projects || !team || !testimonials) {
    notFound();
  }

  const features: FeaturesType = featuresData;

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
}
