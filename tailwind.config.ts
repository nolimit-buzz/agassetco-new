import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1100px',
        '2xl': '1180px',
        '3xl': '1240px',
        '4xl': '1300px',
        '5xl': '1360px',
        '6xl': '1400px',
        '7xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '14px' }],
        'sm': ['14px', { lineHeight: '18px' }],
        'base': ['12px', { lineHeight: '16px' }],
        'lg': ['16px', { lineHeight: '24px' }],
        'xl': ['16px', { lineHeight: '24px' }],
        '2xl': ['18px', { lineHeight: '28px' }],
        '3xl': ['20px', { lineHeight: '32px' }],
        '4xl': ['24px', { lineHeight: '36px' }],
      },
      colors: {
        'ag-green': {
          950: '#051b11',
          900: '#0a2e20',
          800: '#0F5132',
          700: '#166e45',
          100: '#d1fae5',
        },
        'ag-lime': {
          DEFAULT: '#78BC42',
          hover: '#65a336',
          light: '#bef264',
        },
      },
    },
  },
  plugins: [],
};

export default config;
