import { ref } from 'vue'

export type ThemeName = 'classic' | 'pastel' | 'mono'
export type ColorMode = 'light' | 'dark'

const theme = ref<ThemeName>('classic')
const colorMode = ref<ColorMode>('light')

function getThemeClass(name: ThemeName): string {
    return `theme-${name}`
}

function applyTheme(name: ThemeName) {
    if (typeof document === 'undefined') return;
    if (name === theme.value) return;
    const root = document.documentElement
    root.classList.remove(getThemeClass(theme.value))
    root.classList.add(getThemeClass(name))
    theme.value = name
    localStorage.setItem('brutx-theme', name)
}

function applyColorMode(mode: ColorMode) {
    if (typeof document === 'undefined') return;
    const root = document.documentElement
    if (mode === 'dark') {
        root.classList.add('dark')
    } else {
        root.classList.remove('dark')
    }
    colorMode.value = mode
    localStorage.setItem('brutx-color-mode', mode)
}

function toggleColorMode() {
    applyColorMode(colorMode.value === 'dark' ? 'light' : 'dark')
}

function setTheme(name: ThemeName) {
    applyTheme(name)
}

function initTheme() {
    if (typeof localStorage === 'undefined') return;
    const VALID_THEMES: ThemeName[] = ['classic', 'pastel', 'mono']
    const VALID_MODES: ColorMode[] = ['light', 'dark']
    const savedThemeRaw = localStorage.getItem('brutx-theme')
    const savedTheme = (savedThemeRaw && VALID_THEMES.includes(savedThemeRaw as ThemeName)) ? savedThemeRaw as ThemeName : null
    const savedModeRaw = localStorage.getItem('brutx-color-mode')
    const savedMode = (savedModeRaw && VALID_MODES.includes(savedModeRaw as ColorMode)) ? savedModeRaw as ColorMode : null

    if (savedTheme) {
        applyTheme(savedTheme)
    } else {
        applyTheme(theme.value)
    }

    if (savedMode) {
        applyColorMode(savedMode)
    } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyColorMode('dark')
    }
}

export function useTheme() {
    return {
        theme,
        colorMode,
        setTheme,
        toggleColorMode,
        applyColorMode,
        initTheme,
    }
}
