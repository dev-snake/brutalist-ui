<script setup lang="ts">
import { SearchWidget } from 'brutx-ui-vue'
import type { SearchSuggestion } from 'brutx-ui-vue'

const suggestions: SearchSuggestion[] = [
    { label: 'Button 按钮', value: 'button', group: '组件' },
    { label: 'Badge 徽章', value: 'badge', group: '组件' },
    { label: 'Card 卡片', value: 'card', group: '组件' },
    { label: 'Dialog 对话框', value: 'dialog', group: '组件' },
    { label: '快速开始', value: 'getting-started', group: '文档' },
    { label: '主题配置', value: 'theming', group: '文档' },
]
</script>

<template>
    <SearchWidget :suggestions="suggestions" />
</template>
