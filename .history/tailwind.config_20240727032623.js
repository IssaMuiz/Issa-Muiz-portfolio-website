/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 25px rgba(256, 92, 6, 0.5)",
      },
    },
  },
  plugins: [],
};
