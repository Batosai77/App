/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3F6B88",
          "secondary": "#153F55",
          "accent": "#1e90ff",
          "neutral": "#191418",
          "base-100": "#D7E7F7",
          "info": "#00e7ff",
          "success": "#00c86c",
          "warning": "#ffc800",
          "error": "#ff0040",
          "white": "#D7E7F7"
        },
      }, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
