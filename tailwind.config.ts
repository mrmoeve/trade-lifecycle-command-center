import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aptos", "Segoe UI Variable", "Segoe UI", "Helvetica Neue", "sans-serif"],
        display: ["Aptos Display", "Aptos", "Segoe UI Variable", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        surface: {
          950: "#060b12",
          900: "#0c1320",
          850: "#101928",
          800: "#172235",
          700: "#24314a"
        },
        accent: {
          cyan: "#3dd9ff",
          amber: "#ffb347",
          green: "#3ddc97",
          red: "#ff6b7a",
          blue: "#6ca7ff"
        }
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(148, 163, 184, 0.08), 0 14px 42px rgba(2, 8, 23, 0.42)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
