/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      boxShadow: {
        footer: "rgb(0 0 0 / 0.1) 0px -3px 3px;",
      },
      colors: {
        primary: "#000000cc",
      },
    },
  },
  plugins: [],
};
