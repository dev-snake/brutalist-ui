---
title: Marquee 跑马灯
description: 无限水平循环滚动的跑马灯横幅组件，粗犷动感的视觉表现非常契合新粗野主义风格。
---

# Marquee 跑马灯

水平跑马灯组件，能够将文本、图片或任意卡片内容在水平轨道上进行无限无缝循环滚动。适合在营销页、Hero 引导区展示推荐标语或合作品牌。

## 预览

<ComponentPreview>
  <MarqueeDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="marquee" />

## 用法

```vue
<script setup>
import Marquee from '@/components/ui/marquee/Marquee.vue'
</script>

<template>
    <Marquee :speed="20" fade>
        <span>⚡️ FAST AND FLUID</span>
        <span>💥 NEO-BRUTALISM</span>
        <span>🚀 VUE 3 + TAILWIND</span>
    </Marquee>
</template>
```

## 功能特性

- **双向滚动**：通过 `direction` 属性可以控制内容向左 (`left`) 或向右 (`right`) 滚动。
- **悬停暂停**：开启 `pauseOnHover` 属性后，鼠标悬停时滚动会自动暂停，方便用户阅读。
- **边缘淡化**：配置 `fade` 属性，会在组件左右两侧生成透明度渐变遮罩，使内容过渡更为柔和。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `'left' \| 'right'` | `'left'` | 跑马灯滚动方向 |
| `speed` | `number` | `20` | 单次循环所耗费的秒数（数值越小速度越快） |
| `pauseOnHover` | `boolean` | `false` | 鼠标悬停时是否暂停动画 |
| `fade` | `boolean` | `false` | 是否开启左右边缘淡入淡出遮罩效果 |
| `class` | `string` | `""` | 容器的自定义 CSS 类 |
