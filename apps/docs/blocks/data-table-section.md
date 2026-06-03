---
title: Data Table Section
description: 数据表格区块，带有搜索、排序和分页功能。
---

# Data Table Section

新粗野主义风格的数据表格区块，包含搜索过滤、列排序和分页功能。

## 预览

<ComponentPreview>
  <DataTableSectionDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block data-table-section
```

## 用法

```vue
<script setup>
import DataTableSection from '@/components/ui/data-table-section/DataTableSection.vue'
import type { ColumnDef } from '@/components/ui/data-table-section/DataTableSection.vue'

const columns: ColumnDef[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role' },
]

const rows = [
    { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { name: 'Bob', email: 'bob@example.com', role: 'User' },
    { name: 'Charlie', email: 'charlie@example.com', role: 'Editor' },
]

function handleRowClick(row) {
    console.log('Row clicked:', row)
}

function handleSort(payload) {
    console.log('Sort:', payload)
    // payload: { key: string; direction: 'asc' | 'desc' }
}
</script>

<template>
    <DataTableSection
        title="Users"
        :columns="columns"
        :rows="rows"
        :searchable="true"
        :page-size="10"
        @row-click="handleRowClick"
        @sort="handleSort"
    />
</template>
```

## 禁用搜索

```vue
<script setup>
import DataTableSection from '@/components/ui/data-table-section/DataTableSection.vue'
</script>

<template>
    <DataTableSection
        title="Simple Table"
        :columns="columns"
        :rows="rows"
        :searchable="false"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `dataTableSection.defaultTitle` |
| `columns` | `ColumnDef[]` | `[]` |
| `rows` | `Record<string, unknown>[]` | `[]` |
| `searchable` | `boolean` | `true` |
| `pageSize` | `number` | `10` |
| `class` | `string` | — |

### ColumnDef 类型

| 字段 | 类型 | 说明 |
|------|------|------|
| `key` | `string` | 列数据字段名 |
| `label` | `string` | 列标题显示文本 |
| `sortable` | `boolean` | 可选，是否可排序 |

## 事件

| 事件 | 载荷 |
|------|------|
| `row-click` | `[row: Record<string, unknown>]` |
| `sort` | `[{ key: string; direction: 'asc' \| 'desc' }]` |

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换/扩展区块头部 |
| `default` | 替换区块主体内容（含表格和分页） |
| `footer` | 替换/扩展区块底部 |

## 布局

DataTableSection 包含：
- **头部**：标题区域
- **搜索框**：Input 组件，仅在 `searchable` 为 `true` 时显示
- **数据表格**：Table 组件，包含可排序的表头和可点击的数据行
  - 可排序列显示排序图标（ArrowUpDown / ArrowUp / ArrowDown）
  - 无数据时显示空状态文本
- **分页**：Pagination 组件，仅在总页数大于 1 时显示
