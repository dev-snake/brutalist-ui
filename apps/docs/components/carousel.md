---
title: Carousel 轮播图
description: 基于 Embla Carousel 的高性能轮播组件，支持自动播放、循环、小圆点导航与新粗野主义视觉风格。
---

# Carousel 轮播图

由 Embla Carousel 驱动的触摸友好型轮播组件，具备流畅的物理滑动惯性，适用于图片画廊、产品展示、功能介绍等场景。

## 预览

<ComponentPreview>
  <CarouselDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="carousel" />

## 用法

```vue
<script setup>
import { Carousel, CarouselItem } from '@/components/ui/carousel'
</script>

<template>
    <Carousel :loop="true" :autoplay="true" :autoplay-delay="3000" size="md">
        <CarouselItem>
            <div class="w-full h-full flex items-center justify-center bg-brutal-primary border-3 border-brutal">
                幻灯片 1
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="w-full h-full flex items-center justify-center bg-brutal-secondary border-3 border-brutal">
                幻灯片 2
            </div>
        </CarouselItem>
    </Carousel>
</template>
```

## Props

### Carousel Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `loop` | `boolean` | `false` | 是否开启首尾循环滚动 |
| `autoplay` | `boolean` | `false` | 是否自动播放 |
| `autoplayDelay` | `number` | `3000` | 自动播放间隔（毫秒） |
| `showArrows` | `boolean` | `true` | 是否显示左右切换箭头 |
| `showDots` | `boolean` | `true` | 是否显示底部导航圆点 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full' \| 'auto'` | `'auto'` | 轮播容器高度预设 |
| `class` | `string` | — | 根节点自定义样式类 |

### CarouselItem Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `class` | `string` | — | 单张幻灯片容器自定义样式类 |

## 事件

Carousel 不对外暴露独立事件，所有交互通过鼠标悬停自动暂停 / 离开恢复播放实现。如需访问 Embla API，可通过 `ref` + 内部 `emblaApi` 的方式进行扩展。

## 无障碍

- 左右箭头按钮均带有 `aria-label`
- 导航圆点按钮均带有 `aria-label`
- 键盘焦点管理由 Embla 内置支持
