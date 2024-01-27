/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1a1a1a",
        accent: "#292929",
        para: "#d6d6d6",
        heading: "#fcfcfd",
        card: "#fcfcfd",
      },
    },
  },
  plugins: [],
};
