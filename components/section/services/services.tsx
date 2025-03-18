"use client";

import { services } from "@/constants";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { ServiceCard } from "./service-card";

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
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary text-primary-foreground">
              Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What We Offer
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive software development services tailored to your
              business needs.
            </p>
          </div>
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
