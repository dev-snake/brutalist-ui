import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

function copyStylesPlugin(): Plugin {
    return {
        name: 'copy-styles',
        writeBundle() {
            try {
                copyFileSync(
                    resolve(__dirname, 'src/styles.css'),
                    resolve(__dirname, 'dist/styles.css')
                )
            } catch (e) {
                console.warn('Failed to copy styles.css:', e)
            }
        },
    }
}

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            include: ['src/**/*.ts', 'src/**/*.vue'],
            outDir: 'dist',
        }),
        copyStylesPlugin(),
    ],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                locales: resolve(__dirname, 'src/locales/index.ts'),
                calendar: resolve(__dirname, 'src/calendar.ts'),
                'submit-button': resolve(__dirname, 'src/submit-button.ts'),
                hooks: resolve(__dirname, 'src/hooks/index.ts'),
                'brutalism-plugin': resolve(__dirname, 'src/lib/brutalism-plugin.js'),
            },
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['vue', 'tailwindcss', /^reka-ui/, /^@vueuse/, /^v-calendar/, /^vee-validate/, /^@vee-validate/],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        copyPublicDir: false,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
})
