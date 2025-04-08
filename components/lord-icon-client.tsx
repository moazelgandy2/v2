"use client";

import React from "react";
import { LordIconProps } from "./lord-icon";

export const LordIconClient = ({
  src,
  trigger = "hover",
  colors = {
    primary: "#121331",
    secondary: "#08a88a",
  },
  size = 32,
  delay = 1000,
  className = "",
}: LordIconProps) => {
  React.useEffect(() => {
    const initLordIcon = async () => {
      const lottie = (await import("lottie-web")).default;
      const { defineElement } = await import("lord-icon-element");

      if (!customElements.get("lord-icon")) {
        defineElement(lottie.loadAnimation);
      }
    };

    initLordIcon();
  }, []);

  return (
    // @ts-ignore - Custom element that is defined at runtime
    <lord-icon
      colors={`primary:${colors.primary},secondary:${colors.secondary}`}
      src={src}
      trigger={trigger}
      delay={delay}
      style={{
        width: size,
        height: size,
      }}
      className={className}
    />
  );
};
