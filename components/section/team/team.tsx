"use client";

import { team } from "@/constants";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="team"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary text-primary-foreground">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Meet the Experts
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our talented team of professionals is dedicated to delivering
              exceptional results.
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className="grid max-w-5xl grid-cols-1 gap-8 py-12 mx-auto md:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group"
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
      </div>
    </section>
  );
}
