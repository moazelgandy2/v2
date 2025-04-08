"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CheckCheck, LoaderCircle, X } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    firstname: z.string().min(3, { message: "First name is required" }),
    lastname: z.string().min(3, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(4, { message: "Subject is required" }),
    message: z.string().min(10, { message: "Message is required" }),
  });

  const handleConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const res = await fetch(
        `https://admin.programming.marketopiateam.com/api/contactus`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            subject: values.subject,
            message: values.message,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      toast({
        title: "Your message has been sent",
        description: (
          <div className="flex items-center space-x-2">
            <CheckCheck className="w-4 h-4 text-green-500" />
            <span>Thank you for contacting us!</span>
          </div>
        ),
      });
      handleConfetti();
    } catch (e) {
      toast({
        title: "Something went wrong. Please try again.",
        description: (
          <div className="flex items-center space-x-2">
            <X className="w-4 h-4 text-red-500" />
            <span>{"An error occurred while sending your message."}</span>
          </div>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to start your project? Get in touch with our team to discuss
            how we can help bring your ideas to life.
          </p>
        </motion.div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <motion.div
              ref={formRef}
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="firstname">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="lastname">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="subject">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Enter your message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {!isSubmitting ? (
                  "Send Message"
                ) : (
                  <LoaderCircle className="animate-spin w-4 h-4" />
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </div>
    </section>
  );
}
