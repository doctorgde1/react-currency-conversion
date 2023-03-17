/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [],
};
