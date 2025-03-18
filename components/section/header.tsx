import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Code className="w-6 h-6" />
          <span>Company</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Team
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </motion.header>
  );
}
