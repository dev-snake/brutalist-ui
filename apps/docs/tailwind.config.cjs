/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './*.md',
        './guide/*.md',
        './components/*.md',
        './blocks/*.md',
        './.vitepress/**/*.{ts,vue}',
        '../../packages/ui/src/**/*.{js,ts,vue}',
    ],
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
            fontFamily: {
                brutal: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                brutal: 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-shadow-color, #000000)',
                'brutal-sm': 'calc(var(--brutal-shadow-offset-x, 4px) / 2) calc(var(--brutal-shadow-offset-y, 4px) / 2) 0px 0px var(--brutal-shadow-color, #000000)',
                'brutal-lg': 'calc(var(--brutal-shadow-offset-x, 4px) * 1.5) calc(var(--brutal-shadow-offset-y, 4px) * 1.5) 0px 0px var(--brutal-shadow-color, #000000)',
                'brutal-xl': 'calc(var(--brutal-shadow-offset-x, 4px) * 2) calc(var(--brutal-shadow-offset-y, 4px) * 2) 0px 0px var(--brutal-shadow-color, #000000)',
            },
            borderWidth: {
                3: '3px',
            },
        },
    },
    plugins: [
        require('../../packages/ui/src/lib/brutalism-plugin'),
        require('tailwindcss-animate'),
    ],
}
