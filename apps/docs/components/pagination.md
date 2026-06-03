---
title: Pagination 分页
description: 分页控制组件，带硬质翻页按钮，适配各种列表和数据表格场景。
---

# Pagination 分页

新粗野主义风格的分页组件，内置计算分页算法，支持兄弟页数和首页/末页导航。

## 预览

<ComponentPreview>
  <PaginationDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="pagination" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import Pagination from '@/components/ui/pagination/Pagination.vue'

const currentPage = ref(1)
const totalPages = 10
</script>

<template>
    <Pagination
        v-model:current-page="currentPage"
        :total-pages="totalPages"
    />
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 标准按钮 |
| `rounded` | 按钮使用 `--brutal-radius` 圆角 |
| `minimal` | 按钮无边框和阴影 |

## 尺寸

| 尺寸 | 按钮高度 | 间距 |
|------|----------|------|
| `sm` | `h-8` | `gap-1` |
| `default` | `h-10` | `gap-2` |
| `lg` | `h-12` | `gap-3` |

## 带完整选项

```vue
<script setup>
import { ref } from 'vue'
import Pagination from '@/components/ui/pagination/Pagination.vue'

const currentPage = ref(1)
</script>

<template>
    <Pagination
        v-model:current-page="currentPage"
        :total-pages="50"
        :sibling-count="2"
        :show-first-last="true"
        :show-page-numbers="true"
        variant="default"
        size="default"
    />
</template>
```

## 不显示页码

```vue
<script setup>
import { ref } from 'vue'
import Pagination from '@/components/ui/pagination/Pagination.vue'

const currentPage = ref(1)
</script>

<template>
    <Pagination
        v-model:current-page="currentPage"
        :total-pages="10"
        :show-page-numbers="false"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `currentPage` | `number` | —（必填） |
| `totalPages` | `number` | —（必填） |
| `siblingCount` | `number` | `1` |
| `showFirstLast` | `boolean` | `true` |
| `showPageNumbers` | `boolean` | `true` |
| `variant` | `'default' \| 'rounded' \| 'minimal'` | `'default'` |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `update:currentPage` | `number` |
