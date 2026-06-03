import { defineConfig } from 'vitepress'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

const tailwindConfig = resolve(__dirname, '../tailwind.config.cjs')

export default defineConfig({
    title: 'BrutxUI',
    description: 'Neo-Brutalism 风格 Vue 3 组件库',
    base: '/brutxui-vue3/',
    sitemap: {
        hostname: 'https://lidaixingchen.github.io/brutxui-vue3/',
    },
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/brutxui-vue3/favicon.svg' }],
        ['meta', { name: 'theme-color', content: '#FFE66D' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'BrutxUI' }],
        ['meta', { property: 'og:description', content: 'Neo-Brutalism 风格 Vue 3 组件库' }],
        ['meta', { property: 'og:image', content: '/brutxui-vue3/og-image.svg' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'BrutxUI' }],
        ['meta', { name: 'twitter:description', content: 'Neo-Brutalism 风格 Vue 3 组件库' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&display=swap' }],
        ['link', { rel: 'manifest', href: '/brutxui-vue3/manifest.json' }],
    ],
    transformHead(context) {
        let pageUrl = context.page.replace(/\.md$/, '')
        if (pageUrl === 'index') pageUrl = ''
        const canonicalUrl = `https://lidaixingchen.github.io/brutxui-vue3/${pageUrl}`

        return [
            ['link', { rel: 'canonical', href: canonicalUrl }],
            [
                'script',
                { type: 'application/ld+json' },
                JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'SoftwareSourceCode',
                    name: 'BrutxUI',
                    description: 'Neo-Brutalism 风格 Vue 3 组件库',
                    url: 'https://lidaixingchen.github.io/brutxui-vue3/',
                    codeRepository: 'https://github.com/lidaixingchen/brutxui-vue3',
                    programmingLanguage: 'Vue',
                    license: 'MIT',
                }),
            ],
        ]
    },
    themeConfig: {
        logo: '/favicon.svg',
        nav: [
            { text: '指南', link: '/guide/getting-started' },
            { text: '组件', link: '/components/alert' },
            {
                text: 'GitHub',
                link: 'https://github.com/lidaixingchen/brutxui-vue3',
            },
        ],
        sidebar: [
            {
                text: '快速开始',
                link: '/guide/getting-started',
            },
            {
                text: '安装',
                items: [
                    { text: 'Vite', link: '/guide/installation-vite' },
                    { text: '手动安装', link: '/guide/installation-manual' },
                ],
            },
            {
                text: 'CLI 工具',
                link: '/guide/cli',
            },
            {
                text: '主题与令牌',
                link: '/guide/theme',
            },
            {
                text: '国际化',
                link: '/guide/locale',
            },
            {
                text: 'AI 集成',
                link: '/guide/ai',
            },
            {
                text: '组件',
                items: [
                    { text: 'Accordion 折叠面板', link: '/components/accordion' },
                    { text: 'Alert 提示', link: '/components/alert' },
                    { text: 'Alert Dialog 提示对话框', link: '/components/alert-dialog' },
                    { text: 'Avatar 头像', link: '/components/avatar' },
                    { text: 'Badge 徽标', link: '/components/badge' },
                    { text: 'BeforeAfter 对比滑块', link: '/components/before-after' },
                    { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
                    { text: 'Button 按钮', link: '/components/button' },
                    { text: 'Calendar 日历', link: '/components/calendar' },
                    { text: 'Card 卡片', link: '/components/card' },
                    { text: 'Card3D 3D 悬浮卡片', link: '/components/card-3d' },
                    { text: 'Checkbox 复选框', link: '/components/checkbox' },
                    { text: 'CodeBlock 代码块', link: '/components/code-block' },
                    { text: 'Combobox 组合框', link: '/components/combobox' },
                    { text: 'Command 命令面板', link: '/components/command' },
                    { text: 'CopyToClipboard 复制按钮', link: '/components/copy-to-clipboard' },
                    { text: 'Dashboard Stats 仪表盘统计', link: '/components/dashboard-stats' },
                    { text: 'Dialog 对话框', link: '/components/dialog' },
                    { text: 'Dropdown Menu 下拉菜单', link: '/components/dropdown-menu' },
                    { text: 'Form 表单', link: '/components/form' },
                    { text: 'GlitchText 故障文本', link: '/components/glitch-text' },
                    { text: 'HardcoreInput 硬核输入框', link: '/components/hardcore-input' },
                    { text: 'Input 输入框', link: '/components/input' },
                    { text: 'Carousel 轮播图', link: '/components/carousel' },
                    { text: 'ChatBubble 聊天气泡', link: '/components/chat-bubble' },
                    { text: 'Counter 数字滚动', link: '/components/counter' },
                    { text: 'KanbanBoard 看板', link: '/components/kanban-board' },
                    { text: 'Kbd 键盘按键', link: '/components/kbd' },
                    { text: 'Label 标签', link: '/components/label' },
                    { text: 'Marquee 跑马灯', link: '/components/marquee' },
                    { text: 'NumberInput 数字输入框', link: '/components/number-input' },
                    { text: 'Pagination 分页', link: '/components/pagination' },
                    { text: 'Popover 弹出层', link: '/components/popover' },
                    { text: 'Progress 进度条', link: '/components/progress' },
                    { text: 'Radio Group 单选组', link: '/components/radio-group' },
                    { text: 'SaaS Pricing 定价', link: '/components/saas-pricing' },
                    { text: 'Scroll Area 滚动区域', link: '/components/scroll-area' },
                    { text: 'ScratchCard 刮刮卡', link: '/components/scratch-card' },
                    { text: 'SketchyChart 手绘图表', link: '/components/sketchy-chart' },
                    { text: 'Select 选择器', link: '/components/select' },
                    { text: 'Separator 分隔线', link: '/components/separator' },
                    { text: 'Sheet 抽屉', link: '/components/sheet' },
                    { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
                    { text: 'Slider 滑块', link: '/components/slider' },
                    { text: 'Spinner 加载指示器', link: '/components/spinner' },
                    { text: 'Submit Button 提交按钮', link: '/components/submit-button' },
                    { text: 'Switch 开关', link: '/components/switch' },
                    { text: 'Table 表格', link: '/components/table' },
                    { text: 'Tabs 标签页', link: '/components/tabs' },
                    { text: 'Stepper 步骤条', link: '/components/stepper' },
                    { text: 'TagsInput 标签输入', link: '/components/tags-input' },
                    { text: 'Textarea 文本域', link: '/components/textarea' },
                    { text: 'Timeline 时间线', link: '/components/timeline' },
                    { text: 'Toast 轻提示', link: '/components/toast' },
                    { text: 'Toggle 切换', link: '/components/toggle' },
                    { text: 'Toggle Group 切换组', link: '/components/toggle-group' },
                    { text: 'Tooltip 工具提示', link: '/components/tooltip' },
                    { text: 'TreeView 树形目录', link: '/components/tree-view' },
                ],
            },
            {
                text: '区块与模板',
                items: [
                    { text: '概览', link: '/blocks/' },
                    { text: 'Brutalist Hero 英雄区', link: '/blocks/brutalist-hero' },
                    { text: 'Pricing Section 定价区', link: '/blocks/pricing-section' },
                    { text: 'Auth Card 认证卡片', link: '/blocks/auth-card' },
                    { text: 'Dashboard Shell 仪表盘框架', link: '/blocks/dashboard-shell' },
                    { text: 'Empty State 空状态', link: '/blocks/empty-state' },
                    { text: 'Waitlist Page 等候列表页', link: '/blocks/waitlist-page' },
                    { text: 'Not Found Page 404 页面', link: '/blocks/not-found-page' },
                    { text: 'Loading Page 加载页', link: '/blocks/loading-page' },
                    { text: 'Header Section 顶部导航', link: '/blocks/header-section' },
                    { text: 'Footer Section 底部信息栏', link: '/blocks/footer-section' },
                    { text: 'FAQ Section 常见问题', link: '/blocks/faq-section' },
                    { text: 'Testimonial Card 评价卡片', link: '/blocks/testimonial-card' },
                    { text: 'Blog Card 博客卡片', link: '/blocks/blog-card' },
                    { text: 'File Card 文件卡片', link: '/blocks/file-card' },
                    { text: 'Quick Actions 快捷操作', link: '/blocks/quick-actions' },
                    { text: 'Tabs Nav 标签导航', link: '/blocks/tabs-nav' },
                    { text: 'Data Table Section 数据表格', link: '/blocks/data-table-section' },
                    { text: 'Settings Page 设置页', link: '/blocks/settings-page' },
                    { text: 'Error Card 错误卡片', link: '/blocks/error-card' },
                    { text: 'Success Card 成功卡片', link: '/blocks/success-card' },
                    { text: 'Search Widget 搜索组件', link: '/blocks/search-widget' },
                    { text: 'Feedback Form 反馈表单', link: '/blocks/feedback-form' },
                    { text: 'Stepper Section 步骤导航', link: '/blocks/stepper-section' },
                    { text: 'Cookie Consent Cookie 同意', link: '/blocks/cookie-consent' },
                    { text: 'Blog List Page 博客列表页', link: '/blocks/blog-list-page' },
                    { text: 'Chart Section 图表区', link: '/blocks/chart-section' },
                    { text: 'Upload Card 上传卡片', link: '/blocks/upload-card' },
                    { text: 'Gallery Section 画廊区', link: '/blocks/gallery-section' },
                    { text: 'Overview Page 概览页', link: '/blocks/overview-page' },
                    { text: 'Activity Log Page 活动日志页', link: '/blocks/activity-log-page' },
                    { text: 'Profile Page 个人资料页', link: '/blocks/profile-page' },
                ],
            },
        ],
        search: {
            provider: 'local',
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lidaixingchen/brutxui-vue3' },
        ],
        footer: {
            message: 'Built with brute force.',
            copyright: `© ${new Date().getFullYear()} BrutxUI · MIT License`,
        },
        editLink: {
            pattern: 'https://github.com/lidaixingchen/brutxui-vue3/edit/main/apps/docs/:path',
            text: '在 GitHub 上编辑此页',
        },
    },
    vite: {
        resolve: {
            alias: {
                '@': new URL('./.vitepress', import.meta.url).pathname,
            },
        },
        css: {
            postcss: {
                plugins: [
                    tailwindcss(tailwindConfig),
                    autoprefixer(),
                ],
            },
        },
    },
})
