import { useTheme } from './useTheme'

describe('useTheme', () => {
    beforeEach(() => {
        document.documentElement.className = ''
        localStorage.clear()
    })

    it('exports a composable function', () => {
        expect(typeof useTheme).toBe('function')
    })

    it('returns theme and colorMode refs', () => {
        const { theme, colorMode } = useTheme()
        expect(theme.value).toBeDefined()
        expect(colorMode.value).toBeDefined()
    })

    it('returns setTheme function', () => {
        const { setTheme } = useTheme()
        expect(typeof setTheme).toBe('function')
    })

    it('returns toggleColorMode function', () => {
        const { toggleColorMode } = useTheme()
        expect(typeof toggleColorMode).toBe('function')
    })

    it('returns applyColorMode function', () => {
        const { applyColorMode } = useTheme()
        expect(typeof applyColorMode).toBe('function')
    })

    it('returns initTheme function', () => {
        const { initTheme } = useTheme()
        expect(typeof initTheme).toBe('function')
    })

    it('default theme is classic', () => {
        const { theme } = useTheme()
        expect(theme.value).toBe('classic')
    })

    it('default color mode is light', () => {
        const { colorMode } = useTheme()
        expect(colorMode.value).toBe('light')
    })

    it('setTheme changes theme value', () => {
        const { theme, setTheme } = useTheme()
        setTheme('pastel')
        expect(theme.value).toBe('pastel')
        expect(document.documentElement.classList.contains('theme-pastel')).toBe(true)
    })

    it('toggleColorMode switches between light and dark', () => {
        const { colorMode, toggleColorMode } = useTheme()
        expect(colorMode.value).toBe('light')
        toggleColorMode()
        expect(colorMode.value).toBe('dark')
        expect(document.documentElement.classList.contains('dark')).toBe(true)
        toggleColorMode()
        expect(colorMode.value).toBe('light')
        expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('applyColorMode sets dark mode', () => {
        const { colorMode, applyColorMode } = useTheme()
        applyColorMode('dark')
        expect(colorMode.value).toBe('dark')
        expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('initTheme restores saved theme from localStorage', () => {
        localStorage.setItem('brutx-theme', 'mono')
        localStorage.setItem('brutx-color-mode', 'dark')
        const { theme, colorMode, initTheme } = useTheme()
        initTheme()
        expect(theme.value).toBe('mono')
        expect(colorMode.value).toBe('dark')
        expect(document.documentElement.classList.contains('theme-mono')).toBe(true)
        expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
})
