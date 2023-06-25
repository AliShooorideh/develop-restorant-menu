/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      xlCube: {
        "0%": { transform: "rotate(90deg)" },
        "100%": { transform: "rotate(270deg)" },
      },
      mdCube: {
        "0%": { transform: "rotate(40deg)" },
        "100%": { transform: "rotate(220deg)" },
      },
      smCube: {
        "0%": { transform: "rotate(20deg)" },
        "100%": { transform: "rotate(200deg)" },
      },
    },
  },
  plugins: [],
};
