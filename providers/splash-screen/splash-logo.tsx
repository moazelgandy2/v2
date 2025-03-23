"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SplashLogo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mb-0"
    >
      <div className="flex items-center justify-center w-20 h-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image
            src="/logo2.png"
            alt="Marketopia Logo"
            width={75}
            height={75}
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
