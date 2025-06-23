/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#302C42",
        primary: "#343045",
        secondary: "#C0B7E8",
      },
    },
  },
  plugins: [],
};
