const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveBackgroundLeft: {
          "0%": { transform: "translateX(100%)", zIndex: 5 },
          "85%": { zIndex: 5 },
          "100%": { transform: "translateX(0%)", zIndex: 1 },
        },
        moveBackgroundRight: {
          "0%": { transform: "translateX(-80%)", zIndex: 5 },
          "85%": { zIndex: 5 },
          "100%": { transform: "translateX(0%)", zIndex: 1 },
        },
        autoplay1: {
          "0%": { left: "-100%" },
          "4%": { left: "22%" },
          "33.33%": { left: "22%" },
          "37.33%": { left: "100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        moveBackgroundLeft: "moveBackgroundLeft 0.5s ease-in-out forwards",
        moveBackgroundRight: "moveBackgroundRight 0.5s ease-in-out forwards",
        autoplay1: "autoplay1 15s infinite ease-in-out",
      },
    },
  },
  plugins: [
  ],
};
