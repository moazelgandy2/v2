"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SplashLogo,
  SplashTitle,
  SplashTerminal,
  ResourceLoader,
} from "./splash-screen/index";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Updated animation duration for new terminal content
    const totalAnimationDuration = 5000;

    const timer = setTimeout(() => {
      setLoading(false);
    }, totalAnimationDuration);

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-50 flex gap-0 flex-col items-center justify-center bg-[hsl(222_47%_11%)]"
          >
            <ResourceLoader />
            <div className="flex flex-col items-center justify-center gap-1 w-full max-w-5xl px-4">
              <SplashLogo />
              <SplashTitle />
              <SplashTerminal />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
