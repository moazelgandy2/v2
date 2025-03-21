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

  // Simpler text variants
  const textVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Optimized letter animations
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  // Simplified hover variant (static, not continuous)
  const hoverVariants = {
    hover: (i: number) => ({
      y: -5,
      color: i % 3 === 0 ? "#FF548E" : i % 3 === 1 ? "#7C4DFF" : "#00C6FF",
      transition: { duration: 0.2 },
    }),
    initial: {
      y: 0,
      color: "white",
      transition: { duration: 0.2 },
    },
  };

  const animatableText = "INNOVATE";

  // Split the subtext into words for animation
  const beyondBoundaries = "beyond boundaries".split(" ");

  return (
    <div className="flex flex-col items-start justify-center w-full h-full space-y-8 select-none">
      <div className="relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-[50%] w-24 h-[2px] logo-gradient-orange"
          style={{ originX: 0 }}
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative ml-[30px] pl-2 text-xs uppercase tracking-widest text-[hsl(var(--accent))] font-bold"
        >
          Future-Ready Technology
        </motion.div>
      </div>

      <div className="overflow-hidden relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-black tracking-tight text-white"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.div
            ref={ref}
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="flex overflow-hidden mb-2">
              {animatableText.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                  initial="initial"
                  whileHover="hover"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Enhanced subtext with word-by-word animation */}
            <div className="flex flex-wrap text-5xl md:text-6xl font-bold">
              {beyondBoundaries.map((word, index) => (
                <motion.span
                  key={index}
                  className="block mr-3"
                  style={{
                    background:
                      "linear-gradient(-45deg, #FFE259, #FF548E, #7C4DFF, #00C6FF)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundSize: "300% 300%",
                    color: "transparent",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    y: [0, -5, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    opacity: { delay: 1.2 + index * 0.2, duration: 0.5 },
                    backgroundPosition: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "reverse",
                      delay: index * 0.2, // Offset each word to create wave effect
                    },
                    scale: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "reverse",
                      delay: index * 0.3, // Different delay for scale creates interesting effect
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
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
            Get Started
          </span>
        </Link>

        <Link
          href="#our-work"
          className="group relative px-6 py-3 overflow-hidden rounded-md border border-[rgba(255,255,255,0.1)]"
        >
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)]"></div>
          <div className="absolute inset-0 bg-[hsl(var(--primary)_/_0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative text-gray-300 font-medium z-10">
            View Projects
          </span>
        </Link>
      </motion.div>

      <style
        jsx
        global
      >{`
        @keyframes slide-down {
          to {
            transform: translateY(200%);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}
