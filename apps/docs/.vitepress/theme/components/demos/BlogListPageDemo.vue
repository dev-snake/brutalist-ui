<script setup lang="ts">
import { BlogListPage } from 'brutx-ui-vue'
import type { BlogPost } from 'brutx-ui-vue'

const posts: BlogPost[] = [
    {
        title: 'BrutxUI v2.0 发布',
        excerpt: '全新版本带来更强大的组件和更好的开发体验，包括暗色模式支持和全新的主题系统。',
        author: '张三',
        date: '2026-05-28',
        category: '发布',
        slug: 'brutxui-v2-release',
    },
    {
        title: 'Neo-Brutalism 设计指南',
        excerpt: '探索新粗野主义设计的核心原则，以及如何在 Web 项目中运用这一风格。',
        author: '李四',
        date: '2026-05-20',
        category: '设计',
        slug: 'neo-brutalism-guide',
    },
    {
        title: 'Vue 3 组合式 API 最佳实践',
        excerpt: '深入理解 Composition API 的使用模式，编写更可维护的组件代码。',
        author: '王五',
        date: '2026-05-15',
        category: '教程',
        slug: 'vue3-composition-best-practices',
    },
    {
        title: 'Tailwind CSS 性能优化',
        excerpt: '减少最终 CSS 体积的实用技巧，从配置到构建的全方位优化方案。',
        author: '赵六',
        date: '2026-05-10',
        category: '教程',
        slug: 'tailwind-performance',
    },
]

const categories = ['发布', '设计', '教程']
</script>

<template>
    <div class="w-full overflow-x-auto">
        <BlogListPage :posts="posts" :categories="categories" />
    </div>
</template>
