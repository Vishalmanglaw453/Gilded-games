/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins, sans-serif",
        Josefin: "Josefin Sans, sans-serif",
        Montserrat: "Montserrat, sans-serif",
      },
      backgroundImage: {
        'hero_bg': 'url(../src/assets/images/png/hero_bg_img.png)',
         'frequently_bg': 'url(../src/assets/images/png/Footer_bg_img.png)',
         'uniswap_bg': 'url(../src/assets/images/png/uniswap-bg.png)',
         'platform_bg' : 'url(../src/assets/images/png/gildedworld_environment_bg.png)',
        'gild_bg' : 'url(./assets/images/png/gild_bg_img.png)',
        'utitly_bg' : 'url(../src/assets/images/png/utitelty_bg.png)'             
      },
      backdropBlur: {
        xs: '10px',
      }

    },
  },
  plugins: [],
};
