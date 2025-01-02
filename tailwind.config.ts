import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#050505",
        "background-secondary": "#0f0f10",
        "background-tertiary": "#19191A",
        "content-heading": "#FFFFFF",
        "content-body": "#CDCBCC",
        "content-headline": "#B2B2B2",
        "content-placeholder": "#827d7F",
        "accent-purple": "#5A4C6F",
        "accent-blue": "#426782",
        "accent-green": "#59744B",
        "accent-pink": "#6F4A5A",
        "accent-yellow": "#8A7A3E",
        "accent-purple-dark": "#3B3548",
        "accent-blue-dark": "#2C404A",
        "accent-green-dark": "#3D4731",
        "accent-pink-dark": "#493238",
        "accent-yellow-dark": "#594F32",
        "border-primary": "#2B2B2C",
        "border-secondary": "#393A3B",
        "border-tertiary": "#616162"
      },
    },
  },
  plugins: [],
} satisfies Config;
