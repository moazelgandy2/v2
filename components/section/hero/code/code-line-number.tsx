"use client";

export const CodeLineNumber = ({
  codeLines,
  currentLineIndex,
  activeLineIndex,
}: {
  codeLines: any;
  currentLineIndex: number;
  activeLineIndex: number | null;
}) => {
  return (
    <div className="mr-4 text-xs text-right text-gray-600 select-none">
      {codeLines.slice(0, currentLineIndex).map((_: any, i: number) => (
        <div
          key={i}
          className={`h-6 ${activeLineIndex === i ? "text-white" : ""}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
