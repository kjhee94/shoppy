/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg : '#0F0F0F',
        text : '#f1f1f1',
        ugray : '#272727',
        border : '#363636',
        brand : '#F96162',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`
      }
    },
  },
  plugins: [],
}
