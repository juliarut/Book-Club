/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF3E0",
        card: "#A7D7C5",
        text: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A7D7C5",
          secondary: "#FAF3E0",
          accent: "#F4C430",
          neutral: "#1A1A1A",
          "base-100": "#FAF3E0",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
