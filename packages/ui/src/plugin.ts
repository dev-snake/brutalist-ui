import type { App, MaybeRef } from 'vue'
import type { Locale } from './locales/types'
import { LOCALE_INJECTION_KEY } from './composables/useLocale'
import { zhCN } from './locales/zh-CN'

export interface BrutxUIPluginOptions {
    locale?: MaybeRef<Locale>
}

export const BrutxUIPlugin = {
    install(app: App, options: BrutxUIPluginOptions = {}) {
        const locale = options.locale ?? zhCN
        app.provide(LOCALE_INJECTION_KEY, locale)
    },
}
