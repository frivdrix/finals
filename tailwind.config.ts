import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./wix/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // FIXED: Use standard breakpoints instead of ultra-wide
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",  // Changed from 1921px - THIS IS THE KEY FIX!
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00ff66",
          hover: "#00e65c",
        },
      },
    }
  },
  plugins: [],
}

export default config
