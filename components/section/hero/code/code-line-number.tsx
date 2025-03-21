"use client";

import { memo } from "react";

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
          <div
            key={i}
            className={`h-6 ${
              activeLineIndex === i ? "text-[#FF548E] font-bold" : ""
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    );
  }
);

CodeLineNumber.displayName = "CodeLineNumber";
