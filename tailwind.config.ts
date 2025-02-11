import type { Config } from "tailwindcss";
import daisyui from "daisyui"


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        changa: ['Changa', 'sans-serif'],
        exo2: ['Exo 2', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0092ca",
          "secondary": "#0284c7",
          "accent": "#eeeeee",
          "neutral": "#222831",
          "base-100": "#393e46",
          "info": "#06b6d4",
          "success": "#22c55e",
          "warning": "#eab308",
          "error": "#f12843",
        },
      },
      "light", "dark", "cupcake"
    ],
  },
} satisfies Config;
