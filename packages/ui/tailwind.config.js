/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // shadcn/ui tokens
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
                // brutalism palette stays for backward compatibility
                brutalism: {
                    bg: '#FFFFFF',
                    text: '#000000',
                    primary: '#FF6B6B',
                    secondary: '#4ECDC4',
                    accent: '#FFE66D',
                    success: '#7FB069',
                    warning: '#F9A825',
                    danger: '#EF476F',
                },
            },
            fontFamily: {
                brutal: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                // shadcn-style subtle shadows
                xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                // brutalism shadows keep working
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
    plugins: [require('./src/lib/brutalism-plugin')],
};
