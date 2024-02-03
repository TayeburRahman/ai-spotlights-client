/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyprus: "#101D40",
        cyan: "#24cbc7",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
