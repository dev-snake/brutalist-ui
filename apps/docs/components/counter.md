---
title: Counter 数字滚动
description: 基于 requestAnimationFrame 的数字滚动动画组件，支持缓动函数、前后缀、千位分隔符，适合展示统计数字。
---

# Counter 数字滚动

纯原生 `requestAnimationFrame` 驱动的数字缓动动画，无第三方动画库依赖，配合 Hero 区块和 Dashboard 统计展示效果极佳。

## 预览

<ComponentPreview>
  <CounterDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="counter" />

## 用法

```vue
<script setup>
import { Counter } from '@/components/ui/counter'
import { ref } from 'vue'

const counterRef = ref()
</script>

<template>
    <!-- 基础用法 -->
    <Counter :to="12800" suffix="+" size="lg" />

    <!-- 小数点 -->
    <Counter :to="99.9" :decimals="1" suffix="%" />

    <!-- 手动控制 -->
    <Counter ref="counterRef" :to="500" :auto-start="false" />
    <button @click="counterRef.start()">开始</button>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `to` | `number` | — | 目标数值（必填） |
| `from` | `number` | `0` | 起始数值 |
| `duration` | `number` | `2000` | 动画时长（毫秒） |
| `decimals` | `number` | `0` | 小数位数 |
| `prefix` | `string` | `''` | 数字前缀（如 `¥` `$`） |
| `suffix` | `string` | `''` | 数字后缀（如 `+` `%`） |
| `separator` | `string` | `','` | 千位分隔符，传空字符串可禁用 |
| `easing` | `'linear' \| 'ease-out' \| 'ease-in-out'` | `'ease-out'` | 缓动函数 |
| `autoStart` | `boolean` | `true` | 是否挂载后自动播放 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 字号预设 |
| `class` | `string` | — | 自定义样式类 |

## 事件

| 事件 | 参数 | 说明 |
|------|------|------|
| `complete` | — | 动画播放完毕时触发 |

## 暴露方法（`defineExpose`）

| 方法 | 说明 |
|------|------|
| `start()` | 从 `from` 重新开始播放动画 |
| `stop()` | 立即停止动画 |
