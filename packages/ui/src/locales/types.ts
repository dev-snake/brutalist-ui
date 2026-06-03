export interface CommandLocale {
    placeholder: string
    emptyText: string
    dialogTitle: string
    dialogDescription: string
}

export interface ComboboxLocale {
    placeholder: string
    multiPlaceholder: string
    searchPlaceholder: string
    emptyText: string
    selectedCount: string
}

export interface PaginationLocale {
    firstPage: string
    previousPage: string
    nextPage: string
    lastPage: string
    page: string
    label: string
}

export interface CarouselLocale {
    previousSlide: string
    nextSlide: string
    goToSlide: string
}

export interface SpinnerLocale {
    loading: string
}

export interface SubmitButtonLocale {
    submitting: string
}

export interface CopyToClipboardLocale {
    copy: string
    copied: string
}

export interface BeforeAfterLocale {
    before: string
    after: string
}

export interface AuthCardLocale {
    welcomeBack: string
    signInToContinue: string
    google: string
    github: string
    orEmailLogin: string
    email: string
    password: string
    forgotPassword: string
    signIn: string
    noAccount: string
    register: string
    emailPlaceholder: string
    passwordPlaceholder: string
}

export interface WaitlistPageLocale {
    title: string
    ctaText: string
    earlyAccess: string
    onWaitlist: string
    live: string
}

export interface DashboardShellLocale {
    sidebarNavigation: string
    signOut: string
    defaultEmail: string
}

export interface BrutalistHeroLocale {
    title: string
    primaryCtaText: string
    secondaryCtaText: string
    neoBrutalismUI: string
}

export interface SaaSPricingLocale {
    title: string
    monthly: string
    annually: string
    mostPopular: string
    perMonth: string
    perMonthBilledAnnually: string
    billingPeriod: string
}

export interface ToastLocale {
    close: string
    container: string
}

export interface DialogLocale {
    close: string
}

export interface SheetLocale {
    close: string
}

export interface BreadcrumbLocale {
    label: string
    more: string
}

export interface TreeViewLocale {
    fileTree: string
}

export interface StepperLocale {
    progressSteps: string
    step: string
}

export interface EmptyStateLocale {
    defaultTitle: string
    defaultActionText: string
}

export interface TestimonialCardLocale {
    defaultQuote: string
    defaultAuthor: string
    defaultRole: string
    verified: string
}

export interface BlogCardLocale {
    defaultTitle: string
    defaultExcerpt: string
    readMore: string
}

export interface FileCardLocale {
    defaultFileName: string
    download: string
}

export interface QuickActionsLocale {
    defaultTitle: string
    badge: string
}

export interface FaqSectionLocale {
    defaultTitle: string
    defaultSubtitle: string
}

export interface HeaderSectionLocale {
    defaultLogoText: string
    defaultCtaText: string
    menuLabel: string
}

export interface FooterSectionLocale {
    defaultLogoText: string
    defaultDescription: string
    defaultCopyright: string
}

export interface NotFoundPageLocale {
    defaultTitle: string
    defaultDescription: string
    defaultBackText: string
}

export interface LoadingPageLocale {
    defaultTitle: string
    defaultDescription: string
}

export interface ErrorCardLocale {
    defaultTitle: string
    defaultDescription: string
    defaultRetryText: string
    dismiss: string
}

export interface SuccessCardLocale {
    defaultTitle: string
    defaultDescription: string
    defaultConfirmText: string
}

export interface SearchWidgetLocale {
    defaultPlaceholder: string
}

export interface FeedbackFormLocale {
    defaultTitle: string
    defaultDescription: string
    defaultSubmitText: string
    nameLabel: string
    emailLabel: string
    subjectLabel: string
    messageLabel: string
}

export interface StepperSectionLocale {
    defaultTitle: string
    previous: string
    next: string
}

export interface CookieConsentLocale {
    defaultTitle: string
    defaultDescription: string
    defaultAcceptText: string
    defaultDeclineText: string
}

export interface DataTableSectionLocale {
    defaultTitle: string
    searchPlaceholder: string
    noResults: string
}

export interface SettingsPageLocale {
    defaultTitle: string
    saveText: string
    nameLabel: string
    namePlaceholder: string
    notificationsLabel: string
}

export interface UploadCardLocale {
    defaultTitle: string
    defaultDescription: string
    browseText: string
    dropText: string
}

export interface OverviewPageLocale {
    defaultTitle: string
    recentActivity: string
    quickStats: string
}

export interface BlogListPageLocale {
    defaultTitle: string
    searchPlaceholder: string
    allCategories: string
    noPostsFound: string
}

export interface ActivityLogPageLocale {
    defaultTitle: string
    action: string
    user: string
    timestamp: string
    details: string
    noActivityFound: string
}

export interface ProfilePageLocale {
    defaultTitle: string
    nameLabel: string
    emailLabel: string
    bioLabel: string
    saveText: string
}

export interface ChartSectionLocale {
    defaultTitle: string
    defaultSubtitle: string
    bar: string
    line: string
    pie: string
}

export interface GallerySectionLocale {
    defaultTitle: string
    noItems: string
}

export interface ScratchCardLocale {
    ariaLabel: string
}

export interface SketchyChartLocale {
    lineAriaLabel: string
    barAriaLabel: string
    pieAriaLabel: string
}

export interface Card3dLocale {
    ariaLabel: string
}

export interface HardcoreInputLocale {
    invalidInput: string
}

export interface CodeBlockLocale {
    copied: string
    copy: string
}

export interface KanbanLocale {
    dropCardsHere: string
}

export interface Locale {
    command: CommandLocale
    combobox: ComboboxLocale
    pagination: PaginationLocale
    carousel: CarouselLocale
    spinner: SpinnerLocale
    submitButton: SubmitButtonLocale
    copyToClipboard: CopyToClipboardLocale
    beforeAfter: BeforeAfterLocale
    authCard: AuthCardLocale
    waitlistPage: WaitlistPageLocale
    dashboardShell: DashboardShellLocale
    brutalistHero: BrutalistHeroLocale
    saasPricing: SaaSPricingLocale
    toast: ToastLocale
    dialog: DialogLocale
    sheet: SheetLocale
    breadcrumb: BreadcrumbLocale
    treeView: TreeViewLocale
    stepper: StepperLocale
    emptyState: EmptyStateLocale
    testimonialCard: TestimonialCardLocale
    blogCard: BlogCardLocale
    fileCard: FileCardLocale
    quickActions: QuickActionsLocale
    faqSection: FaqSectionLocale
    headerSection: HeaderSectionLocale
    footerSection: FooterSectionLocale
    notFoundPage: NotFoundPageLocale
    loadingPage: LoadingPageLocale
    errorCard: ErrorCardLocale
    successCard: SuccessCardLocale
    searchWidget: SearchWidgetLocale
    feedbackForm: FeedbackFormLocale
    stepperSection: StepperSectionLocale
    cookieConsent: CookieConsentLocale
    dataTableSection: DataTableSectionLocale
    settingsPage: SettingsPageLocale
    uploadCard: UploadCardLocale
    overviewPage: OverviewPageLocale
    blogListPage: BlogListPageLocale
    activityLogPage: ActivityLogPageLocale
    profilePage: ProfilePageLocale
    chartSection: ChartSectionLocale
    gallerySection: GallerySectionLocale
    scratchCard: ScratchCardLocale
    sketchyChart: SketchyChartLocale
    card3d: Card3dLocale
    hardcoreInput: HardcoreInputLocale
    codeBlock: CodeBlockLocale
    kanban: KanbanLocale
}
