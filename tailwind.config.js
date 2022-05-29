module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
