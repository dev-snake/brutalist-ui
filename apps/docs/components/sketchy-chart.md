---
title: SketchyChart 手绘图表
description: SVG + 分形噪声滤镜驱动的手绘感折线/柱状/饼图表，零外部依赖。
---

# SketchyChart 手绘图表

新粗野主义风格的手绘感图表组件，纯 Vue 使用 `<svg>` 绘制。利用 SVG 分形噪声滤镜让坐标轴、折线和柱体边缘产生波动，完美拟合手写草稿质感。零外部依赖。

## 预览

<ComponentPreview>
  <SketchyChartDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="sketchy-chart" />

## 用法

```vue
<script setup>
import SketchyChart from '@/components/ui/sketchy-chart/SketchyChart.vue'

const data = [
    { label: 'Jan', value: 30 },
    { label: 'Feb', value: 65 },
    { label: 'Mar', value: 45 },
]
</script>

<template>
    <SketchyChart type="line" :data="data" />
</template>
```

## 图表类型

| 类型 | 说明 |
|------|------|
| `line` | 折线图，带阴影填充区和拐点圆圈 |
| `bar` | 柱状图，带 Hatch 斜线填充和硬投影 |
| `pie` | 饼图，使用设计令牌色板和粗黑边框 |

## 手绘抖动

`sketchiness` prop 控制手绘抖动幅度 (0-10)，值越大抖动越明显：

```vue
<SketchyChart type="line" :data="data" :sketchiness="8" />
```

## 数据处理

- **空数组**：渲染空图表框架（仅坐标轴）
- **负值**：取绝对值
- **大数据集**（>30 项）：自动降采样

## 无障碍

- SVG 设置了 `role="img"` 和 `aria-label`
- 包含 `<title>` 元素供屏幕阅读器读取

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'line' \| 'bar' \| 'pie'` | `'line'` | 图表类型 |
| `data` | `Array<{ label: string, value: number }>` | `[]` | 图表数据源 |
| `sketchiness` | `number` | `2` | 手绘抖动幅度 (0-10) |
| `grid` | `boolean` | `true` | 是否绘制背景网格 |
| `width` | `number` | `600` | 图表宽度 (px) |
| `height` | `number` | `400` | 图表高度 (px) |
| `class` | `string` | — | 外部类覆盖 |
