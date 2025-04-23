/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebf8ff",
          100: "#bee3f8",
          400: '#63b3ed',
          500: "#2b6cb0",
          600: "#2c5282",
          700: "#2a4365",
        },
        secondary: {
          50: "#f8f9fa",
          100: "#eae2d6",
          500: "#4f4f4f",
          600: "#2d3748",
          700: "#1a202c",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
