---
title: File Card
description: 文件信息卡片，含文件图标、名称、类型徽标、大小和下载按钮。
---

# File Card

新粗野主义风格的文件信息卡片，包含文件图标、文件名、类型徽标、文件大小和下载按钮。

## 预览

<ComponentPreview>
  <FileCardDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block file-card
```

## 用法

```vue
<script setup>
import FileCard from '@/components/ui/file-card/FileCard.vue'

function handleDownload() {
    console.log('Download clicked')
}
</script>

<template>
    <FileCard
        file-name="report-2026.pdf"
        file-size="3.2 MB"
        file-type="PDF"
        @download="handleDownload"
    />
</template>
```

## 多文件列表

```vue
<script setup>
import FileCard from '@/components/ui/file-card/FileCard.vue'

const files = [
    { fileName: 'report.pdf', fileSize: '3.2 MB', fileType: 'PDF' },
    { fileName: 'data.xlsx', fileSize: '1.1 MB', fileType: 'XLSX' },
    { fileName: 'image.png', fileSize: '5.8 MB', fileType: 'PNG' },
]
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FileCard
            v-for="(file, i) in files"
            :key="i"
            v-bind="file"
            @download="() => console.log(file.fileName)"
        />
    </div>
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `fileName` | `string` | locale: `fileCard.defaultFileName` |
| `fileSize` | `string` | `''` |
| `fileType` | `string` | `''` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `download` | `[]` |

## 布局

FileCard 包含：
- **文件图标**：强调色方块内的 FileIcon
- **文件名**：加粗文本，超长截断
- **类型徽标**（可选）：secondary 变体 Badge
- **文件大小**（可选）：弱化小字
- **下载按钮**：primary 变体，全宽，带 Download 图标
