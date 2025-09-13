import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import Provider from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Eato",
  description:
    "Smart food suggestions powered by AI - Get personalized meal recommendations based on your cravings, cuisine preferences, and dietary needs.",
  keywords: [
    "food",
    "AI",
    "recipes",
    "meal planning",
    "cuisine",
    "dietary preferences",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${raleway.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
