/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        }
      },
      animation: {
        'bounce-slow': 'bounce-slow 4s infinite;'
      }
    },
  },
  plugins: [],
};


// @keyframes bounce {
//   0%, 100% {
//     transform: translateY(-25%);
//     animation-timing-function: cubic-bezier(0.8,0,1,1);
//   }
//   50% {
//     transform: none;
//     animation-timing-function: cubic-bezier(0,0,0.2,1);
//   }
// }
// .animate-bounce {
//   animation: bounce 1s infinite;
// }