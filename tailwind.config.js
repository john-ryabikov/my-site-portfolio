/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
    fontFamily: {
      primary: "var(--font-jost)",
      title: "var(--font-fira)"
    },
    backgroundImage: {
      button: 'linear-gradient(141deg, #73A2FF 0%, rgba(5, 0, 255, 0.46) 104.15%)',
      step: 'linear-gradient(141deg, #73A2FF 0%, #0500FF 104.15%)'
    },
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    }
  },
  plugins: [],
};
