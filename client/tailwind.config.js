/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["poppins", ...defaultTheme.fontFamily.sans],
        body: ["roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "	#FFFFFF",
        highlight: "#F0F0FF",
        second: "#42A5C4",
        button: "#E8505C",
        primary: "#3E89CB",
      },
    },
  },
  plugins: [],
};
