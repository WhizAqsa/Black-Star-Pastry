/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".custom-rows": {
      gridTemplateRows: "139px 139px 139px",
    },
    ".li-style": {
      overflow: "hidden",
      position: "absolute",
      top: "0px",
      right: "0px",
      width: "50%",
      height: "50%",
      transformOrigin: "0% 100%",
    },
    ".text-style": {
      position: "absolute",
      textAlign: "center",
      paddingTop: "20px",
      display: "block",
      transform: "skewY(60deg) rotate(15deg)",
      fontWeight: "bold",
      fontSize: "16px",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [Myclass],
};
