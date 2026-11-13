import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        studio: {
          dark: "#0a0a0a",
          bg: "#0e0e0e",
          card: "#141414",
          surface: "#181818",
          border: "#28241d",
          ivory: "#f6efe6",
          ivoryMuted: "#d4cdc4",
          cream: "#e8d9a0",
          gold: "#c9a24b",
          goldLight: "#dfbe6f",
          goldDark: "#94762c",
          goldDim: "rgba(201, 162, 75, 0.15)",
          blush: "#c48b8b",
          blushLight: "#f4dede",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        hindi: ["var(--font-devanagari)", "serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

