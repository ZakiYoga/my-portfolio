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
        xs: '400px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'vt323': ['VT323', 'monospace'],
        'hanjet': ['Hanjet', 'sans-serif'],
        'jersey-10': ['Jersey 10', 'sans-serif'],
        'jersey-15': ['Jersey 15', 'sans-serif'],
        'jersey-20': ['Jersey 20', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))',
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
        light: {
          "primary": "#0092ca",
          "background": "#fff",
          "--gradient-start": "#ffffff",
          "--gradient-end": "#4C91F9",
        },
      },
      {
        dark: {
          "primary": "#0092ca",
          "secondary": "#0284c7",
          "accent": "#eeeeee",
          "neutral": "#222831",
          "base-100": "#393e46",
          "info": "#06b6d4",
          "success": "#22c55e",
          "warning": "#eab308",
          "error": "#f12843",
          "background": "#000",
          "--gradient-start": "#000000",
          "--gradient-end": "#133770",
        },
      },
    ],
  },
} satisfies Config;
