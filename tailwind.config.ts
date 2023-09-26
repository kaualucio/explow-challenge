import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1367px',
      },
      fontFamily: {
        source: ['var(--font-source)'],
        burbank: ['var(--font-burbank)'],
      },
      animation: {
        'hero_bg': 'hero_bg 15s ease infinite 2s',
        'hero_bg_videos': 'hero_bg_videos 15s ease infinite 2s',
        'hero_progress': 'progress 15s ease-in-out infinite 2s reverse'
      },
      keyframes: {
        "hero_bg": {
          '0%, 100%': { backgroundImage: 'url("/images/image4.png")' },
          '20%': { backgroundImage: 'url("/images/image2.png")' },
          '40%': { backgroundImage: 'url("/images/image5.png")' },
          '60%': { backgroundImage: 'url("/images/image23.png")' },
          '80%': { backgroundImage: 'url("/images/image24.png")' },
        },
        "hero_bg_videos": {
          '0%, 100%': { backgroundImage: 'url("/images/Rectangle13.png")' },
          '20%': { backgroundImage: 'url("/images/Rectangle14.png")' },
          '40%': { backgroundImage: 'url("/images/Rectangle15.png")' },
          '60%': { backgroundImage: 'url("/images/Rectangle16.png")' },
          '80%': { backgroundImage: 'url("/images/Rectangle17.png")' },
        },
        "progress": {
          '0%, 100%': { width: '100%' },
          '20%': { transform: 'translateX(-20vw)' },
          '40%': { transform: 'translateX(-40vw)' },
          '60%': { transform: 'translateX(-60vw)' },
          '80%': { transform: 'translateX(-80vw)' },
        },
      }
    },
  },
  plugins: [],
}
export default config
