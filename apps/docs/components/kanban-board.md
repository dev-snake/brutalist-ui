---
title: KanbanBoard 看板
description: 基于原生 HTML5 拖拽 API 的看板组件，支持多列卡片拖拽移动、标签、颜色标记，适合任务管理场景。
---

# KanbanBoard 看板

轻量级、无外部拖拽库依赖的看板组件，粗边框列 + 硬朗阴影卡片尽显新粗野主义张力。

## 预览

<ComponentPreview>
  <KanbanBoardDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="kanban" />

## 用法

```vue
<script setup>
import { KanbanBoard } from '@/components/ui/kanban'
import type { KanbanColumn } from '@/components/ui/kanban'
import { ref } from 'vue'

const columns = ref<KanbanColumn[]>([
    {
        id: 'todo',
        title: '待办',
        color: '#FFE66D',
        cards: [
            { id: 'c1', title: '需求分析', tags: ['研发'] },
        ],
    },
    {
        id: 'done',
        title: '已完成',
        cards: [],
    },
])
</script>

<template>
    <KanbanBoard
        v-model="columns"
        @card-move="(id, from, to) => console.log(id, from, to)"
    />
</template>
```

## 数据类型

```ts
interface KanbanCard {
    id: string
    title: string
    description?: string
    tags?: string[]
    color?: string
}

interface KanbanColumn {
    id: string
    title: string
    color?: string
    cards: KanbanCard[]
}
```

## Props

### KanbanBoard Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `KanbanColumn[]` | — | 看板数据（v-model） |
| `class` | `string` | — | 根节点自定义样式类 |

## 事件

| 事件 | 参数 | 说明 |
|------|------|------|
| `update:modelValue` | `KanbanColumn[]` | 列数据更新（卡片移动后） |
| `card-move` | `(cardId: string, fromColumn: string, toColumn: string)` | 卡片跨列移动完成时触发 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `add-{columnId}` | 在指定列底部插入自定义内容（如「添加卡片」按钮） |
