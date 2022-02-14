// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // cream: "#FBF8F2",
        cream: "#FBF8F2",
        // cream: "#fff",
        // beige: "#fbe7bf", // yellowy
        beige: "#EBE4CB",
        lightred: "#dee1d0",
        red: "#C21F06",
        darkred: "#9e1905",
        darkgreen: "#313f27",
        // red: "#b70612",
        black: "#121814",
        darkbeige: "#F5EDE0",
        green: "#485d3a",
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
        banner: "url('../images/07A.jpg')",
        wood: "url('../images/woodcut.jpeg')",
        texture: "url('../images/text.jpeg')",
      },
      lineHeight: {
        tighter: "1.05",
        tightest: "0.95",
      },
    },
    variants: {},
    plugins: [],
  },
}
