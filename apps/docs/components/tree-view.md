---
title: TreeView 树形目录
description: 递归树形组件，支持节点展开折叠、单选、图标、自定义缩进，适合文件系统、分类层级等场景。
---

# TreeView 树形目录

可递归展开的层级数据可视化组件，内置文件夹 / 文件图标，支持键盘导航与受控单选状态。

## 预览

<ComponentPreview>
  <TreeViewDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="tree-view" />

## 用法

```vue
<script setup>
import { TreeView } from '@/components/ui/tree-view'
import type { TreeNode } from '@/components/ui/tree-view'

const nodes: TreeNode[] = [
    {
        id: 'src',
        label: 'src',
        children: [
            { id: 'button', label: 'Button.vue' },
            { id: 'input', label: 'Input.vue' },
        ],
    },
    { id: 'pkg', label: 'package.json' },
]

const selected = ref(null)
</script>

<template>
    <TreeView
        v-model="selected"
        :nodes="nodes"
        :default-expanded="['src']"
    />
</template>
```

## TreeNode 类型

```ts
interface TreeNode {
    id: string       // 唯一标识
    label: string    // 显示文本
    children?: TreeNode[]  // 子节点（省略则为叶节点）
    data?: unknown   // 自定义附加数据
}
```

## Props

### TreeView Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `nodes` | `TreeNode[]` | — | 树形数据源 |
| `modelValue` | `string \| null` | `null` | 当前选中节点的 id（v-model） |
| `defaultExpanded` | `string[]` | `[]` | 初始展开的节点 id 列表 |
| `class` | `string` | — | 根节点自定义样式类 |

## 事件

| 事件 | 参数 | 说明 |
|------|------|------|
| `update:modelValue` | `string \| null` | 选中节点 id 变更 |
| `select` | `TreeNode` | 点击任意节点时触发 |
| `expand` | `(id: string, expanded: boolean)` | 展开 / 折叠节点时触发 |
