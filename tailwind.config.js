/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}" , "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
      screens:{
        '-xs':  {'max': '486px'},
        '-sm':  {'max': '640px'},
        '-md':  {'max': '768px'},
        '+md':  {'min': '860px'},
      },
      colors: {
        'primary':'#3ba3df',
        'secondary':'#e832b5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

