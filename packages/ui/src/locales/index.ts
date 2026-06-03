import type { Locale } from './types'

export { zhCN } from './zh-CN'
export { en } from './en'
export type { Locale, CommandLocale, ComboboxLocale, PaginationLocale, CarouselLocale, SpinnerLocale, SubmitButtonLocale, CopyToClipboardLocale, BeforeAfterLocale, AuthCardLocale, WaitlistPageLocale, DashboardShellLocale, BrutalistHeroLocale, SaaSPricingLocale, ToastLocale, DialogLocale, SheetLocale, BreadcrumbLocale, TreeViewLocale, StepperLocale, EmptyStateLocale, TestimonialCardLocale, BlogCardLocale, FileCardLocale, QuickActionsLocale, FaqSectionLocale, HeaderSectionLocale, FooterSectionLocale, NotFoundPageLocale, LoadingPageLocale, ErrorCardLocale, SuccessCardLocale, SearchWidgetLocale, FeedbackFormLocale, StepperSectionLocale, CookieConsentLocale, DataTableSectionLocale, SettingsPageLocale, UploadCardLocale, OverviewPageLocale, BlogListPageLocale, ActivityLogPageLocale, ProfilePageLocale, ChartSectionLocale, GallerySectionLocale } from './types'

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export function mergeLocale(base: Locale, override: DeepPartial<Locale>): Locale {
    const result = { ...base } as unknown as Record<string, unknown>
    for (const key of Object.keys(override)) {
        const overrideVal = (override as unknown as Record<string, unknown>)[key]
        if (overrideVal && typeof overrideVal === 'object' && !Array.isArray(overrideVal)) {
            const baseVal = (base as unknown as Record<string, unknown>)[key] as Record<string, unknown>
            result[key] = { ...baseVal, ...overrideVal }
        }
    }
    return result as unknown as Locale
}
