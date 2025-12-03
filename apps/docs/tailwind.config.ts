import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
        './node_modules/brutalist-ui/**/*.{js,mjs}',
    ],
    theme: {
        extend: {
            // shadcn-style tokens so package components render correctly
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                brutalism: {
                    bg: '#FFFFFF',
                    text: '#000000',
                    primary: '#FF6B6B',
                    secondary: '#4ECDC4',
                    accent: '#FFE66D',
                    success: '#7FB069',
                    warning: '#F9A825',
                    danger: '#EF476F',
                    info: '#4A90D9',
                },
            },
            fontFamily: {
                brutal: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                brutal: '4px 4px 0px 0px #000000',
                'brutal-sm': '2px 2px 0px 0px #000000',
                'brutal-lg': '6px 6px 0px 0px #000000',
                'brutal-xl': '8px 8px 0px 0px #000000',
                'brutal-dark': '4px 4px 0px 0px #FFFFFF',
                'brutal-dark-sm': '2px 2px 0px 0px #FFFFFF',
                'brutal-dark-lg': '6px 6px 0px 0px #FFFFFF',
            },
            borderWidth: {
                3: '3px',
            },
        },
    },
    plugins: [require('../../packages/ui/src/lib/brutalism-plugin')],
};

export default config;
