import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
    sourcemap: true,
    target: 'node18',
    noExternal: ['brutx-shared-vue'],
    banner: {
        js: '#!/usr/bin/env node',
    },
});
