import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CodeLine = memo(
  ({
    line,
    activeLineIndex,
    i,
  }: {
    line: any;
    activeLineIndex: any;
    i: number;
  }) => {
    const isActive = activeLineIndex === i;

    // Determine colors based on line type
    const highlightColor = getHighlightColor(line.type);
    const shadowColor = getShadowColor(line.type);

    return (
      <div className={`h-6 ${line.color} relative`}>
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute -ml-2 h-6 w-[calc(100%+2rem)] rounded bg-[#7C4DFF]/10"
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        <motion.span
          className="relative"
          animate={{
            color: isActive ? highlightColor : "",
            textShadow: isActive ? `0 0 8px ${shadowColor}` : "none",
            scale: isActive ? 1.05 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {line.content}
        </motion.span>
      </div>
    );
  }
);

// Function to determine highlight color based on type
function getHighlightColor(type: string): string {
  switch (type) {
    case "comment":
      return "#FF548E";
    case "import":
      return "#B56EFD";
    case "property":
      return "#00C6FF";
    case "value":
      return "#FFE259";
    case "function":
      return "#7C4DFF";
    default:
      return "#ffffff";
  }
}

// Function to determine shadow color based on type
function getShadowColor(type: string): string {
  switch (type) {
    case "comment":
      return "rgba(255, 84, 142, 0.6)";
    case "import":
      return "rgba(181, 110, 253, 0.6)";
    case "property":
      return "rgba(0, 198, 255, 0.6)";
    case "value":
      return "rgba(255, 226, 89, 0.6)";
    case "function":
      return "rgba(124, 77, 255, 0.6)";
    default:
      return "rgba(255, 255, 255, 0.6)";
  }
}

CodeLine.displayName = "CodeLine";
