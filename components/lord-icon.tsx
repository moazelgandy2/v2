"use client";

import { useEffect, useRef, useState } from "react";

interface LordIconProps {
  src: string;
  trigger?:
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "boomerang";
  colors?: {
    primary?: string;
    secondary?: string;
  };
  size?: number;
  className?: string;
  delay?: number;
}

export default function LordIcon({
  src,
  trigger = "loop",
  colors = { primary: "#121331", secondary: "#08a88a" },
  size = 32,
  className = "",
  delay = 0,
}: LordIconProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadLordIcon = async () => {
      const lottie = (await import("lottie-web")).default;
      const { defineElement } = await import("lord-icon-element");

      if (!customElements.get("lord-icon")) {
        defineElement(lottie.loadAnimation);
      }
      setIsLoaded(true);
    };

    loadLordIcon();
  }, []);

  return (
    <div
      ref={iconRef}
      className={className}
    >
      {isLoaded ? (
        // @ts-ignore - Custom element that is defined at runtime
        <lord-icon
          src={src}
          trigger={trigger}
          delay={delay}
          colors={`primary:${colors.primary}, secondary:${colors.secondary}`}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      ) : (
        // Placeholder div with same dimensions
        <div style={{ width: `${size}px`, height: `${size}px` }} />
      )}
    </div>
  );
}
