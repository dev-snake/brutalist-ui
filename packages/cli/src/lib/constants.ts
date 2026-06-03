import type { ProjectType } from './types.js';

export { COMPONENTS, AVAILABLE_COMPONENTS } from 'brutx-shared-vue';
export type { ComponentMeta as ComponentInfo } from 'brutx-shared-vue';

export const CONFIG_FILES = {
    vite: ['vite.config.js', 'vite.config.ts', 'vite.config.mjs'],
    nuxt: ['nuxt.config.js', 'nuxt.config.ts', 'nuxt.config.mjs'],
    tailwind: [
        'tailwind.config.ts',
        'tailwind.config.js',
        'tailwind.config.mjs',
        'tailwind.config.cjs',
    ],
    tsconfig: ['tsconfig.json', 'jsconfig.json'],
    lockfiles: {
        pnpm: 'pnpm-lock.yaml',
        yarn: 'yarn.lock',
        bun: 'bun.lockb',
    },
} as const;

export const CSS_LOCATIONS: Record<ProjectType, readonly string[]> = {
    'vite-vue': ['src/index.css', 'src/App.css', 'src/assets/main.css', 'index.css'],
    'vite-vue-src': ['src/index.css', 'src/App.css', 'src/assets/main.css', 'src/styles/index.css'],
    nuxt: ['assets/css/main.css', 'assets/css/tailwind.css', 'assets/css/global.css'],
    unknown: [
        'src/index.css',
        'src/assets/main.css',
        'src/styles/index.css',
        'assets/css/main.css',
        'index.css',
    ],
} as const;

export const BASE_DEPENDENCIES = [
    'clsx',
    'tailwind-merge',
    'class-variance-authority',
    'lucide-vue-next',
    'reka-ui',
] as const;

export const DEFAULT_ALIASES = {
    components: '@/components',
    utils: '@/lib/utils',
} as const;

export const DEFAULT_TAILWIND_CONFIG = 'tailwind.config.js';

export const SCHEMA_URL = 'https://lidaixingchen.github.io/brutxui-vue3/schema.json';

export const DEFAULT_REGISTRY_URL = 'https://raw.githubusercontent.com/lidaixingchen/brutxui-vue3/main/packages/registry/registry';

export const BRUTALIST_CSS_STYLES = `
:root {
    --brutal-border-width: 3px;
    --brutal-border-color: #000000;
    --brutal-shadow-color: #000000;
    --brutal-shadow-offset-sm: 2px;
    --brutal-shadow-offset: 4px;
    --brutal-shadow-offset-lg: 6px;
    --brutal-shadow-offset-xl: 8px;
}

.dark {
    --brutal-border-color: #ffffff;
    --brutal-shadow-color: #ffffff;
}

.border-3 {
    border-width: var(--brutal-border-width, 3px);
}

.border-brutal {
    border-color: var(--brutal-border-color, #000000);
}

.shadow-brutal {
    box-shadow: var(--brutal-shadow-offset, 4px) var(--brutal-shadow-offset, 4px) 0px 0px var(--brutal-shadow-color, #000000);
}

.shadow-brutal-sm {
    box-shadow: var(--brutal-shadow-offset-sm, 2px) var(--brutal-shadow-offset-sm, 2px) 0px 0px var(--brutal-shadow-color, #000000);
}

.shadow-brutal-lg {
    box-shadow: var(--brutal-shadow-offset-lg, 6px) var(--brutal-shadow-offset-lg, 6px) 0px 0px var(--brutal-shadow-color, #000000);
}

.shadow-brutal-xl {
    box-shadow: var(--brutal-shadow-offset-xl, 8px) var(--brutal-shadow-offset-xl, 8px) 0px 0px var(--brutal-shadow-color, #000000);
}
`;

export const UTILS_TEMPLATE = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
`;
