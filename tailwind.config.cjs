/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm": "480px",
      "normal": "625px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
      },
    },
  },
  plugins: [],
};
