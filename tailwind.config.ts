import type { Config } from 'tailwindcss'
// eslint-disable-next-line import/no-extraneous-dependencies
import pxToRem from 'tailwindcss-preset-px-to-rem'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  presets: [pxToRem as unknown as Partial<Config>],
}

export default config
