/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        dancing:['var(--font-dancing-script)']
      },
      animation: {
        'textColor': 'text 5s ease infinite',
      },
      backgroundImage: {
        'dark' : 'url(/dark.png)',
        'light' : 'url(/background.png)',
        'dec-bunga' : 'url(/decBunga.png)',
        'bg-mesh' : 'url(/bgMesh.png)'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
    plugins: [],
  }