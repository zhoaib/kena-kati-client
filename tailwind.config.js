const { secondary } = require('daisyui/src/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       kenakatitheme: {
  //         primary: '#FFBF00',
  //         secondary: '#FFE5B4',
  //         accent: '#CC7722',
  //         neutral: '#3D4451',
  //         "base-100": '#FFFFFF'

  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
