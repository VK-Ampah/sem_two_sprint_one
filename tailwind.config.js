/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'lady-luck': "url('https://unsplash.com/photos/a-woman-standing-in-front-of-a-green-fence-B6i1CuMOEVc')",
        'img-two': "https://unsplash.com/photos/a-model-sailboat-sitting-on-top-of-a-wooden-table-84flwAVOJrA"
      }
    },
  },
  plugins: [],
}

