"use client";

import { useEffect } from "react";

// List of critical resources to preload
const CRITICAL_RESOURCES = [
  // Images
  "/images/hero-bg.webp",
  "/images/logo.svg",
  "/logo2.png",
];

export function ResourceLoader() {
  useEffect(() => {
    // Create a function to preload an image
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload all images in parallel
    const preloadAll = async () => {
      try {
        const imageResources = CRITICAL_RESOURCES.filter((resource) =>
          resource.match(/\.(jpeg|jpg|png|webp|svg)$/)
        );

        // Use Promise.all to load all images in parallel
        await Promise.all(imageResources.map((src) => preloadImage(src)));
        console.log("All critical resources preloaded successfully");
      } catch (error) {
        console.warn("Failed to preload some resources", error);
      }
    };

    // Start preloading
    preloadAll();
  }, []);

  // This component doesn't render anything visible
  return null;
}
