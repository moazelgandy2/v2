"use client";

import { Button } from "@/components/ui/button";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  progress: MotionValue<number>;
}

export function ServiceCard({
  title,
  description,
  image,
  index,
  progress,
}: ServiceCardProps) {
  const isEven = index % 2 === 0;
  const x = useTransform(progress, [0, 1], [isEven ? -100 : 100, 0]);
  const opacity = useTransform(progress, [0, 0.3, 0.6], [0, index * 0.5, 1]);

  return (
    <motion.div
      className={`grid gap-6 ${
        isEven ? "lg:grid-cols-[1fr_400px]" : "lg:grid-cols-[400px_1fr]"
      } items-center`}
      style={{ x, opacity }}
    >
      <div className={`space-y-4 ${!isEven && "lg:order-last"}`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="outline">Learn More</Button>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover transition-transform aspect-video hover:scale-105"
        />
      </div>
    </motion.div>
  );
}
