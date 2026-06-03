---
title: Popover 弹出层
description: 浮层弹出框，支持在指定元素周围展示复杂的气泡内容。
---

# Popover 弹出层

新粗野主义风格的弹出层组件，用于显示锚定到触发元素的浮动内容。

## 预览

<ComponentPreview>
  <PopoverDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="popover" />

## 用法

```vue
<script setup>
import { Popover, PopoverTrigger, PopoverAnchor } from '@/components/ui'
import PopoverContent from '@/components/ui/popover/PopoverContent.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
            <div class="grid gap-4">
                <div class="space-y-2">
                    <h4 class="font-black leading-none">Dimensions</h4>
                    <p class="text-sm text-brutal-muted-foreground">
                        Set the dimensions for the layer.
                    </p>
                </div>
            </div>
        </PopoverContent>
    </Popover>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `Popover` | 根组件（从 reka-ui 的 `PopoverRoot` 重新导出） |
| `PopoverTrigger` | 打开弹出层的按钮 |
| `PopoverContent` | 弹出层内容面板 |
| `PopoverAnchor` | 用于定位的锚点元素 |

## Props

### PopoverContent

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` |
| `sideOffset` | `number` | — |

## 无障碍

- 弹出层打开时，焦点被限制在弹出层内
- 按 `Escape` 关闭弹出层
- 点击外部区域关闭弹出层
