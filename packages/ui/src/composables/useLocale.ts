import { type ComputedRef, type InjectionKey, type MaybeRef, computed, inject, provide, unref } from 'vue'
import { zhCN } from '../locales/zh-CN'
import type { Locale } from '../locales/types'

export const LOCALE_INJECTION_KEY: InjectionKey<MaybeRef<Locale>> = Symbol('brutx-ui-locale')

export type TranslateFunction = (path: string, params?: Record<string, string | number>) => string

export function provideLocale(locale: MaybeRef<Locale>) {
    provide(LOCALE_INJECTION_KEY, locale)
}

function resolveByPath(obj: unknown, path: string): string | undefined {
    const keys = path.split('.')
    let result: unknown = obj
    for (const key of keys) {
        if (result == null || typeof result !== 'object') return undefined
        result = (result as Record<string, unknown>)[key]
    }
    return typeof result === 'string' ? result : undefined
}

function interpolate(template: string, params?: Record<string, string | number>): string {
    if (!params) return template
    return Object.entries(params).reduce(
        (str, [k, v]) => str.split(`{${k}}`).join(String(v)),
        template,
    )
}

export function useLocale(): { locale: ComputedRef<Locale>; t: TranslateFunction } {
    const injected = inject<MaybeRef<Locale> | undefined>(LOCALE_INJECTION_KEY, undefined)

    const locale = computed<Locale>(() => {
        const resolved = injected ? unref(injected) : undefined
        return resolved ?? zhCN
    })

    function t(path: string, params?: Record<string, string | number>): string {
        const currentVal = resolveByPath(locale.value, path)
        if (currentVal !== undefined) return interpolate(currentVal, params)

        const fallbackVal = resolveByPath(zhCN, path)
        if (fallbackVal !== undefined) return interpolate(fallbackVal, params)

        return path
    }

    return { locale, t }
}
