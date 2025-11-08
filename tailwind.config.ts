import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./wix/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Raise breakpoints so 'lg' and above rarely trigger on normal desktops.
    // This keeps the UI looking like your Vercel Preview (md-sized) on big screens.
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1921px",   // only ultra‑wide screens hit lg
      xl: "2400px",
      "2xl": "3000px",
    },
    extend: {}
  },
  plugins: [],
}

export default config
