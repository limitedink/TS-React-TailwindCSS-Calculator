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
        blue: {
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          light: "#7EB5F9", // define a lighter shade of blue
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
