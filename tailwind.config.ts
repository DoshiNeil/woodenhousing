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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkPurple: "#2d1f34",
      },
      fontFamily: {
        lexend: ["var(--font-lexend-deca)"],
        livvic: ["var(--font-livvic)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
