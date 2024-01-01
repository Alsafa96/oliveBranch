/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xxxs':'280px',
      'xss':'420px',
      'xs':'500px',
      'xsm':'600px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px'
    }
  },
  plugins: [],
}

