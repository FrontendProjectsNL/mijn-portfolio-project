// tailwind.config.js
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slide: 'slide 0.5s ease-in-out',
      },
      transitionDuration: {
        '300ms': '300ms',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        firaCode: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  variants: {
    extend: {
      translate: ['group-aria-expanded'],
      rotate: ['group-aria-expanded'],
      scale: ['group-aria-expanded'],
      width: ['group-aria-expanded'],
    },
  },
};
