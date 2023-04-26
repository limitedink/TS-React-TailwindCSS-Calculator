// tailwind.config.js

module.exports = {
  mode: "aot",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        primary: "#0066cc",
        secondary: "#006699",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
