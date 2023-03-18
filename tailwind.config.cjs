/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-express": {
          100: "#E4F2FC",
          300: "#B6DCF6",
          500: "#12629B",
          700: "#00396C",
          900: "#001341",
        },
      },
      keyframes: {
        "spin-back": {
          "0%, 100%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
        },
      },
      animation: {
        "spin-back": "spin-back 1s linear infinite",
      },
      backgroundImage: {
        arrow_down: "url('/src/assets/arrow_down.svg')",
        grid: "url('/src/assets/grid.svg')",
      },
    },
  },
  plugins: [
    plugin(
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "animation-duration": (value) => ({
              animationDuration: value,
            }),
          },
          {
            values: theme("animationDuration"),
          }
        );
      },
      {
        theme: {
          animationDuration: {
            100: "100ms",
          },
        },
      }
    ),
  ],
};
