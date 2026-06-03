<script setup lang="ts">
import { FooterSection } from 'brutx-ui-vue'
import type { FooterLinkGroup } from 'brutx-ui-vue'

const linkGroups: FooterLinkGroup[] = [
    {
        title: '产品',
        links: [
            { label: '组件库', href: '/components' },
            { label: 'CLI 工具', href: '/cli' },
            { label: '模板', href: '/templates' },
        ],
    },
    {
        title: '资源',
        links: [
            { label: '文档', href: '/docs' },
            { label: '教程', href: '/tutorials' },
            { label: '博客', href: '/blog' },
        ],
    },
    {
        title: '公司',
        links: [
            { label: '关于我们', href: '/about' },
            { label: '招聘', href: '/careers' },
            { label: '联系方式', href: '/contact' },
        ],
    },
    {
        title: '法律',
        links: [
            { label: '隐私政策', href: '/privacy' },
            { label: '服务条款', href: '/terms' },
        ],
    },
]
</script>

<template>
    <FooterSection
        logo-text="BrutxUI"
        description="面向 Vue 3 的 Neo-Brutalist UI 组件库"
        :link-groups="linkGroups"
        copyright="© 2026 BrutxUI. All rights reserved."
    />
</template>
