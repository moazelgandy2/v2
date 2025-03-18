import {
  Braces,
  Database,
  Globe,
  Layers,
  MessageSquare,
  Users,
} from "lucide-react";
import { Pointer } from "./components/magicui/pointer";
import { motion } from "framer-motion";

export const sections = {
  features: {
    heading: "Features",
    title: "Why Choose Company?",
    description:
      "We combine technical expertise with creative problem-solving to deliver exceptional software solutions.",
  },
  services: {
    heading: "Services",
    title: "What We Offer",
    description:
      "Comprehensive software development services tailored to your business needs.",
  },
  team: {
    heading: "Our Team",
    title: "Meet the Experts",
    description:
      "Our talented team of professionals is dedicated to delivering exceptional results.",
  },
  testimonials: {
    heading: "Testimonials",
    title: "What Our Clients Say",
    description:
      "Don't just take our word for it. Here's what our clients have to say about working with us.",
  },
};

export const features = [
  {
    icon: <Braces className="w-10 h-10" />,
    title: "Clean Code",
    description:
      "We write maintainable, scalable code following best practices and industry standards.",
    pointer: (
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </motion.div>
      </Pointer>
    ),
  },

  {
    icon: <Layers className="w-10 h-10" />,
    title: "Modern Stack",
    description:
      "We use cutting-edge technologies to build fast, reliable, and secure applications.",
    pointer: (
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            ></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </motion.div>
      </Pointer>
    ),
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Global Reach",
    description:
      "Our solutions are designed to work across different markets and regions.",
    pointer: (
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="2"
            ></circle>
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
          </svg>
        </motion.div>
      </Pointer>
    ),
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "User-Centered",
    description:
      "We prioritize user experience in every aspect of our development process.",
    pointer: (
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
          </svg>
        </motion.div>
      </Pointer>
    ),
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Scalable Infrastructure",
    description:
      "Our applications are built to handle growth and increasing demands.",
    pointer: (
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
        </motion.div>
      </Pointer>
    ),
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Ongoing Support",
    description:
      "We provide continuous maintenance and support for all our projects.",
    pointer: (
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            ></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line
              x1="12"
              y1="17"
              x2="12.01"
              y2="17"
            ></line>
          </svg>
        </motion.div>
      </Pointer>
    ),
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "We create responsive, fast-loading websites and web applications using modern frameworks and technologies.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions designed to address your specific business challenges and requirements.",
    image: "/placeholder.svg?height=400&width=600",
  },
];
export const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emma Wilson",
    role: "UX/UI Designer",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Company transformed our business. Their team delivered a solution that exceeded our expectations.",
    author: "Jane Smith",
    company: "TechCorp CEO",
  },
  {
    quote:
      "The attention to detail and technical expertise of the Company team is unmatched. Highly recommended!",
    author: "David Lee",
    company: "Innovate Inc.",
  },
  {
    quote:
      "Company helped us launch our product in record time without compromising on quality or user experience.",
    author: "Maria Garcia",
    company: "StartUp Founder",
  },
];
