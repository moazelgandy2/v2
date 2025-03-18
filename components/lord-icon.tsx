"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

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

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("lord-icon")) {
      defineElement(lottie.loadAnimation);
    }
  }, []);

  return (
    <div
      ref={iconRef}
      className={className}
    >
      {/* @ts-ignore - Custom element that is defined at runtime */}
      <lord-icon
        src={src}
        trigger={trigger}
        delay={delay}
        colors={`primary:${colors.primary}, secondary:${colors.secondary}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
}
