---
title: Search Widget
description: 搜索组件区块，带有输入框和分组建议列表。
---

# Search Widget

新粗野主义风格的搜索组件，包含 Command 输入框和分组建议列表，支持实时过滤和选择。

## 预览

<ComponentPreview>
  <SearchWidgetDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block search-widget
```

## 用法

```vue
<script setup>
import SearchWidget from '@/components/ui/search-widget/SearchWidget.vue'
import type { SearchSuggestion } from '@/components/ui/search-widget/SearchWidget.vue'

const suggestions: SearchSuggestion[] = [
    { label: 'Dashboard', value: 'dashboard', group: 'Pages' },
    { label: 'Settings', value: 'settings', group: 'Pages' },
    { label: 'Vue 3', value: 'vue3', group: 'Technologies' },
    { label: 'Tailwind CSS', value: 'tailwind', group: 'Technologies' },
]

function handleSearch(value: string) {
    console.log('Search:', value)
}

function handleSelect(suggestion: SearchSuggestion) {
    console.log('Selected:', suggestion)
}
</script>

<template>
    <SearchWidget
        placeholder="Search..."
        :suggestions="suggestions"
        @search="handleSearch"
        @select="handleSelect"
    />
</template>
```

## 无分组建议

```vue
<script setup>
import SearchWidget from '@/components/ui/search-widget/SearchWidget.vue'

const suggestions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
]
</script>

<template>
    <SearchWidget
        :suggestions="suggestions"
        @select="(s) => console.log(s)"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `placeholder` | `string` | locale: `searchWidget.defaultPlaceholder` |
| `suggestions` | `SearchSuggestion[]` | `[]` |
| `class` | `string` | — |

### SearchSuggestion 类型

| 字段 | 类型 | 说明 |
|------|------|------|
| `label` | `string` | 建议项显示文本 |
| `value` | `string` | 建议项值 |
| `group` | `string` | 可选，分组名称 |

## 事件

| 事件 | 载荷 |
|------|------|
| `search` | `[value: string]` |
| `select` | `[suggestion: SearchSuggestion]` |

## Slots

| Slot | 用途 |
|------|------|
| `actions` | 额外操作区域 |

## 布局

SearchWidget 包含：
- **Command 输入框**：基于 Command 组件的搜索输入
- **建议列表**：输入内容后显示过滤后的建议，按 `group` 字段分组
- **空状态**：无匹配结果时显示 CommandEmpty
- **扩展插槽**：`actions` slot 用于添加自定义操作
