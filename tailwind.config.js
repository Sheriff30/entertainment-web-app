/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        white: "#FFFFFF",
        dark: "#10141E",
        grey: "#5A698F",
        semidark: "#161D2F",
      },
    },
  },
  plugins: [],
};
