---
title: Accordion 折叠面板
description: 折叠面板组件，用于在一个垂直堆叠的列表中展示和折叠内容。
---

# Accordion 折叠面板

可折叠的面板列表，适用于展示常见问题解答（FAQ）、详细条款或分步信息折叠。

## 预览

<ComponentPreview>
  <AccordionDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="accordion" />

## 用法

```vue
<script setup>
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
</script>

<template>
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>这里是面板标题 1</AccordionTrigger>
            <AccordionContent>
                这里是折叠面板内容 1。
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>这里是面板标题 2</AccordionTrigger>
            <AccordionContent>
                这里是折叠面板内容 2。
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</template>
```

## 变体

可以使用 `AccordionItem` 的 `variant` 属性来设置不同的粗野主义风格：

| 变体 | 说明 |
|------|------|
| `default` | 默认带有黑粗边框和右下方偏移实心阴影 |
| `flat` | 仅带有黑粗边框，无任何投影效果 |
| `ghost` | 透明背景，无边框和阴影，简约展示 |
| `interactive` | 在悬停时拥有阴影放大和位移，交互感更强 |

```vue
<template>
    <AccordionItem value="item" variant="interactive">
        <AccordionTrigger>交互式折叠子项</AccordionTrigger>
        <AccordionContent>Hover 看看！有悬停偏移效果。</AccordionContent>
    </AccordionItem>
</template>
```

## Props

### Accordion Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'single' \| 'multiple'` | — | 展开模式，单选或多选 |
| `collapsible` | `boolean` | `false` | 在 `type="single"` 模式下是否允许关闭全部子项 |
| `disabled` | `boolean` | `false` | 是否禁用整个折叠面板 |
| `modelValue` | `string \| string[]` | — | 当前选中的面板值 |

### AccordionItem Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string` | — | 唯一的标示值 (必填) |
| `variant` | `'default' \| 'flat' \| 'ghost' \| 'interactive'` | `'default'` | 视觉风格变体 |
| `disabled` | `boolean` | `false` | 是否禁用此子项 |
