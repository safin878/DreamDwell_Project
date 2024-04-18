/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        pcolor: "#525CEB",
        scolor: "#BFCFE7",
        tcolor: "#F8EDFF",
        lcolor: "#3D3B40",
      },
    },
  },
  plugins: [require("daisyui")],
};
