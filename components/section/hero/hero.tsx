"use client";

import { motion } from "framer-motion";
import HeroContent from "./hero-content";
import CodeSection from "./code-section";
import Threads from "@/components/threads-bg";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[hsl(222_47%_11%)] min-h-screen">
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Threads
          amplitude={2.2}
          distance={1.8}
          color={[0, 0.75, 1]}
          enableMouseInteraction={true}
        />
      </div>
      <div className="relative z-10 px-4 pt-16 pb-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <HeroContent />

          <CodeSection />
        </div>
      </div>
    </div>
  );
}
