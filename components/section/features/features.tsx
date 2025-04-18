"use client";

import { sections } from "@/constants";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "../section-header";
import { FeaturesType } from "@/types";

export function FeaturesSection({ features }: { features: FeaturesType }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section
      id="features"
      className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader section={sections.features} />
        <div
          ref={ref}
          className="grid max-w-5xl grid-cols-1 gap-6 py-12 mx-auto md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              id={`feature-${index}`}
              className="flex flex-col items-center p-6 space-y-4 overflow-hidden border rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
            >
              <div className="text-primary">{feature.icon}</div>
              <div className="flex flex-col w-full space-y-2 text-center">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              {isMounted && !isMobile}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
