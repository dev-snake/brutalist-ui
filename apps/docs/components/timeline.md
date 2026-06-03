---
title: Timeline 时间线
description: 时间线组件，用于垂直或水平展示一系列时间事件、里程碑或活动日志。
---

# Timeline 时间线

以一条主线串联的流式信息展示组件，适用于构建企业发展里程碑、版本发布日志、以及任务审批进度流程。

## 预览

<ComponentPreview>
  <TimelineDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="timeline" />

## 用法

```vue
<script setup>
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent
} from '@/components/ui/timeline'
</script>

<template>
    <Timeline orientation="vertical">
        <!-- 节点 1 -->
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="primary" shape="circle">1</TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent class="pl-2">
                <div class="font-black">第一阶段</div>
                <p class="font-normal text-sm mt-1">这里是第一阶段的信息说明。</p>
            </TimelineContent>
        </TimelineItem>
        
        <!-- 节点 2 -->
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="accent" shape="square">2</TimelineDot>
            </TimelineSeparator>
            <TimelineContent class="pl-2">
                <div class="font-black">第二阶段</div>
                <p class="font-normal text-sm mt-1">这里是第二阶段的信息说明。</p>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
</template>
```

## 节点属性配置

`TimelineDot` 支持多样化的新粗野主义几何设计与颜色主题，通过 `shape` 和 `variant` 进行自定义：

### 形状选择 (`shape`)
- `circle` (默认)：经典的圆形小徽章。
- `square`：方正的硬朗线条卡片。
- `diamond`：斜向 45 度旋转的菱形（文字插槽内容会被内部自动反向微调，以防排版发生倾斜）。

### 配色变体 (`variant`)
- `'primary' | 'secondary' | 'accent' | 'success' | 'danger' | 'default'`

## Props

### Timeline Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | 时间线排版布局朝向 |
| `class` | `string` | `""` | 整体包裹容器自定义样式类 |

### TimelineDot Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'success' \| 'danger'` | `'accent'` | 配色变体 |
| `shape` | `'circle' \| 'square' \| 'diamond'` | `'circle'` | 几何形态变体 |
| `class` | `string` | `""` | 节点微标的自定义样式类 |
