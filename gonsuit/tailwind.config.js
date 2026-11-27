/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "color-mix(in oklab, var(--background) calc(<alpha-value> * 100%), transparent)",
        foreground: "color-mix(in oklab, var(--foreground) calc(<alpha-value> * 100%), transparent)",
        card: {
          DEFAULT: "color-mix(in oklab, var(--card) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--card-foreground) calc(<alpha-value> * 100%), transparent)",
        },
        popover: {
          DEFAULT: "color-mix(in oklab, var(--popover) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--popover-foreground) calc(<alpha-value> * 100%), transparent)",
        },
        primary: {
          DEFAULT: "color-mix(in oklab, var(--primary) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--primary-foreground) calc(<alpha-value> * 100%), transparent)",
        },
        secondary: {
          DEFAULT: "color-mix(in oklab, var(--secondary) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--secondary-foreground) calc(<alpha-value> * 100%), transparent)",
        },
        muted: {
          DEFAULT: "color-mix(in oklab, var(--muted) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--muted-foreground) calc(<alpha-value> * 100%), transparent)",
        },
        accent: {
          DEFAULT: "color-mix(in oklab, var(--accent) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--accent-foreground) calc(<alpha-value> * 100%), transparent)",
        },
        destructive: {
          DEFAULT: "color-mix(in oklab, var(--destructive) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--destructive-foreground) calc(<alpha-value> * 100%), transparent)",
        },
        border: "color-mix(in oklab, var(--border) calc(<alpha-value> * 100%), transparent)",
        input: "color-mix(in oklab, var(--input) calc(<alpha-value> * 100%), transparent)",
        ring: "color-mix(in oklab, var(--ring) calc(<alpha-value> * 100%), transparent)",
        chart: {
          "1": "color-mix(in oklab, var(--chart-1) calc(<alpha-value> * 100%), transparent)",
          "2": "color-mix(in oklab, var(--chart-2) calc(<alpha-value> * 100%), transparent)",
          "3": "color-mix(in oklab, var(--chart-3) calc(<alpha-value> * 100%), transparent)",
          "4": "color-mix(in oklab, var(--chart-4) calc(<alpha-value> * 100%), transparent)",
          "5": "color-mix(in oklab, var(--chart-5) calc(<alpha-value> * 100%), transparent)",
        },
        sidebar: {
          DEFAULT: "color-mix(in oklab, var(--sidebar-background) calc(<alpha-value> * 100%), transparent)",
          foreground: "color-mix(in oklab, var(--sidebar-foreground) calc(<alpha-value> * 100%), transparent)",
          primary: "color-mix(in oklab, var(--sidebar-primary) calc(<alpha-value> * 100%), transparent)",
          "primary-foreground": "color-mix(in oklab, var(--sidebar-primary-foreground) calc(<alpha-value> * 100%), transparent)",
          accent: "color-mix(in oklab, var(--sidebar-accent) calc(<alpha-value> * 100%), transparent)",
          "accent-foreground": "color-mix(in oklab, var(--sidebar-accent-foreground) calc(<alpha-value> * 100%), transparent)",
          border: "color-mix(in oklab, var(--sidebar-border) calc(<alpha-value> * 100%), transparent)",
          ring: "color-mix(in oklab, var(--sidebar-ring) calc(<alpha-value> * 100%), transparent)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
