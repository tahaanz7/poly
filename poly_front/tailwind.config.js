/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00adc6",
        secondary: "#ed931b",
        text: "#000d0e",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00adc6",
          secondary: "#ed931b",
          neutral: "#000d0e",
        },
      },
      "dark",
    ],
    darkTheme: "light",
  },
};
