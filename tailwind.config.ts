
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#291FB3',
        'secondary-color': '#3D6BDC',
        'tertiary-color': '#ebf4fe',
        primary:{
          800:'#3D6BDC',
          900:'#291FB3',
        },
        text: {
          primary: '#50564F',
          secondary: '#6B6F68',
        },
        paper: {
          default: '#F6F7F9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});