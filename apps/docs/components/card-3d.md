---
title: Card3D 3D 悬浮卡片
description: 3D 物理悬浮卡片，鼠标悬停时产生 3D 旋转偏转与反向阴影投影。
---

# Card3D 3D 悬浮卡片

新粗野主义风格的 3D 交互卡片，通过捕捉指针相对卡片中心的坐标偏移，产生流畅的 3D 旋转偏转，阴影层朝反方向位移产生实体立体质感。

## 预览

<ComponentPreview>
  <Card3DDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="card-3d" />

## 用法

```vue
<script setup>
import Card3D from '@/components/ui/card-3d/Card3D.vue'
</script>

<template>
    <Card3D class="w-full max-w-sm">
        <div class="p-6">
            <h3 class="text-lg font-black mb-2">3D 悬浮卡片</h3>
            <p class="text-sm">将鼠标移入卡片，体验 3D 物理偏转效果。</p>
        </div>
    </Card3D>
</template>
```

## 阴影变体

| 变体 | 说明 |
|------|------|
| `default` | 标准阴影偏移 |
| `lg` | 大阴影偏移 |
| `xl` | 超大阴影偏移 |

## 无障碍

- 组件设置了 `role="region"` 和 `aria-label="3D 交互卡片"`
- 当用户偏好 `prefers-reduced-motion: reduce` 时，自动禁用 3D 偏转效果
- 可通过 `disabled` prop 完全禁用 3D 效果

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `maxRotation` | `number` | `15` | 最大偏转角度（度） |
| `perspective` | `number` | `1000` | 3D 透视深度 (px) |
| `scale` | `number` | `1.02` | Hover 时的缩放比例 |
| `shadowOffset` | `number` | `10` | 阴影最大物理位移像素量 (px) |
| `shadow` | `'default' \| 'lg' \| 'xl'` | `'default'` | 阴影大小变体 |
| `disabled` | `boolean` | `false` | 禁用 3D 效果，卡片保持静态 |
| `class` | `string` | — | 外部类覆盖 |
