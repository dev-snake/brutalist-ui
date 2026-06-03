---
title: BeforeAfter 对比滑块
description: 拖拽对比滑块组件，用于在同一框架下展示两张图片的差异，提供清晰的拖拽滑块控制。
---

# BeforeAfter 对比滑块

新粗野主义风格的图片滑动对比组件。用于直观比对同一张图在修改前 (Before) 与修改后 (After) 的视觉差异。

## 预览

<ComponentPreview>
  <BeforeAfterDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="before-after" />

## 用法

```vue
<script setup>
import BeforeAfter from '@/components/ui/before-after/BeforeAfter.vue'

const original = '/images/before.jpg'
const modified = '/images/after.jpg'
</script>

<template>
    <BeforeAfter
        :before="original"
        :after="modified"
        :default-value="50"
    />
</template>
```

## 技术方案

本组件基于原生浏览器 `<input type="range">` 结合 CSS 的 `clip-path` 遮罩构建。它能带来以下显著优势：
1. **触控友好**：在手机、平板等移动端设备上完美适配滑动手势。
2. **零依赖**：不需要额外加载任何外部手势交互 JS 库，包体积近乎于零。
3. **完美排版**：底层的 `clip-path: inset(...)` 裁剪方式不会破坏图片的宽高比，确保布局在多端始终对齐。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `before` | `string` | — | 左侧/底层原始图片的 URL (必填) |
| `after` | `string` | — | 右侧/表层对比图片的 URL (必填) |
| `beforeAlt` | `string` | locale: `beforeAfter.before` | 原始图片的 `alt` 属性 |
| `afterAlt` | `string` | locale: `beforeAfter.after` | 对比图片的 `alt` 属性 |
| `defaultValue` | `number` | `50` | 初始状态下分割线所处的百分比位置 (0-100) |
| `disabled` | `boolean` | `false` | 是否禁用拖拽交互 |
| `class` | `string` | `""` | 容器的自定义 CSS 类 |
