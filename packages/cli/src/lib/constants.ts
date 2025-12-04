/**
 * Constants and configuration data
 * All hardcoded values should be centralized here
 */

import type { ProjectType, ComponentInfo } from './types.js';

// ============================================================================
// File Patterns - No hardcoding in other files
// ============================================================================

export const CONFIG_FILES = {
    next: ['next.config.js', 'next.config.mjs', 'next.config.ts'],
    vite: ['vite.config.js', 'vite.config.ts', 'vite.config.mjs'],
    remix: ['remix.config.js'],
    tailwind: ['tailwind.config.ts', 'tailwind.config.js', 'tailwind.config.mjs', 'tailwind.config.cjs'],
    tsconfig: ['tsconfig.json', 'jsconfig.json'],
    lockfiles: {
        pnpm: 'pnpm-lock.yaml',
        yarn: 'yarn.lock',
        bun: 'bun.lockb',
    },
} as const;

// ============================================================================
// CSS File Locations by Project Type
// ============================================================================

export const CSS_LOCATIONS: Record<ProjectType, readonly string[]> = {
    'nextjs': ['app/globals.css', 'styles/globals.css', 'app/global.css'],
    'nextjs-src': ['src/app/globals.css', 'src/styles/globals.css', 'src/app/global.css'],
    'vite': ['src/index.css', 'src/App.css', 'index.css'],
    'vite-src': ['src/index.css', 'src/App.css', 'src/styles/index.css'],
    'cra': ['src/index.css', 'src/App.css'],
    'remix': ['app/styles/global.css', 'app/root.css', 'app/tailwind.css'],
    'unknown': [
        'src/index.css',
        'src/app/globals.css',
        'app/globals.css',
        'src/styles/globals.css',
        'styles/globals.css',
        'index.css',
    ],
} as const;

// ============================================================================
// Component Registry
// ============================================================================

export const COMPONENTS: Record<string, ComponentInfo> = {
    'alert': { name: 'alert', dependencies: ['lucide-react'] },
    'avatar': { name: 'avatar', dependencies: ['@radix-ui/react-avatar'] },
    'badge': { name: 'badge', dependencies: [] },
    'button': { name: 'button', dependencies: ['@radix-ui/react-slot'] },
    'calendar': { name: 'calendar', dependencies: ['react-day-picker', 'date-fns', 'lucide-react'] },
    'card': { name: 'card', dependencies: [] },
    'checkbox': { name: 'checkbox', dependencies: ['@radix-ui/react-checkbox', 'lucide-react'] },
    'combobox': { name: 'combobox', dependencies: ['cmdk', '@radix-ui/react-popover', 'lucide-react'] },
    'command': { name: 'command', dependencies: ['cmdk', 'lucide-react'] },
    'dialog': { name: 'dialog', dependencies: ['@radix-ui/react-dialog', 'lucide-react'] },
    'dropdown-menu': { name: 'dropdown-menu', dependencies: ['@radix-ui/react-dropdown-menu', 'lucide-react'] },
    'input': { name: 'input', dependencies: [] },
    'label': { name: 'label', dependencies: ['@radix-ui/react-label'] },
    'pagination': { name: 'pagination', dependencies: ['lucide-react'] },
    'popover': { name: 'popover', dependencies: ['@radix-ui/react-popover'] },
    'scroll-area': { name: 'scroll-area', dependencies: ['@radix-ui/react-scroll-area'] },
    'select': { name: 'select', dependencies: ['@radix-ui/react-select', 'lucide-react'] },
    'separator': { name: 'separator', dependencies: ['@radix-ui/react-separator'] },
    'skeleton': { name: 'skeleton', dependencies: [] },
    'spinner': { name: 'spinner', dependencies: [] },
    'submit-button': { name: 'submit-button', dependencies: [] },
    'switch': { name: 'switch', dependencies: ['@radix-ui/react-switch'] },
    'table': { name: 'table', dependencies: [] },
    'tabs': { name: 'tabs', dependencies: ['@radix-ui/react-tabs'] },
    'textarea': { name: 'textarea', dependencies: [] },
    'toast': { name: 'toast', dependencies: ['lucide-react'] },
    'tooltip': { name: 'tooltip', dependencies: ['@radix-ui/react-tooltip'] },
} as const;

export const AVAILABLE_COMPONENTS = Object.keys(COMPONENTS);

// ============================================================================
// Base Dependencies (installed on init)
// ============================================================================

export const BASE_DEPENDENCIES = [
    'clsx',
    'tailwind-merge',
    'class-variance-authority',
    'lucide-react',
] as const;

// ============================================================================
// Default Configurations
// ============================================================================

export const DEFAULT_ALIASES = {
    components: '@/components',
    utils: '@/lib/utils',
} as const;

export const DEFAULT_TAILWIND_CONFIG = 'tailwind.config.js';

export const SCHEMA_URL = 'https://brutalistui.site/schema.json';

// ============================================================================
// Brutalist CSS Styles
// ============================================================================

export const BRUTALIST_CSS_STYLES = `
/* Brutalist UI Styles */
.border-3 {
    border-width: 3px;
}

.shadow-brutal {
    box-shadow: 4px 4px 0px 0px #000;
}

.shadow-brutal-sm {
    box-shadow: 2px 2px 0px 0px #000;
}

.shadow-brutal-lg {
    box-shadow: 6px 6px 0px 0px #000;
}

.dark .shadow-brutal {
    box-shadow: 4px 4px 0px 0px #fff;
}

.dark .shadow-brutal-sm {
    box-shadow: 2px 2px 0px 0px #fff;
}

.dark .shadow-brutal-lg {
    box-shadow: 6px 6px 0px 0px #fff;
}
`;

// ============================================================================
// Utils Template
// ============================================================================

export const UTILS_TEMPLATE = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
`;
