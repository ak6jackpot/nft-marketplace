module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        dashboard: "#0a4e60",
      },
      boxShadow: {
        xs: "0px 50px  50px 0px #0000000c",
        sm: "0px 30px  50px 0px #f567677c",
        md: "0px 30px  50px 0px #38b5c687",
        lg: "0px 30px  50px 0px #a5a82087",
        xl: "0px 30px  90px 0px #00000019",
        "2xl": "0px 40px  200px 0px #00000014",
        "3xl": "10px 20px  50px 0px #27a95363",
      },
      fontFamily: {
        sourcesanspro: "Source Sans Pro",
        nunito: "Nunito",
        plusJakartaSans: "PlusJakartaSans",
        rubik: "Rubik",
        urbanistThin: "UrbanistThin",
        urbanistNormal: "UrbanistNormal",
        urbanistBold: "UrbanistBold",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ffb039,#ffb03900)",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
        9: "9 9 0%",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shine: "shine 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
