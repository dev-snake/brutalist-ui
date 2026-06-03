---
title: CodeBlock 代码块
description: 新粗野主义风格的代码块组件，集成文件名称、语言标签以及浮动复制按钮。
---

# CodeBlock 代码块

专门用于展示格式化代码或脚本的卡片式容器。具有高对比度的顶栏、复制动作反馈、并支持开启行号。

## 预览

<ComponentPreview>
  <CodeBlockDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="code-block" />

## 用法

```vue
<script setup>
import CodeBlock from '@/components/ui/code-block/CodeBlock.vue'

const codeString = `const app = createApp(App)
app.mount('#app')`
</script>

<template>
    <CodeBlock
        :code="codeString"
        language="javascript"
        filename="main.js"
        show-line-numbers
    />
</template>
```

## 功能特性

- **一键复制**：右上角无缝集成了 `CopyToClipboard` 按钮，并在复制成功后提供触感物理动画及文本反馈。
- **行号支持**：配置 `show-line-numbers` 属性为 `true` 后，会自动在左侧展示行号列表，且行号栏伴有经典的右侧实心线条分割。
- **插槽扩展**：如果您使用了 `Shiki`、`Prism` 等外部高亮引擎，可以使用默认插槽直接渲染预先高亮过后的 HTML 节点。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `code` | `string` | — | 需要展示的原始代码文本 (必填) |
| `language` | `string` | `'plaintext'` | 代码语言（仅用于顶栏的徽章标签展示） |
| `filename` | `string` | `""` | 文件名或路径名，展示在顶栏左侧 |
| `showLineNumbers` | `boolean` | `false` | 是否在代码左侧展示行号 |
| `class` | `string` | `""` | 组件卡片容器的自定义样式类 |
