import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
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
                brutal: '4px 4px 0px 0px #000000',
                'brutal-sm': '2px 2px 0px 0px #000000',
                'brutal-lg': '6px 6px 0px 0px #000000',
                'brutal-xl': '8px 8px 0px 0px #000000',
            },
            borderWidth: {
                3: '3px',
            },
        },
    },
    plugins: [require('../../packages/ui/src/lib/brutalism-plugin')],
};

export default config;
