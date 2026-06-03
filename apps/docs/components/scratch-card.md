---
title: ScratchCard 刮刮卡
description: Canvas 覆盖层驱动的刮刮卡组件，支持自定义覆盖层、进度回调和键盘可访问。
---

# ScratchCard 刮刮卡

新粗野主义风格的刮刮卡组件，使用 HTML5 Canvas 覆盖在底稿内容上方，绘制斑驳条纹层。用户用鼠标/手指擦除一定面积后，Canvas 淡出并销毁，完全露出插槽中的 Vue 内容。

## 预览

<ComponentPreview>
  <ScratchCardDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="scratch-card" />

## 用法

```vue
<script setup>
import ScratchCard from '@/components/ui/scratch-card/ScratchCard.vue'
</script>

<template>
    <ScratchCard class="w-full max-w-sm h-48">
        <div class="flex items-center justify-center h-full bg-brutal-accent">
            <p class="text-2xl font-black">🎉 恭喜中奖！</p>
        </div>
    </ScratchCard>
</template>
```

## 自定义覆盖层

默认绘制 Neobrutalist 双色条纹图案（`--brutal-primary` + `--brutal-secondary`）。可通过 `overlayColor` prop 设置纯色覆盖层：

```vue
<ScratchCard overlay-color="#FFE66D">
    <p>底稿内容</p>
</ScratchCard>
```

## 无障碍

- 组件设置了 `role="region"`、`aria-label="刮刮卡"` 和 `tabindex="0"`
- 按 `Enter` 或 `Space` 键可自动揭开全部内容
- 当用户偏好 `prefers-reduced-motion: reduce` 时，淡出动画被跳过，Canvas 立即移除

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `percentage` | `number` | `50` | 自动刮除全部的面积百分比阈值 (0-100) |
| `brushRadius` | `number` | `20` | 刮除画笔擦头半径 (px) |
| `overlayColor` | `string` | — | 覆盖层底色，不设则默认绘制双色条纹图案 |
| `fadeDuration` | `number` | `300` | 达到阈值后 Canvas 淡出动画时长 (ms) |
| `class` | `string` | — | 外部类覆盖 |

## 事件

| 事件 | 参数 | 说明 |
|------|------|------|
| `@progress` | `(percent: number)` | 刮除进度改变回调（已节流） |
| `@completed` | — | 刮开完成（达阈值淡出后）触发 |

## 插槽

| 插槽 | 说明 |
|------|------|
| `default` | 刮刮卡底稿内容 |

## 暴露属性/方法

| 名称 | 说明 |
|------|------|
| `isRevealed` | 是否已揭开 |
| `revealAll()` | 立即揭开全部内容 |
