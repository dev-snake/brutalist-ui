---
title: Tooltip 工具提示
description: 工具提示浮层组件，悬停或聚焦时快速展示辅助文本。
---

# Tooltip 工具提示

基于 reka-ui 的 Tooltip 原语构建的新粗野主义风格工具提示，悬停时显示信息文字。

## 预览

<ComponentPreview>
  <TooltipDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="tooltip" />

## 用法

```vue
<script setup>
import { TooltipProvider, Tooltip, TooltipTrigger } from '@/components/ui'
import TooltipContent from '@/components/ui/tooltip/TooltipContent.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>This is a tooltip</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
```

## 配合 Provider 使用

用 `TooltipProvider` 包裹你的应用（或某个区域）以启用工具提示：

```vue
<script setup>
import { TooltipProvider } from '@/components/ui'
</script>

<template>
    <TooltipProvider>
        <router-view />
    </TooltipProvider>
</template>
```

## 触发延迟

通过 `TooltipProvider` 的 `delayDuration` 属性控制从指针进入触发元素到工具提示打开的延迟时间（毫秒）。也可以在单个 `Tooltip` 上通过 `delayDuration` 覆盖全局设置。

```vue
<TooltipProvider :delay-duration="0">
    <Tooltip>
        <TooltipTrigger>
            <Button>立即显示</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>无延迟</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>

<TooltipProvider :delay-duration="700">
    <Tooltip :delay-duration="1500">
        <TooltipTrigger>
            <Button>长延迟</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>覆盖为 1500ms</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `TooltipProvider` | 上下文提供者（必需的祖先组件） |
| `Tooltip` | 根组件（从 reka-ui 重新导出为 `TooltipRoot`） |
| `TooltipTrigger` | 悬停时触发工具提示的元素 |
| `TooltipContent` | 工具提示内容面板 |

## 属性

### TooltipProvider

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `delayDuration` | `number` | `700` | 指针进入触发元素后到工具提示打开的延迟时间（毫秒） |
| `skipDelayDuration` | `number` | `300` | 从一个工具提示移到另一个时跳过延迟的时间窗口（毫秒） |
| `disableHoverableContent` | `boolean` | `false` | 为 `true` 时，指针移入内容区域会关闭工具提示 |

### Tooltip

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `delayDuration` | `number` | `700` | 覆盖 Provider 的延迟时间，针对单个工具提示自定义 |
| `disableHoverableContent` | `boolean` | `false` | 继承自 Provider，可单独覆盖 |
| `disableClosingTrigger` | `boolean` | `false` | 为 `true` 时，点击触发元素不会关闭工具提示 |
| `disabled` | `boolean` | `false` | 为 `true` 时，禁用工具提示 |

### TooltipContent

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
| `sideOffset` | `number` | — |

## 无障碍

- 工具提示在悬停和聚焦时出现
- 按 `Escape` 键关闭工具提示
- 工具提示内容可被屏幕阅读器朗读
