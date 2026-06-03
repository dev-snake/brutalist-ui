# Brutx UI

新粗野主义 Vue 3 组件库，支持 CLI 工具。将组件复制到你的代码库中，获得完全的自定义控制权。

[![npm version](https://img.shields.io/npm/v/brutx-ui-vue.svg?style=flat-square&color=FF6B6B)](https://www.npmjs.com/package/brutx-ui-vue)
[![npm downloads](https://img.shields.io/npm/dm/brutx-ui-vue.svg?style=flat-square)](https://www.npmjs.com/package/brutx-ui-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-4ECDC4.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-FFE66D.svg?style=flat-square)](https://www.typescriptlang.org/)

## 特性

-   **CLI 工具**：通过 `npx brutx@latest` 将组件复制到你的代码库
-   **完全控制**：拥有并自定义每一个组件
-   粗野主义包装器：粗边框、偏移阴影、鲜艳色彩
-   Tailwind 就绪令牌：background/foreground/primary/secondary/destructive、ring、input、card 等。通过 `.dark` 支持暗色模式
-   基于 reka-ui 的无头原语、CVA 变体、tailwind-merge `cn()`

## 安装

使用 CLI 将组件添加到你的项目：

```bash
# 初始化你的项目
npx brutx@latest init

# 添加组件
npx brutx@latest add button card badge

# 或添加全部组件
npx brutx@latest add --all
```

## 用法

添加组件后，从你的项目中导入它们：

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>欢迎使用 Brutx</CardTitle>
    </CardHeader>
    <CardContent class="space-y-3">
      <Input placeholder="邮箱" />
      <Button variant="primary">开始使用</Button>
      <Button variant="outline" size="sm">
        了解更多
      </Button>
    </CardContent>
  </Card>
</template>
```

## CLI 命令

| 命令                               | 说明                           |
| ---------------------------------- | ------------------------------ |
| `npx brutx@latest init`            | 使用 components.json 初始化项目 |
| `npx brutx@latest add <component>` | 添加指定组件                   |
| `npx brutx@latest add --all`       | 添加全部组件                   |

## 备注

-   暗色模式：在 `html` 或 `body` 上添加/移除 `.dark` 以切换主题。
-   组件会复制到你的项目中，让你拥有完全的所有权和自定义控制权。
-   令牌可通过设置 CSS 变量（`--background`、`--primary` 等）进行覆盖。
