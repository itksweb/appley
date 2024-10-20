/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
        1: "1",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(45deg, #08001f, #30197d)",
      },
      boxShadow: {
        bxs: "0 15px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
