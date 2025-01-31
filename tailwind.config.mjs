/** @type {import('tailwindcss').Config} */

  const tailwindCongig = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: {
            50: "#eaeff4",
            100: "#d4e0e9",
            200: "#7ea1bd",
            300: "#5381a7",
            400: "#3e729c",
            500: "#286291",
            600: "#204e74",
            700: "#183b57",
            800: "#0c1d2b",
            900: "#08141d",
          },
        },
      },
    },
    plugins: [],
  }
  export default tailwindCongig;