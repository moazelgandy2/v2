"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CodeDisplay from "./code-display";
import FloatingElements from "./floating-elements";

export default function CodeSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-[400px] w-full max-w-xl">
        <motion.div
          className="absolute inset-0 z-10 overflow-hidden rounded-xl shadow-2xl"
          animate={{
            y: hovered ? -5 : 0,
            scale: hovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CodeDisplay />
        </motion.div>

        <div className="absolute inset-0 z-20">
          <FloatingElements />
        </div>
      </div>
    </motion.div>
  );
}
