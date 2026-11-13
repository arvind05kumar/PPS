"use client";

import React from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-full border border-studio-gold/30 bg-studio-card/80 hover:bg-studio-surface text-studio-cream hover:border-studio-gold transition-all duration-300 text-xs shadow-md"
      title={theme === "dark" ? "Switch to Ivory/Light Mode" : "Switch to Royal Dark Mode"}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5 text-studio-gold" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-studio-gold" />
      )}
    </button>
  );
}

