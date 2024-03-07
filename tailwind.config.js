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
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ffb039,#ffb03900)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
