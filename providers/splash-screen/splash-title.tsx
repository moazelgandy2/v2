"use client";

import { motion } from "framer-motion";

export function SplashTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="text-white text-xl font-bold tracking-wider mb-1"
    >
      MARKETOPIA
    </motion.div>
  );
}
