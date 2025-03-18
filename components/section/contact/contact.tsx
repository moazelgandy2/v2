"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ContactSection() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      className="w-full py-12 overflow-hidden md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary text-primary-foreground">
            Contact Us
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Let's Build Something Amazing Together
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to start your project? Get in touch with our team to discuss
            how we can help bring your ideas to life.
          </p>
        </motion.div>
        <motion.div
          ref={formRef}
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="first-name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                First name
              </label>
              <Input
                id="first-name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="last-name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Last name
              </label>
              <Input
                id="last-name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[120px]"
            />
          </div>
          <Button className="w-full">Send Message</Button>
        </motion.div>
      </div>
    </section>
  );
}
