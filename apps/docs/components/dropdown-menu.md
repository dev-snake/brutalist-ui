---
title: Dropdown Menu 下拉菜单
description: 下拉菜单组件，支持嵌套子菜单、复选菜单项、单选菜单项。
---

# Dropdown Menu 下拉菜单

新粗野主义风格的下拉菜单，基于 reka-ui 的 DropdownMenu 原语构建，支持菜单项、复选框、单选组、子菜单和快捷键。

## 预览

<ComponentPreview>
  <DropdownMenuDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="dropdown-menu" />

## 用法

```vue
<script setup>
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuShortcut,
} from '@/components/ui'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
```

## 复选框项

```vue
<script setup>
import { ref } from 'vue'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
} from '@/components/ui'
import Button from '@/components/ui/button/Button.vue'

const showStatusBar = ref(true)
const showActivityBar = ref(false)
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline">View</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
                Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem v-model:checked="showActivityBar">
                Activity Bar
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
```

## 单选项

```vue
<script setup>
import { ref } from 'vue'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuRadioItem,
    DropdownMenuRadioGroup,
} from '@/components/ui'
import Button from '@/components/ui/button/Button.vue'

const position = ref('bottom')
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline">Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuRadioGroup v-model="position">
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `DropdownMenu` | 根组件 |
| `DropdownMenuTrigger` | 打开菜单的按钮 |
| `DropdownMenuContent` | 下拉内容面板 |
| `DropdownMenuItem` | 标准菜单项 |
| `DropdownMenuCheckboxItem` | 复选框菜单项 |
| `DropdownMenuRadioItem` | 单选菜单项 |
| `DropdownMenuRadioGroup` | 单选项分组 |
| `DropdownMenuLabel` | 区域标签 |
| `DropdownMenuSeparator` | 视觉分隔线 |
| `DropdownMenuShortcut` | 键盘快捷键提示 |
| `DropdownMenuSub` | 子菜单容器 |
| `DropdownMenuSubTrigger` | 子菜单触发器 |
| `DropdownMenuSubContent` | 子菜单内容 |
| `DropdownMenuGroup` | 菜单项分组 |
