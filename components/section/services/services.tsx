"use client";

import { sections, services } from "@/constants";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { ServiceCard } from "./service-card";
import { SectionHeader } from "../section-header";

export function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="services"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader section={sections.services} />
        </div>
        <div className="grid max-w-6xl gap-12 py-12 mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
