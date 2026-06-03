/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brutal: {
                    bg: 'var(--brutal-bg)',
                    fg: 'var(--brutal-fg)',
                    primary: 'var(--brutal-primary)',
                    secondary: 'var(--brutal-secondary)',
                    accent: 'var(--brutal-accent)',
                    destructive: 'var(--brutal-destructive)',
                    success: 'var(--brutal-success)',
                    muted: 'var(--brutal-muted)',
                    'muted-foreground': 'var(--brutal-muted-foreground)',
                    ring: 'var(--brutal-ring)',
                    info: 'var(--brutal-info)',
                    overlay: 'var(--brutal-overlay)',
                    placeholder: 'var(--brutal-placeholder)',
                },
            },
            boxShadow: {
                brutal: 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-shadow-color, #000000)',
                'brutal-sm': 'calc(var(--brutal-shadow-offset-x, 4px) / 2) calc(var(--brutal-shadow-offset-y, 4px) / 2) 0px 0px var(--brutal-shadow-color, #000000)',
                'brutal-lg': 'calc(var(--brutal-shadow-offset-x, 4px) * 1.5) calc(var(--brutal-shadow-offset-y, 4px) * 1.5) 0px 0px var(--brutal-shadow-color, #000000)',
                'brutal-xl': 'calc(var(--brutal-shadow-offset-x, 4px) * 2) calc(var(--brutal-shadow-offset-y, 4px) * 2) 0px 0px var(--brutal-shadow-color, #000000)',
                'brutal-primary': 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-primary)',
                'brutal-secondary': 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-secondary)',
            },
            borderWidth: {
                3: '3px',
            },
            borderRadius: {
                brutal: 'var(--brutal-radius, 0px)',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('./src/lib/brutalism-plugin')],
}
