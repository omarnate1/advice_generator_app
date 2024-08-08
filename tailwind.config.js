/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "#cee3e9",
        "neon-green": "#52ffa8",
        "grayish-blue": "#4e5d73",
        "dark-grayish-blue": "#323a49",
        "dark-blue": "#1f2632",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        800: 800,
      },
      boxShadow: {
        "neon-green": "0 0 20px 5px rgba(82, 255, 168, 0.8)", // Adjust as needed for glow effect
      },
    },
  },
  plugins: [],
};
