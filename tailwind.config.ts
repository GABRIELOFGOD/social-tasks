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
        secondary: "var(--secondary)",
        primary: "var(--primary)",
        textGreen: "var(--text-green)",
      },
    },
  },
  plugins: [],
} satisfies Config;
