"use client";

import React from "react";
import dynamic from "next/dynamic";
import { LordIconClient } from "./lord-icon-client";

export interface LordIconProps {
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
  delay?: number;
  className?: string;
}

export const LordIcon = dynamic(() => Promise.resolve(LordIconClient), {
  ssr: false,
}) as React.FC<LordIconProps>;
