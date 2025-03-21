/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: 0,
          },
        },
        rippling: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        "slide-down": {
          to: {
            transform: "translateY(200%)",
          },
        },
        "gradient-flow": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "subtle-float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "shine-effect": {
          "0%": {
            transform: "translateX(-100%) rotate(45deg)",
          },
          "100%": {
            transform: "translateX(100%) rotate(45deg)",
          },
        },
        "cycle-text": {
          "0%, 5%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "10%, 18%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "23%, 100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
        "text-shimmer": {
          "0%": {
            backgroundPosition: "200% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "char-float": {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
          },
          "25%": {
            transform: "translateY(-4px) rotate(-2deg)",
          },
          "75%": {
            transform: "translateY(4px) rotate(2deg)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            textShadow: "0 0 8px rgba(124, 77, 255, 0.3)",
          },
          "50%": {
            textShadow: "0 0 18px rgba(124, 77, 255, 0.8)",
          },
        },
        "3d-float": {
          "0%, 100%": {
            transform: "translateZ(0) translateY(0)",
            textShadow: "0 0 0 rgba(0, 198, 255, 0)",
          },
          "50%": {
            transform: "translateZ(10px) translateY(-5px)",
            textShadow: "0 5px 15px rgba(0, 198, 255, 0.4)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rippling: "rippling var(--duration) ease-out",
        "shiny-text": "shiny-text 8s infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "slide-down": "slide-down 0.5s ease forwards",
        "gradient-flow": "gradient-flow 8s ease infinite",
        "subtle-float": "subtle-float 3s ease-in-out infinite",
        "shine-effect": "shine-effect 4s linear infinite",
        "cycle-text-1": "cycle-text 10s ease-in-out infinite",
        "cycle-text-2": "cycle-text 10s ease-in-out infinite 2s",
        "cycle-text-3": "cycle-text 10s ease-in-out infinite 4s",
        "cycle-text-4": "cycle-text 10s ease-in-out infinite 6s",
        "cycle-text-5": "cycle-text 10s ease-in-out infinite 8s",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "char-float-1": "char-float 3s ease-in-out infinite",
        "char-float-2": "char-float 3s ease-in-out infinite 0.2s",
        "char-float-3": "char-float 3s ease-in-out infinite 0.4s",
        "char-float-4": "char-float 3s ease-in-out infinite 0.6s",
        "char-float-5": "char-float 3s ease-in-out infinite 0.8s",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "3d-float": "3d-float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
