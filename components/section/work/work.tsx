"use client";

import { sections, services } from "@/constants";
import { useRef } from "react";
import { SectionHeader } from "../section-header";
import { WorkCard } from "./work-card";
import { Carousel } from "./cards-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsType } from "@/types";
import { ProjectDemoCredential } from "./_components/demo-links";
import { ProjectDescription } from "./_components/project-desc";
import { ScrollArea } from "@/components/ui/scroll-area";

export function OurWorkSection({ projects }: { projects: ProjectsType }) {
  const ref = useRef(null);

  const data = projects.map((project) => ({
    src: project.preview_image.original_url,
    title: project.title,
    category: project.category,
    content: (
      <div className="flex flex-col items-center justify-center w-full h-full rounded-lg overflow-hidden">
        <ScrollArea className="w-full h-[21.5rem] px-4">
          <ProjectDescription project={project} />
          <ProjectDemoCredential
            description={project.description}
            demo_email={project.demo_email}
            demo_password={project.demo_password}
            demo_link={project.demo_link}
            dashboard_email={project.dashboard_email}
            dashboard_password={project.dashboard_password}
            dashboard_link={project.dashboard_link}
          />
        </ScrollArea>
      </div>
    ),
  }));

  const webCards = data
    .filter((card) => card.category.toLowerCase() === "website")
    .map((card, index) => (
      <WorkCard
        key={card.src}
        card={card}
        index={index}
      />
    ));

  const androidCards = data
    .filter((card) => card.category.toLocaleLowerCase() === "android")
    .map((card, index) => (
      <WorkCard
        key={card.src}
        card={card}
        index={index}
      />
    ));

  const iosCards = data
    .filter((card) => card.category.toLocaleLowerCase() === "ios")
    .map((card, index) => (
      <WorkCard
        key={card.src}
        card={card}
        index={index}
      />
    ));

  return (
    <section
      id="work"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader section={sections.services} />
        </div>
        <div className="flex w-full justify-center items-center mt-8">
          <Tabs
            defaultValue="web"
            className="w-full flex px-8 justify-center items-center flex-col"
          >
            <TabsList className="flex justify-center items-center">
              <TabsTrigger value="web">Website</TabsTrigger>
              <TabsTrigger value="android">Android</TabsTrigger>
              <TabsTrigger value="ios">IOS</TabsTrigger>
            </TabsList>

            <TabsContent
              className="w-full"
              value="web"
            >
              <Carousel items={webCards} />
            </TabsContent>
            <TabsContent
              className="w-full"
              value="android"
            >
              <Carousel items={androidCards} />
            </TabsContent>
            <TabsContent
              className="w-full"
              value="ios"
            >
              <Carousel items={iosCards} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
