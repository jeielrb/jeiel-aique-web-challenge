import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: '#2D68F8',
        black: '#000000',
        white: '#FFFFFF',
        shadow: '#A6AFC366',
        title: '#111928',
        description: '#637381',
      },
      screens: {
        xxl: '1780px', // Custom large breakpoint for >1780px
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Add scrollbar-hide plugin
  ],
} satisfies Config;
