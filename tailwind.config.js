// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spice:"#945F4D",
        rust:"#9F5043",
        khaki: "#c5a188",
        darkgreen: "#6D7661",
        black: "#2C2726",
        blacker: "#000",
        red: "#bc3601",
        beige: "#E0D1BF",
        cream: "#ECE6D7",
      },
      fontFamily: {
        sans: ["Inconsolata", "sans-serif"],
        mono: ["Inconsolata", "monospace"],
        serif: ["panama", "serif"],
      },
      fontSize: {
        'bios-lg': ["2.25rem", "2.5rem"],
        // 'xs': '.75rem',
        // sm: ['40px', '20px'],
        // 'tiny': '.875rem',
        basesm: "0.95rem",
        base: ["1rem", "1.25rem"],
        lg: ["1.125rem", "1.5rem"],
        // xl: ["40px", "20px"],
        // '2xl': '1.5rem',
        '2xl-lg': ["1.75rem", "1.131rem"],
        // '3xl': '1.875rem',
        '4xl': ["2.5rem", "1.25rem"],
        '5xl': ["3rem", "3rem"],
        '6xl': ["3.75rem", "3.75rem"],
        '7xl': ["4.5rem", "4.5rem"], 
        '40block': ["40px", {
          lineHeight: '54px',
          letterSpacing: '-1.2px',
          fontWeight: '400',
        }]
      },
      backgroundImage: {
        hero: "url('../images/las-logo-2023.png')",
        values: "url('../images/values.jpg')",
        hands: "url('../images/hands.jpg')",
        cta3: "url('../images/cta3.jpg')",
        tree: "url('../images/background-2.jpg')",
      },
      lineHeight: {
        tighter: "1.1",
        tightest: "0.95",
        'extra-loose': "4.625rem"
      },
      height: {
        70: "70vh",
        80: "80vh",
        90: "90vh",
      },
      borderRadius: {
        '4xl': "30px"
      },
      letterSpacing: {
        tightest: '-1.5px'
      }
    },
    variants: {},
    plugins: [],
  },
}
