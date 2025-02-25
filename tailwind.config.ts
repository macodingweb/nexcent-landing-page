import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        silver: "#F5F7FA",
        primary: "#43A046",
      },
      borderColor: {
        primary: "#43A046",
      },
      textColor: {
        silver: "#F5F7FA",
        primary: "#43A046",
      },
    },
  },
  plugins: [],
} satisfies Config;
