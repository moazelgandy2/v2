"use client";

import { sections, services } from "@/constants";
import { useRef } from "react";
import { SectionHeader } from "../section-header";
import { WorkCard } from "./work-card";
import { Carousel } from "./cards-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";

export function OurWorkSection() {
  const ref = useRef(null);

  const data = [
    {
      category: "WEB",
      title: "A webapp.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <>
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, impedit.
              </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              labore voluptatum eligendi sint autem nostrum ducimus iure iste,
              accusantium tempore!
            </p>
            <Image
              src="https://images.unsplash.com/photo-1733503711059-acde98cd7fdf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <LinkPreview url="https://moazelgandy-portfolio.vercel.app">
              <Button>
                Live Demo
                <EyeIcon className="w-8 h-8" />
              </Button>
            </LinkPreview>
          </div>
        </>
      ),
    },
    {
      category: "WEB",
      title: "A 2nd webapp.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <div>dummy</div>,
    },
    {
      category: "IOS",
      title: "IOS app.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <div>dummy</div>,
    },

    {
      category: "Android",
      title: "Android app.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <div>dummy</div>,
    },
    {
      category: "IOS",
      title: "2nd IOS app.",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <div>dummy</div>,
    },
    {
      category: "Desktop",
      title: "Desktop app",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <div>dummy</div>,
    },
  ];

  const allCards = data.map((card, index) => (
    <WorkCard
      key={card.src}
      card={card}
      index={index}
    />
  ));

  const webCards = data
    .filter((card) => card.category.toLowerCase() === "web")
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
            defaultValue="all"
            className="w-full flex justify-center items-center flex-col"
          >
            <TabsList className="flex justify-center items-center">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Website</TabsTrigger>
              <TabsTrigger value="android">Android</TabsTrigger>
              <TabsTrigger value="ios">IOS</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Carousel items={allCards} />
            </TabsContent>
            <TabsContent value="web">
              <Carousel items={webCards} />
            </TabsContent>
            <TabsContent value="android">
              <Carousel items={androidCards} />
            </TabsContent>
            <TabsContent value="ios">
              <Carousel items={iosCards} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
