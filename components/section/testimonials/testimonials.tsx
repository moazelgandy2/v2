"use client";

import { sections, testimonials } from "@/constants";
import { SectionHeader } from "../section-header";
import { Globe } from "@/components/magicui/globe";
import { Marquee } from "@/components/magicui/marquee";
import { ReviewCard } from "./card";

export function TestimonialsSection() {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section
      id="testimonials"
      className="relative w-full py-12 overflow-hidden md:py-24 lg:py-32"
    >
      <div className="container relative w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeader section={sections.testimonials} />
        </div>

        <Marquee
          reverse
          pauseOnHover
          className="[--duration:20s] w-full"
        >
          {firstRow.map((review) => (
            <ReviewCard
              key={review.author}
              {...review}
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className="[--duration:20s] w-full"
        >
          {secondRow.map((review) => (
            <ReviewCard
              key={review.author}
              {...review}
            />
          ))}
        </Marquee>

        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center w-2/3">
            <Globe className="top-[58px] text-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
