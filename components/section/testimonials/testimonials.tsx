"use client";

import { sections, testimonials } from "@/constants";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "../section-header";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="testimonials"
      className="relative w-full py-12 overflow-hidden md:py-24 lg:py-32"
    >
      <div className="container relative w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader section={sections.testimonials} />
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 py-12 mx-auto md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between p-6 space-y-4 border rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <p className="mb-4 italic text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
