---
title: Command 命令面板
description: 命令面板组件，支持键盘快捷键、分组过滤和快捷指令执行。
---

# Command 命令面板

新粗野主义风格的命令面板组件，用于搜索和导航。基于 cmdk，通过 reka-ui 模式构建。

## 预览

<ComponentPreview>
  <CommandDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="command" />

## 用法

```vue
<script setup>
import Command from '@/components/ui/command/Command.vue'
import CommandInput from '@/components/ui/command/CommandInput.vue'
import CommandList from '@/components/ui/command/CommandList.vue'
import CommandEmpty from '@/components/ui/command/CommandEmpty.vue'
import CommandGroup from '@/components/ui/command/CommandGroup.vue'
import CommandItem from '@/components/ui/command/CommandItem.vue'
import CommandSeparator from '@/components/ui/command/CommandSeparator.vue'
import CommandShortcut from '@/components/ui/command/CommandShortcut.vue'
</script>

<template>
    <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
                <CommandItem value="calendar">Calendar</CommandItem>
                <CommandItem value="search">Search Emoji</CommandItem>
                <CommandItem value="calculator">Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
                <CommandItem value="profile">Profile</CommandItem>
                <CommandItem value="billing">Billing</CommandItem>
                <CommandItem value="settings">Settings</CommandItem>
            </CommandGroup>
        </CommandList>
    </Command>
</template>
```

## 命令对话框

使用 `CommandDialog` 实现模态命令面板：

```vue
<script setup>
import { ref } from 'vue'
import CommandDialog from '@/components/ui/command/CommandDialog.vue'
import CommandInput from '@/components/ui/command/CommandInput.vue'
import CommandList from '@/components/ui/command/CommandList.vue'
import CommandEmpty from '@/components/ui/command/CommandEmpty.vue'
import CommandGroup from '@/components/ui/command/CommandGroup.vue'
import CommandItem from '@/components/ui/command/CommandItem.vue'

const open = ref(false)
</script>

<template>
    <button @click="open = true">Open Command Palette</button>
    <CommandDialog v-model:open="open">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
                <CommandItem value="new">New File</CommandItem>
                <CommandItem value="open">Open File</CommandItem>
            </CommandGroup>
        </CommandList>
    </CommandDialog>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `Command` | 根容器 |
| `CommandDialog` | 模态对话框包装器 |
| `CommandInput` | 搜索输入框 |
| `CommandList` | 可滚动列表容器 |
| `CommandEmpty` | 无匹配结果时显示 |
| `CommandGroup` | 带标题的分组区域 |
| `CommandItem` | 可选项 |
| `CommandSeparator` | 分组之间的视觉分隔线 |
| `CommandShortcut` | 键盘快捷键提示 |

## Props

### CommandInput

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `modelValue` | `string` | — |
| `placeholder` | `string` | — |

### CommandItem

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `value` | `string` | — |
| `disabled` | `boolean` | — |

### CommandGroup

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `heading` | `string` | — |

### CommandDialog

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `open` | `boolean` | — |
