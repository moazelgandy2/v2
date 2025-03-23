"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

export default function HeroContent() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Combined letter animations for entrance and hover
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
    hover: (i: number) => ({
      y: -5,
      scale: 1.2,
      color: i % 3 === 0 ? "#FF548E" : i % 3 === 1 ? "#7C4DFF" : "#00C6FF",
      textShadow:
        i % 3 === 0
          ? "0 0 12px rgba(255, 84, 142, 0.7)"
          : i % 3 === 1
          ? "0 0 12px rgba(124, 77, 255, 0.7)"
          : "0 0 12px rgba(0, 198, 255, 0.7)",
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }),
    initial: {
      y: 0,
      scale: 1,
      color: "white",
      textShadow: "none",
      transition: { duration: 0.2 },
    },
  };

  // Text container variants
  const textVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const animatableText = "TRANSFORM";

  // Cycling tech buzzwords for the top section - updated to be more impactful
  const techBuzzwords = [
    "Future-Proof",
    "Cutting-Edge",
    "Enterprise-Ready",
    "Scalable",
    "Next-Gen",
  ];

  // Split subtext into individual characters for animation
  const subText = "the future of tech";
  const subTextChars = subText.split("");

  return (
    <div className="flex flex-col items-start justify-center w-full h-full space-y-8 select-none">
      {/* Redesigned top section with cycling text */}
      <div className="relative z-10 flex items-center">
        <motion.div
          className="badge relative h-8 px-3 flex items-center justify-center rounded-full bg-gradient-to-r from-[#7c4dff] to-[#00c6ff] shadow-[0_0_15px_rgba(124,77,255,0.5)] overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:rotate-45 before:animate-shine-effect"></div>
          <div className="relative z-10 text-white text-xs font-semibold tracking-wider animate-pulse-glow">
            Marketopia
          </div>
        </motion.div>

        <motion.div
          className="ml-4 text-sm uppercase text-white font-medium tracking-wide relative h-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {techBuzzwords.map((word, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center animate-cycle-text-${
                index + 1
              }`}
            >
              {word} Solutions
            </div>
          ))}
        </motion.div>
      </div>

      <div className="overflow-hidden relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-black tracking-tight text-white perspective-[1000px]"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.div
            ref={ref}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="transform-gpu"
          >
            <div className="flex overflow-hidden mb-2">
              {animatableText.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block transform-gpu origin-center"
                  initial="initial"
                  animate="visible"
                  whileHover="hover"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Enhanced subtext with simplified, elegant animation */}
            <motion.div
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, duration: 0.6 },
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <span className="bg-gradient-to-br from-[#FF548E] via-[#7C4DFF] to-[#00C6FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer filter drop-shadow-sm">
                the future of tech
              </span>
            </motion.div>

            {/* Animated 3D highlight text */}
            <motion.div
              className="mt-6 text-xl font-medium animate-3d-float"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-[#FF548E] to-[#7C4DFF] bg-clip-text text-transparent animate-text-shimmer">
                Elevate your business with next-level technology
              </span>
            </motion.div>
          </motion.div>
        </motion.h1>
      </div>

      <motion.div
        className="flex space-x-4 mt-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <Link
          href="#contact"
          className="group relative px-6 py-3 overflow-hidden rounded-md"
        >
          <div className="absolute inset-0 logo-gradient-orange"></div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -inset-y-[100%] left-0 w-full h-full logo-gradient-purple group-hover:animate-slide-down"></div>
          <span className="relative text-white font-medium z-10">
            Start Building
          </span>
        </Link>

        <Link
          href="#our-work"
          className="group relative px-6 py-3 overflow-hidden rounded-md border border-[rgba(255,255,255,0.1)]"
        >
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)]"></div>
          <div className="absolute inset-0 bg-[hsl(var(--primary)_/_0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative text-gray-300 font-medium z-10">
            Explore Solutions
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
