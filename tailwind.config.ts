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
        'custom-pink': '#f7a7bb',
        'custom-dark-pink': '#ff69b4',
        'custom-white': '#f0f0f0',
      },
      fontFamily: {
        noto: ['Noto Sans KR', 'sans-serif'],
        anton: ['Anton']
      }
    },
  },
  plugins: [],
} satisfies Config;