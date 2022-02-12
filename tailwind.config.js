// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // cream: "#FBF8F2",
        // cream: "#FBF8F2",
        cream: "#F7F1E7",
        red: "#C21F06",
        black: "#121814",
        beige: "#F7F1E7",
        green: "#747C4F",
        // red: "#f74c25",
      },
      fontFamily: {
        sans: ["Inconsolata", "sans-serif"],
        mono: ["Inconsolata", "monospace"],
        serif: ["panama", "serif"],
      },
      fontSize: {},
      backgroundImage: {
        hero: "url('../images/logo-transparent.png')",
        banner: "url('../images/12A.jpg')",
      },
    },
    variants: {},
    plugins: [],
  },
}
