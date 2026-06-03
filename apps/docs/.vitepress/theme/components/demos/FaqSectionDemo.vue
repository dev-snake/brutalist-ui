<script setup lang="ts">
import { FaqSection } from 'brutx-ui-vue'
import type { FaqItem } from 'brutx-ui-vue'

const items: FaqItem[] = [
    {
        question: 'BrutxUI 支持哪些框架？',
        answer: 'BrutxUI 目前专注于 Vue 3 生态，使用 Composition API 和 <script setup> 语法，配合 Tailwind CSS 实现样式。',
    },
    {
        question: '如何自定义主题？',
        answer: '通过覆盖 CSS 变量即可自定义主题，包括边框宽度、阴影偏移、颜色等设计令牌。内置了 classic、pastel、mono 三种预设主题。',
    },
    {
        question: '是否支持暗色模式？',
        answer: '是的，所有组件都内置了暗色模式支持，通过 .dark 类或 CSS 变量即可切换。',
    },
    {
        question: '组件是否支持无障碍访问？',
        answer: '所有交互组件基于 reka-ui 无头原语构建，内置 ARIA 属性和键盘导航支持。',
    },
]
</script>

<template>
    <FaqSection :items="items" />
</template>
