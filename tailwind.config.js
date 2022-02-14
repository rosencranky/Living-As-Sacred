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
      fontSize: {
        "45xl": "2.75rem",

        // 'xs': '.75rem',
        // 'sm': '.875rem',
        // 'tiny': '.875rem',
        // 'base': '1rem',
        // 'lg': '1.125rem',
        // 'xl': '1.25rem',
        // '2xl': '1.5rem',
        // '3xl': '1.875rem',
        // '4xl': '2.25rem',
        // '5xl': '3rem',
        // '6xl': '4rem',
        // '7xl': '5rem',
      },
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
