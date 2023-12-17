/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#46529c",
        grad1: "#621cb5",
        grad2: "#3877fb",
      },
    },
  },
  plugins: [],
};
