"use client";

import { sections, team } from "@/constants";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeader } from "../section-header";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="team"
      className="w-full py-8 md:py-16 lg:py-20 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader section={sections.team} />
        </div>

        <div
          ref={ref}
          className="grid max-w-5xl grid-cols-1 gap-8 py-12 mx-auto md:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="relative flex justify-center overflow-hidden rounded-lg group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover transition-transform aspect-square group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <TextRevealCard
            className="bg-transparent text-center"
            text="You know the business"
            revealText="We know the code "
          ></TextRevealCard>
        </div>
      </div>
    </section>
  );
}
