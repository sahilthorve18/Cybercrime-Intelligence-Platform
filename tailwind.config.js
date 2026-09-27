/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
  safelist: [
    // Safelist dynamic color classes used in the app
    'bg-cyan-500/10',
    'bg-red-500/10',
    'bg-green-500/10',
    'bg-yellow-500/10',
    'bg-blue-500/10',
    'bg-purple-500/10',
    'text-cyan-400',
    'text-red-400',
    'text-green-400',
    'text-yellow-400',
    'text-blue-400',
    'text-purple-400',
    'border-cyan-500',
    'border-red-500',
    'border-green-500',
    'border-yellow-500',
    'border-blue-500',
    'border-purple-500',
  ],
}
