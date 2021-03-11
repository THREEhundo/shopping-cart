module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#ffc6c5",
      secondary: "#ffffff",
    }),
    textColor: {
      primary: "#ffc6c5",
      secondary: "#ffffff",
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./imgs/jordan1.jpeg')",
      }),
    },
  },
  variants: {
    extend: {
      ringColor: ["hover", "active"],
    },
  },
  plugins: [],
};
