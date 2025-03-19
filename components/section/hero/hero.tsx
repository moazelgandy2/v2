import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import Image from "next/image";
import { HeroBackgroundAnimation } from "./bg-animation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { HyperText } from "@/components/magicui/hyper-text";
import LordIcon from "@/components/lord-icon";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function HeroSection() {
  return (
    <section className="w-full ">
      <div className="container px-4 md:px-6">
        <div className="grid w-full gap-6 overflow-hidden lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Transforming Ideas into
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h1 className="my-4 text-5xl font-semibold leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                    <LineShadowText
                      className="italic"
                      shadowColor={"black"}
                    >
                      Reality
                    </LineShadowText>
                  </h1>
                </motion.span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                We build innovative software solutions that drive business
                growth and enhance user experiences.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <InteractiveHoverButton>Some Action</InteractiveHoverButton>
              <ShinyButton>
                <span className="flex items-center justify-center text-sm font-bold">
                  Some Action2
                </span>
              </ShinyButton>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[350px] lg:h-[500px] lg:w-[400px]">
              <div className="relative w-[500px] h-[500px]">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue/20 to-purple/20 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: "8s" }}
                />
                <LordIcon
                  src="https://cdn.lordicon.com/ubpgwkmy.json"
                  trigger="loop"
                  colors={{ primary: "#121331", secondary: "#000000" }}
                  size={500}
                />
              </div>
            </div>
            <HeroBackgroundAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
