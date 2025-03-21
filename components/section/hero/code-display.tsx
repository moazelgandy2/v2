"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { CodeHeader } from "./code/code-header";
import { CodeLineNumber } from "./code/code-line-number";
import { CodeLine } from "./code/code-line";
import { codeLines } from "@/constants";

export default function CodeDisplay() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(null);
  const [scope, animate] = useAnimate();
  const typingInterval = useRef<NodeJS.Timeout | null>(null);

  // Random typing delay to mimic human typing
  const getRandomTypingDelay = () => Math.floor(Math.random() * 80) + 50;

  useEffect(() => {
    if (currentLineIndex < codeLines.length && !isComplete) {
      typingInterval.current = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);

        // Play typing sound effect
        const audio = new Audio();
        audio.src = `/sounds/keypress-${Math.floor(Math.random() * 3) + 1}.mp3`;
        audio.volume = 0.1;
        audio.play().catch(() => {});
      }, getRandomTypingDelay());

      return () => {
        if (typingInterval.current) clearTimeout(typingInterval.current);
      };
    } else if (currentLineIndex >= codeLines.length && !isComplete) {
      setIsComplete(true);

      const highlightLines = async () => {
        // Pause for dramatic effect
        await new Promise((resolve) => setTimeout(resolve, 700));

        // First pass - rapidly analyze all lines sequentially
        for (let i = 0; i < codeLines.length; i++) {
          setActiveLineIndex(i as any);
          await new Promise((resolve) => setTimeout(resolve, 70));
          setActiveLineIndex(null);
        }

        // Second pass - highlight important sections
        const importantLines = [1, 4, 6, 8, 13, 14];
        for (const line of importantLines) {
          setActiveLineIndex(line as any);
          await new Promise((resolve) => setTimeout(resolve, 350));
        }

        // Final highlight of the function calls
        setActiveLineIndex(null);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Highlight the final calls with a staggered effect
        setActiveLineIndex(13 as any);
        await new Promise((resolve) => setTimeout(resolve, 400));
        setActiveLineIndex(14 as any);
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Reset for next cycle
        setActiveLineIndex(null);
        setTimeout(() => {
          setCurrentLineIndex(0);
          setIsComplete(false);
        }, 1800);
      };

      highlightLines();
    }
  }, [currentLineIndex, isComplete, animate]);

  // Custom cursor animation
  const cursorVariants = {
    blink: {
      opacity: [1, 1, 0, 0, 1],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: "linear",
        times: [0, 0.4, 0.5, 0.9, 1],
      },
    },
    typing: {
      opacity: 1,
      height: ["14px", "18px", "14px"],
      width: ["2px", "3px", "2px"],
      transition: {
        repeat: Infinity,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#121124] border border-[rgba(255,255,255,0.05)] shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C4DFF]/05 to-transparent opacity-70"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CodeHeader />

        <div
          className="flex h-[calc(100%-2.5rem)] p-4 font-mono text-sm"
          ref={scope}
        >
          <div className="mr-4 text-xs text-right text-gray-500 select-none">
            <CodeLineNumber
              codeLines={codeLines}
              activeLineIndex={activeLineIndex}
              currentLineIndex={currentLineIndex}
            />
          </div>

          <div className="flex-1">
            {codeLines.slice(0, currentLineIndex).map((line, i) => (
              <CodeLine
                key={i}
                line={line}
                i={i}
                activeLineIndex={activeLineIndex}
              />
            ))}

            {!isComplete && (
              <motion.div
                className="w-2 h-4 bg-[#00C6FF] shadow-[0_0_8px_rgba(0,198,255,0.8)]"
                variants={cursorVariants}
                animate={currentLineIndex > 0 ? "typing" : "blink"}
              />
            )}
          </div>
        </div>
      </motion.div>

      {/* Overlay effect when highlighting */}
      {activeLineIndex !== null && (
        <motion.div
          className="absolute inset-0 bg-black/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
}
