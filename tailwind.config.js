/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index-react.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06070A",
        surface: "#0B0D13",
        border: "rgba(255, 255, 255, 0.1)",
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Bricolage Grotesque", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
