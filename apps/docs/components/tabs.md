---
title: Tabs 标签页
description: 选项卡组件，提供按压切换动画和极高辨识度的激活状态边框。
---

# Tabs 标签页

基于 reka-ui 的 Tabs 原语构建的新粗野主义风格标签页导航组件。

## 预览

<ComponentPreview>
  <TabsDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="tabs" />

## 用法

```vue
<script setup>
import { Tabs } from '@/components/ui'
import TabsList from '@/components/ui/tabs/TabsList.vue'
import TabsTrigger from '@/components/ui/tabs/TabsTrigger.vue'
import TabsContent from '@/components/ui/tabs/TabsContent.vue'
</script>

<template>
    <Tabs default-value="account">
        <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
            <p class="text-sm">Manage your account settings.</p>
        </TabsContent>
        <TabsContent value="password">
            <p class="text-sm">Change your password here.</p>
        </TabsContent>
    </Tabs>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `Tabs` | 根组件（从 reka-ui 重新导出为 `TabsRoot`） |
| `TabsList` | 标签触发器容器 |
| `TabsTrigger` | 可点击的标签按钮 |
| `TabsContent` | 每个标签的内容面板 |

## 属性

### Tabs

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `defaultValue` | `string` | — |
| `modelValue` | `string` | — |

### TabsTrigger

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `value` | `string` | —（必填） |
| `disabled` | `boolean` | — |
| `class` | `string` | — |

### TabsContent

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `value` | `string` | —（必填） |
| `class` | `string` | — |

### TabsList

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |

## 无障碍

- 方向键在标签触发器之间导航
- 标签内容通过 ARIA 属性与其触发器关联
- 激活标签具有 `aria-selected="true"`
