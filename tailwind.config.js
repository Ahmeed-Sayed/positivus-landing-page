/** @type {import('tailwindcss').Config} */
export default  {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-black':'#191A23',
        'custom-green':'#B9FF66',
      },
      fontFamily:{
        positivus:['Space Grotesk']
      }
    },
  },  
  variants: {
    extend: {},
  },
  plugins: [],
};

