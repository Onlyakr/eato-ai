"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import * as motion from "motion/react-client";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8, rotate: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent focus-visible:border-0 focus-visible:ring-0 dark:hover:bg-transparent"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:-rotate-90 hover:dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
