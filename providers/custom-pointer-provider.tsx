"use client";

import React, { useState, useEffect } from "react";
import { Circle } from "lucide-react";
import OGLPolylines from "@/components/ogl";

export const CustomPointerProvider = ({ type }: { type: "lines" | "none" }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(true);
  const [isFeatureCard, setIsFeatureCard] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  useEffect(() => {
    setIsClient(true);

    const updateCursorPosition = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleElementHover = (e: MouseEvent) => {
      let currentElement = e.target as HTMLElement | null;
      let isFeature = false;

      while (currentElement) {
        if (currentElement.id && currentElement.id.startsWith("feature-")) {
          isFeature = true;
          break;
        }
        currentElement = currentElement.parentElement;
      }

      setIsFeatureCard(isFeature);
      setIsVisible(!isFeature);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, []);

  if (!isClient) return null;

  if (isMobile()) {
    return;
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <Circle
          size={20}
          color="#00BFFF"
        />
      </div>
      <style
        jsx
        global
      >{`
        body,
        * {
          cursor: none !important;
        }

        [id^="feature-"] {
          cursor: none !important;
        }

        body.feature-hover * {
          cursor: none !important;
        }
      `}</style>

      {isClient && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.body.classList.${
              isFeatureCard ? "add" : "remove"
            }('feature-hover');
          `,
          }}
        />
      )}

      {type === "lines" && <OGLPolylines />}
    </>
  );
};
