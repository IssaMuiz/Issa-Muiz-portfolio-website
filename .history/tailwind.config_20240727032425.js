/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 8px rgba(256, 92, 6, 0.5)",
      },
    },
  },
  plugins: [],
};
