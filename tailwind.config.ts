import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import daisyuiThemes from 'daisyui/src/theming/themes';

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
      colors: {
        success: '#16A34A',
        warning: '#FACC15',
        danger: '#DC2626',
        info: '#3B82F6',
        box1:  "var(--box-1)",
        box2:  "var(--box-2)",
        box3:  "var(--box-3)",

      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'vt323': ['VT323', 'monospace'],
        'hanjet': ['Hanjet', 'sans-serif'],
        'jersey-10': ['Jersey 10', 'sans-serif'],
        'jersey-15': ['Jersey 15', 'sans-serif'],
        'jersey-20': ['Jersey 20', 'sans-serif'],
      },
      backgroundColor: {
        'sky': 'var(--gradient-end)',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))',
      },
      dropShadow: {
        'text-xs': '2px 1px 0px var(--text-shadow-color)',
        'text-sm': '4px 2px 0px var(--text-shadow-color)',
        'text-md': '4px 4px 0px var(--text-shadow-color)',
        'text-xs-d': '2px 1px 0px var(--text-foreground-color)',
        'text-sm-d': '4px 2px 0px var(--text-foreground-color)',
        'text-md-d': '4px 4px 0px var(--text-foreground-color)',
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
          ...daisyuiThemes.light,
          "primary": "#0092ca",
          "primary-focus" : "#fff",
          "secondary": "#fff",
          "accent": "#0080b2",
          "border": "#000",
          "background": "#fff",
          "foreground": "#000",
          "muted": "#f0f1f3",
          "base-content": "#000",
          "--box-1": "#ac3e00",
          "--box-2": "#d36411",
          "--box-3": "#932600",
          "--shadow-color": "#fff",
          "--text-shadow-color": "#fff",
          "--text-foreground-color": "#000",
          "--gradient-start": "#ffffff",
          "--gradient-end": "#4C91F9",
        },
      },
      {
        dark: {
          ...daisyuiThemes.dark,
          "primary": "#222831",
          "secondary": "#1e1e1e",
          "accent": "#1f242b",
          "border": "#121212",
          "background": "#000",
          "foreground": "#fff",
          "muted": "#f0f1f3",
          "base-content": "#fff",
          "--shadow-color": "220, 220, 255", 
          "--box-1": "#5e2200",
          "--box-2": "#7c3c0c",
          "--box-3": "#481301",
          "--text-shadow-color": "#000",
          "--text-foreground-color": "#fff",
          "--gradient-start": "#000000",
          "--gradient-end": "#133770",
        },
      },
    ],
  },
} satisfies Config;
