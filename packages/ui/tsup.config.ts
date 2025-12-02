import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        calendar: 'src/calendar.ts',
        'brutalism-plugin': 'src/lib/brutalism-plugin.js',
    },
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    external: ['react', 'react-dom', 'tailwindcss'],
    esbuildOptions(options) {
        options.banner = {
            js: '"use client";',
        };
    },
});
