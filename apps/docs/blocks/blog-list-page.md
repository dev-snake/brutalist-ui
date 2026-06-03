---
title: Blog List Page
description: 带有搜索、分类筛选和分页的博客文章列表页面区块。
---

# Blog List Page

新粗野主义风格的博客列表页面，包含搜索框、分类标签筛选、文章卡片网格和分页组件。

## 预览

<ComponentPreview>
  <BlogListPageDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block blog-list-page
```

## 用法

```vue
<script setup>
import BlogListPage from '@/components/ui/blog-list-page/BlogListPage.vue'

const posts = [
    {
        title: 'Getting Started with BrutxUI',
        excerpt: 'An introduction to building with BrutxUI components.',
        author: 'Admin',
        date: '2024-01-15',
        category: 'Tech',
        slug: 'getting-started',
    },
    {
        title: 'Design Principles',
        excerpt: 'Exploring the neo-brutalist design philosophy.',
        author: 'Designer',
        date: '2024-01-10',
        category: 'Design',
        slug: 'design-principles',
    },
]

const categories = ['Tech', 'Design']

function handlePostClick(slug) {
    console.log('Post clicked:', slug)
}

function handleCategoryFilter(category) {
    console.log('Category filter:', category)
}
</script>

<template>
    <BlogListPage
        :posts="posts"
        :categories="categories"
        :page-size="6"
        @post-click="handlePostClick"
        @category-filter="handleCategoryFilter"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `blogListPage.defaultTitle` |
| `posts` | `BlogPost[]` | `[]` |
| `categories` | `string[]` | `[]` |
| `pageSize` | `number` | `6` |
| `class` | `string` | — |

### BlogPost 接口

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 文章标题 |
| `excerpt` | `string` | 文章摘要 |
| `author` | `string` | 作者名 |
| `date` | `string` | 发布日期 |
| `category` | `string` | 分类名称 |
| `slug` | `string` | 文章唯一标识 |

## 事件

| 事件 | 载荷 |
|------|------|
| `post-click` | `[slug: string]` |
| `category-filter` | `[category: string]` |

## 插槽

| 插槽 | 说明 |
|------|------|
| `header` | 自定义页面标题区域 |
| `default` | 自定义主内容区域（替换搜索、卡片网格和分页） |
| `footer` | 页面底部内容 |

## 布局

BlogListPage 包含：
- **标题**：加粗页面标题，可通过 `header` 插槽自定义
- **搜索与筛选**：搜索输入框和分类标签按钮
- **文章卡片网格**：响应式三列卡片布局，每张卡片包含分类徽标、日期、标题、摘要和作者
- **分页**：当文章数量超过 `pageSize` 时自动显示
