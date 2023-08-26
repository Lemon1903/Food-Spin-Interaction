/** @type {import("tailwindcss").Config} */
export default {
  content: ["index.html", "src/**/*{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "6.25rem",
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    fontSize: {
      /* fontSize: 44px, lineHeight: 66px */
      price: ["2.75rem", { lineHeight: "4.125rem", fontWeight: 600 }],
      /* fontSize: 36px, lineHeight: 50px */
      h1: ["2.25rem", { lineHeight: "3.125rem", fontWeight: 500 }],
      /* fontSize: 14px, lineHeight: 21px */
      link: ["0.875rem", { lineheight: "1.313rem", fontWeight: 500 }],
      /* fontSize: 13px, lineHeight: 19.5px */
      base: ["0.813rem", { lineheight: "1.25rem" }],
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      primary: withOpacity("--primary"),
      secondary: withOpacity("--secondary"),
      foreground: withOpacity("--foreground"),
      muted: withOpacity("--muted"),
      black: withOpacity("--black"),
      white: withOpacity("--white"),
      theme: withOpacity("--theme"),
    },
    extend: {},
  },
  plugins: [],
};

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsl(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}
