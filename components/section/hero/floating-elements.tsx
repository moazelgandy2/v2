"use client";

import { FloatingElement } from "@/components/ui/floating-element";
import { Code, Database, Cpu, Cloud, Shield } from "lucide-react";

export default function FloatingElements() {
  return (
    <>
      <FloatingElement
        x={20}
        y={200}
        color="#08A88A"
        size="md"
        delay={0}
      >
        <Code className="h-6 w-6" />
      </FloatingElement>

      <FloatingElement
        x={300}
        y={40}
        color="#3B82F6"
        size="sm"
        delay={0.5}
      >
        <Database className="h-5 w-5" />
      </FloatingElement>

      <FloatingElement
        x={160}
        y={-20}
        color="#9333EA"
        size="md"
        delay={1}
      >
        <Cpu className="h-6 w-6" />
      </FloatingElement>

      <FloatingElement
        x={340}
        y={-10}
        color="#F59E0B"
        size="sm"
        delay={1.5}
      >
        <Cloud className="h-5 w-5" />
      </FloatingElement>

      <FloatingElement
        x={-20}
        y={8}
        color="#10B981"
        size="sm"
        delay={2}
      >
        <Shield className="h-5 w-5" />
      </FloatingElement>
    </>
  );
}
