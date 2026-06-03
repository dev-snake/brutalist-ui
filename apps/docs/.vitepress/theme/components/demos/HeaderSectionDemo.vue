<script setup lang="ts">
import { HeaderSection } from 'brutx-ui-vue'
import type { NavItem } from 'brutx-ui-vue'

const navItems: NavItem[] = [
    { label: '首页', href: '/' },
    { label: '产品', href: '/products' },
    { label: '关于', href: '/about' },
    { label: '联系', href: '/contact' },
]
</script>

<template>
    <HeaderSection logo-text="BrutxUI" :nav-items="navItems" cta-text="开始使用" />
</template>
