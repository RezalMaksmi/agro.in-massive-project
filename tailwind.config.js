/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-logo": "url('./src/assets/bg-logo.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        primary: "#1A3D37",
        secondary: "#FAB737",
        netral: "#000000",
        netral_10: "#F6F6F6",
        netral_20: "#EDEEF2",
        dark_10: "#BEBCBD",
        dark_20: "#807D7E",
        dark_30: "#3C4242",
        darkGray_20: "#BAC5C3",
        darkGray_10: "#E8ECEB",
      },
    },
  },
  plugins: [],
};
