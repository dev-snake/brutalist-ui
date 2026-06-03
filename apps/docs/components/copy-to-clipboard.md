---
title: CopyToClipboard 复制按钮
description: 带有强烈触感和物理拟真反馈的复制按钮组件，能够一键复制指定文本。
---

# CopyToClipboard 复制按钮

一键复制到剪贴板组件，当用户点击并成功复制时，按钮会在 2 秒内显示成功的物理压下状态及绿色徽标反馈。

## 预览

<ComponentPreview>
  <CopyToClipboardDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="copy-to-clipboard" />

## 用法

```vue
<script setup>
import CopyToClipboard from '@/components/ui/copy-to-clipboard/CopyToClipboard.vue'
</script>

<template>
    <CopyToClipboard text="pnpm install brutx-ui-vue" />
</template>
```

## 自定义展示插槽

组件提供了默认插槽，它暴露了 `copied` 状态（是否刚复制成功），支持您自定义按钮的各种显示形式。

```vue
<script setup>
import CopyToClipboard from '@/components/ui/copy-to-clipboard/CopyToClipboard.vue'
</script>

<template>
    <CopyToClipboard text="Custom Text">
        <template #default="{ copied }">
            <span>{{ copied ? '成功啦！' : '点此复制' }}</span>
        </template>
    </CopyToClipboard>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `string` | — | 需要拷贝到剪贴板的文本 (必填) |
| `duration` | `number` | `2000` | 复制成功反馈（"已复制"状态）的保持毫秒数 |
| `class` | `string` | `""` | 按钮容器自定义样式类 |
