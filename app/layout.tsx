import type { Metadata } from "next";
import "./globals.css";
import { CustomPointerProvider } from "@/providers/custom-pointer-provider";
import SplashScreen from "@/providers/splash-screen";
import SplashCursor from "@/providers/splash-cursor";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Marketopia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden scroll-smooth dark">
        <CustomPointerProvider type="none" />
        <Toaster />
        <SplashScreen>{children}</SplashScreen>
        <SplashCursor />
      </body>
    </html>
  );
}
