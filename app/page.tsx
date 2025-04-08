import {
  FeaturesType,
  ProjectsType,
  TeamType,
  TestimonialsType,
} from "@/types";
import { notFound } from "next/navigation";
import { featuresData } from "@/constants";
import { ClientWrapper } from "./client-wrapper";

export const dynamic = "force-dynamic";

async function fetchData(url: string) {
  try {
    const res = await fetch(url, {
      cache: "no-store",
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
    <ClientWrapper
      projects={projects}
      testimonials={testimonials}
      team={team}
      features={features}
    />
  );
}
