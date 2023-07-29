const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        'small': { 'raw' : '(max-width: 560px)'}
      }
      ,
      colors:{
        greens: {
          primary: '#013328',
          secondary: '#4CAF50'
        },
        yellowish: '#E3DCD2',
      },

      typography: {
        DEFAULT: {
          css: {
            p: {
              fontSize: '18px',
            },
        }, // disable the default styles provided by tailwind's built in `prose`
      }
    },
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        h4: { fontSize: theme("fontSize.md") },
        h5: { fontSize: theme("fontSize.sm") },
      });
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".card": {
          backgroundColor: "#fff",
          borderRadius: ".25rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          "&:hover": { boxShadow: "0 10px 15px rgba(0,0,0,0.2)" },
          "@media (min-width: 500px)": { borderRadius: ".5rem" },
        },
      },);
    }),
  ],
};
