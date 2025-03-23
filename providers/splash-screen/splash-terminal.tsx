"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function SplashTerminal() {
  return (
    <div className="w-full flex justify-center min-w-[600px] max-w-4xl px-4">
      <Terminal className="w-full">
        <TypingAnimation>&gt; npm start</TypingAnimation>

        <AnimatedSpan
          delay={700}
          className="text-green-500"
        >
          <span>✓ Initializing environment</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={1200}
          className="text-blue-400"
        >
          <span>$ </span>
          <span className="text-white">Loading React components</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={1700}
          className="text-green-500"
        >
          <span>✓ API services connected</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2200}
          className="text-blue-400"
        >
          <span>$ </span>
          <span className="text-white">Starting development server</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2700}
          className="text-amber-500"
        >
          <span>⚡ System ready</span>
        </AnimatedSpan>

        <TypingAnimation
          delay={3200}
          className="text-[#7C4DFF] font-medium"
        >
          Building digital solutions
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
