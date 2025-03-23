"use client";

import { motion } from "framer-motion";

export const FloatingElement = ({
  children,
  x = 0,
  y = 0,
  size = "md",
  color = "#08A88A",
  delay = 0,
}: {
  children: React.ReactNode;
  x?: number;
  y?: number;
  size?: "sm" | "md" | "lg";
  color?: string;
  delay?: number;
}) => {
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  };

  return (
    <motion.div
      initial={{ x, y }}
      animate={{
        y: [y, y - 15, y],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      className="absolute z-20"
      style={{ left: x, top: y }}
    >
      <motion.div
        className={`flex ${sizeClasses[size]} items-center justify-center rounded-full backdrop-blur-sm`}
        style={{
          backgroundColor: `${color}15`,
          border: `1px solid ${color}30`,
        }}
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: [
            `0 0 10px ${color}20`,
            `0 0 20px ${color}40`,
            `0 0 10px ${color}20`,
          ],
        }}
        transition={{
          boxShadow: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          scale: { type: "spring", stiffness: 300, damping: 10 },
        }}
      >
        <motion.div
          className="text-white"
          style={{ color }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
