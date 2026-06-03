---
title: Sheet 抽屉
description: 滑动抽屉组件，支持从上、下、左、右四个方向滑出。
---

# Sheet 抽屉

新粗野主义风格的侧边面板组件，可从任意边缘滑入。基于 reka-ui 的 Dialog 原语构建。

## 预览

<ComponentPreview>
  <SheetDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="sheet" />

## 用法

```vue
<script setup>
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetClose,
} from '@/components/ui'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
            <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here.
                </SheetDescription>
            </SheetHeader>
            <div class="py-4">
                <p class="text-sm">Sheet content goes here.</p>
            </div>
            <SheetFooter>
                <SheetClose as-child>
                    <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button variant="primary">Save</Button>
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>
```

## 方向变体

| 方向 | 说明 |
|------|------|
| `top` | 从顶部滑入 |
| `bottom` | 从底部滑入 |
| `left` | 从左侧滑入（最大 `sm:max-w-sm`） |
| `right` | 从右侧滑入（默认，最大 `sm:max-w-sm`） |

```vue
<script setup>
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button>Open Left Sheet</Button>
        </SheetTrigger>
        <SheetContent side="left">
            <p>Content slides in from the left.</p>
        </SheetContent>
    </Sheet>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `Sheet` | 根组件（从 reka-ui 重新导出为 `DialogRoot`） |
| `SheetTrigger` | 打开面板的按钮 |
| `SheetContent` | 带方向变体的面板内容 |
| `SheetHeader` | 头部容器 |
| `SheetFooter` | 底部容器 |
| `SheetTitle` | 面板标题 |
| `SheetDescription` | 面板描述文字 |
| `SheetClose` | 关闭按钮 |

## 属性

### SheetContent

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'right'` |
| `class` | `string` | — |

### SheetHeader / SheetFooter / SheetTitle / SheetDescription

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
