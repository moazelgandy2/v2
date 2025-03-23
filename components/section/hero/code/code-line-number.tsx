"use client";

import { memo } from "react";
import { motion } from "framer-motion";

export const CodeLineNumber = memo(
  ({
    codeLines,
    currentLineIndex,
    activeLineIndex,
  }: {
    codeLines: any;
    currentLineIndex: number;
    activeLineIndex: number | null;
  }) => {
    return (
      <div className="mr-4 text-xs text-right text-gray-500 select-none">
        {codeLines.slice(0, currentLineIndex).map((_: any, i: number) => (
          <motion.div
            key={i}
            className="h-6"
            animate={{
              color: activeLineIndex === i ? "#FF548E" : "#6b7280",
              fontWeight: activeLineIndex === i ? 700 : 400,
              x: activeLineIndex === i ? 2 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>
    );
  }
);

CodeLineNumber.displayName = "CodeLineNumber";
