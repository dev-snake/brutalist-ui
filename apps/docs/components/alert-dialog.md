---
title: Alert Dialog 提示对话框
description: 提示对话框组件，用于需要用户明确确认的操作，无障碍适配良好。
---

# Alert Dialog 提示对话框

新粗野主义风格的确认对话框，需要用户交互。基于 reka-ui 的 AlertDialog 原语构建。

## 预览

<ComponentPreview>
  <AlertDialogDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="alert-dialog" />

## 用法

```vue
<script setup>
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@/components/ui'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <AlertDialog>
        <AlertDialogTrigger as-child>
            <Button variant="danger">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `AlertDialog` | 根组件（从 reka-ui 的 `AlertDialogRoot` 重新导出） |
| `AlertDialogTrigger` | 打开对话框的按钮 |
| `AlertDialogContent` | 对话框内容面板 |
| `AlertDialogHeader` | 标题和描述的头部容器 |
| `AlertDialogFooter` | 操作按钮的底部容器 |
| `AlertDialogTitle` | 对话框标题 |
| `AlertDialogDescription` | 对话框描述文本 |
| `AlertDialogAction` | 确认操作按钮 |
| `AlertDialogCancel` | 关闭对话框的取消按钮 |

## Props

### AlertDialogContent

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `showCloseButton` | `boolean` | `true` |
| `class` | `string` | — |

### AlertDialogAction / AlertDialogCancel

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |

## 无障碍

- 对话框打开时，焦点被限制在对话框内
- 按 `Escape` 关闭对话框
- `AlertDialogCancel` 点击后关闭对话框
- `AlertDialogAction` 确认并关闭对话框
