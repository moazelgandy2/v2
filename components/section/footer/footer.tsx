import { Code } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2 font-bold">
          <img
            className="w-6 h-6"
            src="/logo2.png"
          />
          <span>Marketopia</span>
        </div>
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Marketopia. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
