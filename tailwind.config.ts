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
        'custom-pink': '#f7a7bb'
      },
      fontFamily: {
        noto: ['Noto Sans KR', 'sans-serif'],
        anton: ['Anton']
      }
    },
  },
  plugins: [],
} satisfies Config;