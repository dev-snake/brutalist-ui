---
title: Settings Page
description: 设置页面区块，带有标签页导航和表单控件。
---

# Settings Page

新粗野主义风格的设置页面，包含标签页导航、表单控件（Input 和 Switch）和保存按钮。

## 预览

<ComponentPreview>
  <SettingsPageDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block settings-page
```

## 用法

```vue
<script setup>
import SettingsPage from '@/components/ui/settings-page/SettingsPage.vue'
import type { SettingsTab } from '@/components/ui/settings-page/SettingsPage.vue'

const tabs: SettingsTab[] = [
    { label: 'General', value: 'general' },
    { label: 'Notifications', value: 'notifications' },
    { label: 'Security', value: 'security' },
]

function handleSave(payload) {
    console.log('Save:', payload)
    // payload: { tab: string; values: Record<string, unknown> }
}
</script>

<template>
    <SettingsPage
        title="Settings"
        :tabs="tabs"
        default-tab="general"
        @save="handleSave"
    />
</template>
```

## 自定义标签页内容

```vue
<script setup>
import SettingsPage from '@/components/ui/settings-page/SettingsPage.vue'

const tabs = [
    { label: 'Profile', value: 'profile' },
    { label: 'Account', value: 'account' },
]
</script>

<template>
    <SettingsPage
        title="My Settings"
        :tabs="tabs"
        @save="handleSave"
    >
        <template #tab-profile="{ values, setValue }">
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <label class="font-bold text-sm">Display Name</label>
                    <input
                        class="h-10 max-w-xs border-3 border-brutal bg-brutal-bg px-3"
                        :value="values.displayName ?? ''"
                        @input="setValue('displayName', $event.target.value)"
                    />
                </div>
            </div>
        </template>
    </SettingsPage>
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `settingsPage.defaultTitle` |
| `tabs` | `SettingsTab[]` | `[]` |
| `defaultTab` | `string` | — |
| `class` | `string` | — |

### SettingsTab 类型

| 字段 | 类型 | 说明 |
|------|------|------|
| `label` | `string` | 标签页显示文本 |
| `value` | `string` | 标签页值 |

## 事件

| 事件 | 载荷 |
|------|------|
| `save` | `[{ tab: string; values: Record<string, unknown> }]` |

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换/扩展区块头部 |
| `default` | 替换区块主体内容（含标签页和保存按钮） |
| `footer` | 替换/扩展区块底部 |
| `tab-{value}` | 自定义标签页内容，提供 `{ values, setValue }` 作用域属性 |

### 作用域插槽属性（`tab-{value}`）

| 属性 | 类型 | 说明 |
|------|------|------|
| `values` | `Record<string, unknown>` | 当前标签页的表单值 |
| `setValue` | `(key: string, val: unknown) => void` | 设置表单值的函数 |

## 布局

SettingsPage 包含：
- **头部**：标题区域
- **标签页导航**：TabsList + TabsTrigger，根据 `tabs` prop 渲染
- **标签页内容**：每个标签页对应一个 Card，包含：
  - 默认内容：Name（Input）和 Notifications（Switch），用 Separator 分隔
  - 可通过 `tab-{value}` 插槽自定义
- **保存按钮**：primary 变体，右对齐
