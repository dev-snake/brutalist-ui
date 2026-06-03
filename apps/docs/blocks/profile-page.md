---
title: Profile Page
description: 带有头像、表单编辑和保存操作的个人资料页面区块。
---

# Profile Page

新粗野主义风格的个人资料页面，包含头像、姓名/邮箱/简介表单和保存按钮。

## 预览

<ComponentPreview>
  <ProfilePageDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block profile-page
```

## 用法

```vue
<script setup>
import ProfilePage from '@/components/ui/profile-page/ProfilePage.vue'

function handleSave(payload) {
    console.log('Save profile:', payload)
    // payload: { name: string; email: string; bio: string }
}
</script>

<template>
    <ProfilePage
        name="John Doe"
        email="john@example.com"
        bio="Full-stack developer"
        @save="handleSave"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `profilePage.defaultTitle` |
| `name` | `string` | — |
| `email` | `string` | — |
| `bio` | `string` | — |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `save` | `[{ name: string; email: string; bio: string }]` |

## 插槽

| 插槽 | 说明 |
|------|------|
| `header` | 自定义页面标题区域 |
| `default` | 自定义主内容区域（替换头像和表单） |
| `footer` | 页面底部内容 |

## 布局

ProfilePage 包含：
- **标题**：加粗页面标题，可通过 `header` 插槽自定义
- **头像**：根据姓名自动生成首字母缩写的大尺寸头像
- **表单**：姓名输入框、邮箱输入框、简介文本域
- **保存按钮**：primary 变体按钮，点击时触发 `save` 事件
