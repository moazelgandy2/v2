"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CodeHeader } from "./code/code-header";
import { CodeLineNumber } from "./code/code-line-number";
import { CodeLine } from "./code/code-line";
import { codeLines } from "@/constants";

export default function CodeDisplay() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(null);

  useEffect(() => {
    if (currentLineIndex < codeLines.length && !isComplete) {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, 120); // typing speed

      return () => clearTimeout(timer);
    } else if (currentLineIndex >= codeLines.length && !isComplete) {
      setIsComplete(true);

      let lineIndex = 1;

      const highlightLines = () => {
        setActiveLineIndex(lineIndex as any);

        setTimeout(() => {
          setActiveLineIndex(null);

          if (lineIndex < 9) {
            lineIndex++;
            highlightLines();
          } else if (lineIndex === 9) {
            lineIndex = 12;
            highlightLines();
          } else if (lineIndex < 14) {
            lineIndex++;
            highlightLines();
          } else {
            setTimeout(() => {
              setCurrentLineIndex(0);
              setIsComplete(false);
            }, 1500);
          }
        }, 300);
      };

      setTimeout(highlightLines, 1000);
    }
  }, [currentLineIndex, isComplete, codeLines.length]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#2b2a2a] shadow-lg">
      <CodeHeader />

      <div className="flex h-[calc(100%-2.5rem)] p-4 font-mono text-sm">
        <div className="mr-4 text-xs text-right text-gray-600 select-none">
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
              activeLineIndex={currentLineIndex}
            />
          ))}

          {!isComplete && (
            <motion.div
              className="w-2 h-4 bg-white"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
