// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // cream: "#FBF8F2",
        cream: "#FBF8F2",
        red: "#C21F06",
        black: "#121814",
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
        banner: "url('../images/logo-transparent.png')",
      },
    },
    variants: {},
    plugins: [],
  },
}
