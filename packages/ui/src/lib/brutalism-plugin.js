const plugin = require('tailwindcss/plugin');

const brutalismPlugin = plugin(
    function ({ addUtilities, addComponents, theme }) {
        const utilities = {
            '.nb-border': {
                borderWidth: 'var(--brutal-border-width, 3px)',
                borderStyle: 'solid',
                borderColor: 'var(--brutal-border-color, #000000)',
            },
            '.nb-border-2': {
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'var(--brutal-border-color, #000000)',
            },
            '.nb-border-4': {
                borderWidth: '4px',
                borderStyle: 'solid',
                borderColor: 'var(--brutal-border-color, #000000)',
            },
            '.nb-shadow': {
                boxShadow: 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-shadow-color, #000000)',
            },
            '.nb-shadow-sm': {
                boxShadow: 'calc(var(--brutal-shadow-offset-x, 4px) / 2) calc(var(--brutal-shadow-offset-y, 4px) / 2) 0px 0px var(--brutal-shadow-color, #000000)',
            },
            '.nb-shadow-lg': {
                boxShadow: 'calc(var(--brutal-shadow-offset-x, 4px) * 1.5) calc(var(--brutal-shadow-offset-y, 4px) * 1.5) 0px 0px var(--brutal-shadow-color, #000000)',
            },
            '.nb-shadow-xl': {
                boxShadow: 'calc(var(--brutal-shadow-offset-x, 4px) * 2) calc(var(--brutal-shadow-offset-y, 4px) * 2) 0px 0px var(--brutal-shadow-color, #000000)',
            },
            '.nb-press': {
                transform: 'translateY(var(--brutal-pressed-offset, 2px))',
                boxShadow: 'none',
            },
            '.nb-press-sm': {
                transform: 'translateY(calc(var(--brutal-pressed-offset, 2px) / 2))',
                boxShadow: 'none',
            },
            '.nb-press-lg': {
                transform: 'translateY(calc(var(--brutal-pressed-offset, 2px) * 1.5))',
                boxShadow: 'none',
            },
            '.nb-font': {
                fontWeight: '900',
                letterSpacing: '0.025em',
            },
            '.nb-font-bold': {
                fontWeight: '800',
                letterSpacing: '0.02em',
            },
            '.nb-font-medium': {
                fontWeight: '700',
                letterSpacing: '0.015em',
            },
            '.nb-no-radius': {
                borderRadius: 'var(--brutal-radius, 0px)',
            },
            '.nb-transition': {
                transitionProperty: 'transform, box-shadow',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '150ms',
            },
        };

        const interactiveUtilities = {
            '.nb-hover': {
                '&:hover': {
                    transform: 'translate(calc(var(--brutal-shadow-offset-x, 4px) / -2), calc(var(--brutal-shadow-offset-y, 4px) / -2))',
                    boxShadow: 'calc(var(--brutal-shadow-offset-x, 4px) * 1.5) calc(var(--brutal-shadow-offset-y, 4px) * 1.5) 0px 0px var(--brutal-shadow-color, #000000)',
                },
            },
            '.nb-active': {
                '&:active': {
                    transform: 'translateY(var(--brutal-pressed-offset, 2px))',
                    boxShadow: 'none',
                },
            },
            '.nb-focus': {
                '&:focus': {
                    outline: '3px solid var(--brutal-ring, #000000)',
                    outlineOffset: '2px',
                },
                '&:focus-visible': {
                    outline: '3px solid var(--brutal-ring, #000000)',
                    outlineOffset: '2px',
                },
            },
            '.nb-disabled': {
                '&:disabled': {
                    opacity: '0.5',
                    cursor: 'not-allowed',
                    pointerEvents: 'none',
                },
            },
        };

        const components = {
            '.nb-btn': {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 'var(--brutal-border-width, 3px)',
                borderStyle: 'solid',
                borderColor: 'var(--brutal-border-color, #000000)',
                backgroundColor: 'var(--brutal-bg, #ffffff)',
                boxShadow: 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-shadow-color, #000000)',
                fontWeight: '900',
                letterSpacing: '0.025em',
                borderRadius: 'var(--brutal-radius, 0px)',
                transitionProperty: 'transform, box-shadow',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '150ms',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translate(calc(var(--brutal-shadow-offset-x, 4px) / -2), calc(var(--brutal-shadow-offset-y, 4px) / -2))',
                    boxShadow: 'calc(var(--brutal-shadow-offset-x, 4px) * 1.5) calc(var(--brutal-shadow-offset-y, 4px) * 1.5) 0px 0px var(--brutal-shadow-color, #000000)',
                },
                '&:active': {
                    transform: 'translateY(var(--brutal-pressed-offset, 2px))',
                    boxShadow: 'none',
                },
                '&:disabled': {
                    opacity: '0.5',
                    cursor: 'not-allowed',
                    pointerEvents: 'none',
                },
            },
            '.nb-card': {
                borderWidth: 'var(--brutal-border-width, 3px)',
                borderStyle: 'solid',
                borderColor: 'var(--brutal-border-color, #000000)',
                backgroundColor: 'var(--brutal-bg, #ffffff)',
                boxShadow: 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-shadow-color, #000000)',
                borderRadius: 'var(--brutal-radius, 0px)',
                padding: '1rem',
            },
            '.nb-input': {
                borderWidth: 'var(--brutal-border-width, 3px)',
                borderStyle: 'solid',
                borderColor: 'var(--brutal-border-color, #000000)',
                backgroundColor: 'var(--brutal-bg, #ffffff)',
                borderRadius: 'var(--brutal-radius, 0px)',
                fontWeight: '500',
                '&:focus': {
                    outline: '2px solid var(--brutal-ring, #000000)',
                    outlineOffset: '2px',
                    boxShadow: 'var(--brutal-shadow-offset-x, 4px) var(--brutal-shadow-offset-y, 4px) 0px 0px var(--brutal-shadow-color, #000000)',
                },
                '&::placeholder': {
                    color: 'var(--brutal-placeholder, #9CA3AF)',
                    fontWeight: '400',
                },
            },
        };

        addUtilities(utilities);
        addUtilities(interactiveUtilities);
        addComponents(components);
    },
    {
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
                },
                borderWidth: {
                    3: '3px',
                },
                borderRadius: {
                    brutal: 'var(--brutal-radius, 0px)',
                },
                borderColor: {
                    brutal: 'var(--brutal-border-color, #000000)',
                },
            },
        },
    }
);

module.exports = brutalismPlugin;
