import type { Config } from "tailwindcss";
import daisyui from "daisyui"


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sx: '400px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      fontFamily: {
        changa: ['Changa', 'sans-serif'],
        exo2: ['Exo 2', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
      },
      extend: {
        translate: ['active'],
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
      "light", "dark"
    ],
  },
} satisfies Config;
