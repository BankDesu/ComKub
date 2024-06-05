const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveBackgroundLeft: {
          '0%': { transform: 'translateX(100%)', zIndex: 5 },
          '85%': { zIndex: 5 },
          '100%': { transform: 'translateX(0%)', zIndex: 1 },
        },
        moveBackgroundRight: {
          '0%': { transform: 'translateX(-80%)', zIndex: 5 },
          '85%': { zIndex: 5 },
          '100%': { transform: 'translateX(0%)', zIndex: 1 },
        },
      },
      animation: {
        moveBackgroundLeft: 'moveBackgroundLeft 0.5s ease-in-out forwards',
        moveBackgroundRight: 'moveBackgroundRight 0.5s ease-in-out forwards',
      },
      // Optionally, you can extend or customize other theme properties here
    },
  },
  plugins: [
    // Include any Tailwind plugins you need here
  ],
};
