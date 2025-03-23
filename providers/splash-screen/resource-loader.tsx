"use client";

import { useEffect } from "react";

const CRITICAL_RESOURCES = [
  "/logo2.png",
  "/favicon.ico",
  "icons/code.json",
  "icons/first.json",
  "icons/globe.json",
  "icons/growth.json",
  "icons/layers.json",
  "icons/support.json",
];

export function ResourceLoader() {
  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadAll = async () => {
      try {
        const imageResources = CRITICAL_RESOURCES.filter((resource) =>
          resource.match(/\.(jpeg|jpg|png|webp|svg)$/)
        );

        await Promise.all(imageResources.map((src) => preloadImage(src)));
        console.log("All critical resources preloaded successfully");
      } catch (error) {
        console.warn("Failed to preload some resources", error);
      }
    };

    preloadAll();
  }, []);

  return null;
}
