module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "var(--color-darkGreen)",
        lightGreen: "var(--color-lightGreen)",
        lightGreen2: "var(--color-lightGreen2)",
        gradientGreen1: "var(--color-gradientGreen1)",
        gradientGreen2: "var(--color-gradientGreen2)",

        secondaryBlack: "var(--color-secondaryBlack)",
        lightGray: "var(--color-lightGray)",
        borderGray: "var(--color-borderGray)",
        borderGray2: "var(--color-borderGray2)",
        textGray: "var(--color-textGray)",
        greyBg: "var(--color-greyBg)",
      },
    },
  },
  plugins: [],
};