// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F2",
        beige: "#EBE4CB",
        red: "#C21F06",
        // darkred: "#9e1905",
        black: "140301",
        darkgreen: "#313f27",

        black: "#121814",
        lightbeige: "#F5EDE0",
        green: "#485d3a",
      },
      fontFamily: {
        sans: ["Inconsolata", "sans-serif"],
        mono: ["Inconsolata", "monospace"],
        serif: ["panama", "serif"],
      },
      fontSize: {
        // "45xl": ["2.75rem", "2.5rem"],
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
        hero: "url('../images/jornada-4.jpeg')",
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
