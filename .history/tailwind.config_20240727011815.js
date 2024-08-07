/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 6px -1px rgba(256 92 6 0.5)",
      },
    },
  },
  plugins: [],
};
