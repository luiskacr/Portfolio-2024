/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        border: 'background ease infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
    colors:{
      'yonder-blue': {
        '50': '#f0f9ff',
        '100': '#e0f2fe',
        '200': '#bae6fd',
        '300': '#7dd4fc',
        '400': '#38bef8',
        '500': '#0ea6e9',
        '600': '#0285c7',
        '700': '#036aa1',
        '800': '#075a85',
        '900': '#0c4b6e',
        '950': '#082f49',
    },
    
    }   
    
  },
  plugins: [
    animations,
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
}

