---
title: Scroll Area 滚动区域
description: 自定义滚动区域组件，提供符合新粗野主义外观的厚滚动条。
---

# Scroll Area 滚动区域

基于 reka-ui 的 ScrollArea 原语构建的新粗野主义风格滚动区域，带有自定义滚动条样式。

## 预览

<ComponentPreview>
  <ScrollAreaDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="scroll-area" />

## 用法

```vue
<script setup>
import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue'
</script>

<template>
    <ScrollArea class="h-72 w-48 border-3 border-brutal">
        <div class="p-4">
            <h4 class="mb-4 text-sm font-black leading-none">Tags</h4>
            <div class="space-y-1">
                <div v-for="tag in tags" :key="tag" class="text-sm font-medium">
                    {{ tag }}
                </div>
            </div>
        </div>
    </ScrollArea>
</template>
```

## 水平滚动

```vue
<script setup>
import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue'
import ScrollBar from '@/components/ui/scroll-area/ScrollBar.vue'
</script>

<template>
    <ScrollArea class="w-96 border-3 border-brutal">
        <div class="flex w-max space-x-4 p-4">
            <div v-for="artwork in artworks" :key="artwork" class="shrink-0">
                <div class="h-[250px] w-[200px] border-3 border-brutal bg-brutal-muted" />
            </div>
        </div>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `ScrollArea` | 根可滚动容器 |
| `ScrollBar` | 自定义滚动条（默认垂直，支持水平） |

## 属性

### ScrollArea

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |

### ScrollBar

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` |
| `class` | `string` | — |
