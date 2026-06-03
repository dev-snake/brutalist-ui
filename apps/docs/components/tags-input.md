---
title: TagsInput 标签输入
description: 标签输入框组件，用于输入或粘贴以添加标签、分类，支持键盘快捷键和退格键删除。
---

# TagsInput 标签输入

新粗野主义风格的标签录入组件，常用于文章标签、邮件收件人、关键词筛选等表单场景。

## 预览

<ComponentPreview>
  <TagsInputDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="tags-input" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import {
    TagsInput,
    TagsInputInput,
    TagsInputItem,
    TagsInputItemText,
    TagsInputItemDelete
} from '@/components/ui/tags-input'

const tags = ref(['vue', 'css'])
</script>

<template>
    <TagsInput v-model="tags">
        <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
            <TagsInputItemText>{{ tag }}</TagsInputItemText>
            <TagsInputItemDelete />
        </TagsInputItem>
        <TagsInputInput placeholder="Add tag..." />
    </TagsInput>
</template>
```

## 变体

可以使用 `TagsInputItem` 的 `variant` 属性定制单个标签的配色方案：

| 变体 | 颜色说明 |
|------|----------|
| `primary` | 默认珊瑚红背景，配黑色粗边框 |
| `secondary` | 薄荷青背景 |
| `accent` | 粗野黄色背景 |
| `success` | 经典绿色背景 |
| `danger` | 经典红色背景 |
| `default` | 纯白背景 |

```vue
<template>
    <TagsInputItem value="css" variant="secondary">
        <TagsInputItemText>CSS</TagsInputItemText>
        <TagsInputItemDelete />
    </TagsInputItem>
</template>
```

## Props

### TagsInput Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string[]` | `[]` | 标签数据列表 |
| `disabled` | `boolean` | `false` | 是否禁用输入 |
| `max` | `number` | — | 最大允许标签数 |
| `addOnPaste` | `boolean` | `false` | 是否在粘贴时根据分词自动添加标签 |

### TagsInputItem Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string` | — | 标签值 (必填) |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'danger' \| 'success'` | `'primary'` | 标签的视觉配色变体 |
| `disabled` | `boolean` | `false` | 是否禁用此标签 |
