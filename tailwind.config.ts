import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(rgba(173, 173, 173, 1) 0.8px, transparent 0.8px), radial-gradient(rgba(173, 173, 173, 1) 0.8px, rgba(230, 230, 247, 0) 0.8px)'

      },
      backgroundSize: {
        'gradien-size': '12px 12px'
      },
      backgroundOpacity: {
        'gradien-opacity': '0.2'
      }
    }
  },
  plugins: [require('daisyui')]
};
export default config;
