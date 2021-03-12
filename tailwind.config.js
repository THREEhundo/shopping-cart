module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      lg: "0.5rem",
      xl: "2.75rem",
    },
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
