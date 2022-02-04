// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F2",
        red: "#C21F06",
      },
      fontFamily: {
        sans: ["Inconsolata", "sans-serif"],
        mono: ["Inconsolata", "monospace"],
        serif: ["panama", "serif"],
      },
      fontSize: {},
    },
    variants: {},
    plugins: [],
  },
}
