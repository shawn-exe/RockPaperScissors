/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        whitesmoke: "#f5f5f5",
        steelblue: "#2f6394",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        coiny: "Coiny",
        chivo: "Chivo",
        goldman: "Goldman",
      },
    },
    fontSize: {
      "8xl": "27px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    width: ["responsive", "hover", "focus"]
}
};
