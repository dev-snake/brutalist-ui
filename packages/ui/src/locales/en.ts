import type { Locale } from './types'

export const en: Locale = {
    command: {
        placeholder: 'Type a command or search...',
        emptyText: 'No results found.',
        dialogTitle: 'Command Palette',
        dialogDescription: 'Search for a command to run...',
    },
    combobox: {
        placeholder: 'Select option...',
        multiPlaceholder: 'Select options...',
        searchPlaceholder: 'Search...',
        emptyText: 'No results found.',
        selectedCount: '{count} selected',
    },
    pagination: {
        firstPage: 'Go to first page',
        previousPage: 'Go to previous page',
        nextPage: 'Go to next page',
        lastPage: 'Go to last page',
        page: 'Go to page {number}',
        label: 'pagination',
    },
    carousel: {
        previousSlide: 'Previous slide',
        nextSlide: 'Next slide',
        goToSlide: 'Go to slide {index}',
    },
    spinner: {
        loading: 'Loading...',
    },
    submitButton: {
        submitting: 'Submitting...',
    },
    copyToClipboard: {
        copy: 'Copy',
        copied: 'Copied',
    },
    beforeAfter: {
        before: 'Before',
        after: 'After',
    },
    authCard: {
        welcomeBack: 'Welcome back',
        signInToContinue: 'Sign in to your account to continue',
        google: 'Google',
        github: 'GitHub',
        orEmailLogin: 'or email login',
        email: 'Email',
        password: 'Password',
        forgotPassword: 'Forgot password?',
        signIn: 'Sign In',
        noAccount: "Don't have an account?",
        register: 'Register',
        emailPlaceholder: 'you@example.com',
        passwordPlaceholder: '••••••••',
    },
    waitlistPage: {
        title: 'Join the BrutxUI Waitlist Club',
        ctaText: 'Secure Priority Access',
        earlyAccess: 'Early Access',
        onWaitlist: '{count} on waitlist',
        live: 'Live',
    },
    dashboardShell: {
        sidebarNavigation: 'Sidebar navigation',
        signOut: 'Sign out',
        defaultEmail: 'user@example.com',
    },
    brutalistHero: {
        title: 'Build Bold Interfaces Faster with BrutxUI',
        primaryCtaText: 'Get Started Now',
        secondaryCtaText: 'View Component Registry',
        neoBrutalismUI: 'Neo-Brutalism UI',
    },
    saasPricing: {
        title: 'Simple, Unapologetic Pricing',
        monthly: 'Monthly',
        annually: 'Annually',
        mostPopular: 'MOST POPULAR',
        perMonth: '/mo',
        perMonthBilledAnnually: 'mo (billed annually)',
        billingPeriod: 'Billing period',
    },
    toast: {
        close: 'Close',
        container: 'Notifications',
    },
    dialog: {
        close: 'Close',
    },
    sheet: {
        close: 'Close',
    },
    breadcrumb: {
        label: 'breadcrumb',
        more: 'More',
    },
    treeView: {
        fileTree: 'File tree',
    },
    stepper: {
        progressSteps: 'Progress steps',
        step: 'Step {index}: {title}',
    },
    emptyState: {
        defaultTitle: 'No active deployments found',
        defaultActionText: 'Deploy New App',
    },
    testimonialCard: {
        defaultQuote: 'This product has completely transformed our workflow.',
        defaultAuthor: 'Alex Johnson',
        defaultRole: 'Product Manager',
        verified: 'Verified',
    },
    blogCard: {
        defaultTitle: 'Getting Started with BrutxUI',
        defaultExcerpt: 'Learn how to build bold interfaces with our component library.',
        readMore: 'Read more',
    },
    fileCard: {
        defaultFileName: 'document.pdf',
        download: 'Download',
    },
    quickActions: {
        defaultTitle: 'Quick Actions',
        badge: 'Quick',
    },
    faqSection: {
        defaultTitle: 'Frequently Asked Questions',
        defaultSubtitle: 'Find the answers you need',
    },
    headerSection: {
        defaultLogoText: 'BrutxUI',
        defaultCtaText: 'Get Started',
        menuLabel: 'Menu',
    },
    footerSection: {
        defaultLogoText: 'BrutxUI',
        defaultDescription: 'Neo-Brutalist UI component library for Vue 3',
        defaultCopyright: '© 2026 BrutxUI. All rights reserved.',
    },
    notFoundPage: {
        defaultTitle: 'Page Not Found',
        defaultDescription: 'The page you are looking for does not exist or has been removed.',
        defaultBackText: 'Go Back Home',
    },
    loadingPage: {
        defaultTitle: 'Loading',
        defaultDescription: 'Please wait while content is loading...',
    },
    errorCard: {
        defaultTitle: 'Something went wrong',
        defaultDescription: 'The operation could not be completed. Please try again.',
        defaultRetryText: 'Retry',
        dismiss: 'Dismiss',
    },
    successCard: {
        defaultTitle: 'Success',
        defaultDescription: 'Your action has been completed successfully.',
        defaultConfirmText: 'Confirm',
    },
    searchWidget: {
        defaultPlaceholder: 'Search...',
    },
    feedbackForm: {
        defaultTitle: 'Send Feedback',
        defaultDescription: "We'd love to hear from you",
        defaultSubmitText: 'Submit Feedback',
        nameLabel: 'Name',
        emailLabel: 'Email',
        subjectLabel: 'Subject',
        messageLabel: 'Message',
    },
    stepperSection: {
        defaultTitle: 'Steps',
        previous: 'Previous',
        next: 'Next',
    },
    cookieConsent: {
        defaultTitle: 'We use cookies',
        defaultDescription: 'This website uses cookies to enhance your browsing experience.',
        defaultAcceptText: 'Accept',
        defaultDeclineText: 'Decline',
    },
    dataTableSection: {
        defaultTitle: 'Data Table',
        searchPlaceholder: 'Search...',
        noResults: 'No matching results found',
    },
    settingsPage: {
        defaultTitle: 'Settings',
        saveText: 'Save Changes',
        nameLabel: 'Name',
        namePlaceholder: 'Enter name',
        notificationsLabel: 'Notifications',
    },
    uploadCard: {
        defaultTitle: 'Upload Files',
        defaultDescription: 'Drag and drop your files here',
        browseText: 'Browse Files',
        dropText: 'Drop files here',
    },
    overviewPage: {
        defaultTitle: 'Overview',
        recentActivity: 'Recent Activity',
        quickStats: 'Quick Stats',
    },
    blogListPage: {
        defaultTitle: 'Blog',
        searchPlaceholder: 'Search posts...',
        allCategories: 'All',
        noPostsFound: 'No posts found',
    },
    activityLogPage: {
        defaultTitle: 'Activity Log',
        action: 'Action',
        user: 'User',
        timestamp: 'Timestamp',
        details: 'Details',
        noActivityFound: 'No activity found',
    },
    profilePage: {
        defaultTitle: 'Profile',
        nameLabel: 'Name',
        emailLabel: 'Email',
        bioLabel: 'Bio',
        saveText: 'Save',
    },
    chartSection: {
        defaultTitle: 'Data Visualization',
        defaultSubtitle: 'View data trends',
        bar: 'Bar',
        line: 'Line',
        pie: 'Pie',
    },
    gallerySection: {
        defaultTitle: 'Gallery',
        noItems: 'No items to display',
    },
    scratchCard: {
        ariaLabel: 'Scratch Card',
    },
    sketchyChart: {
        lineAriaLabel: 'Sketchy Line Chart',
        barAriaLabel: 'Sketchy Bar Chart',
        pieAriaLabel: 'Sketchy Pie Chart',
    },
    card3d: {
        ariaLabel: '3D Interactive Card',
    },
    hardcoreInput: {
        invalidInput: 'Invalid input',
    },
    codeBlock: {
        copied: 'Copied',
        copy: 'Copy',
    },
    kanban: {
        dropCardsHere: 'Drop cards here',
    },
}
