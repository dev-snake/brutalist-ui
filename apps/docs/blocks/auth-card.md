---
title: Auth Card
description: 用户认证登录卡片，内置邮箱输入、社交登录按钮及选项卡切换。
---

# Auth Card

新粗野主义风格的认证卡片，包含社交登录按钮、邮箱/密码表单和忘记密码链接。

## 预览

<ComponentPreview>
  <AuthCardDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block auth-card
```

## 用法

```vue
<script setup>
import AuthCard from '@/components/ui/auth-card/AuthCard.vue'

function handleLogin({ email, password }) {
    console.log('Login submitted:', email, password)
}

function handleForgotPassword() {
    console.log('Forgot password clicked')
}

function handleGoogle() {
    console.log('Google auth clicked')
}

function handleGithub() {
    console.log('GitHub auth clicked')
}
</script>

<template>
    <AuthCard
        title="Welcome back"
        description="Sign in to your account to continue"
        @login-submit="handleLogin"
        @forgot-password="handleForgotPassword"
        @google-click="handleGoogle"
        @github-click="handleGithub"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `authCard.welcomeBack` |
| `description` | `string` | locale: `authCard.signInToContinue` |
| `texts` | `AuthCardTexts` | `{}` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `loginSubmit` | `{ email: string, password: string }` |
| `forgotPassword` | `[]` |
| `googleClick` | `[]` |
| `githubClick` | `[]` |

## 布局

AuthCard 包含：
- **头部**：标题和描述
- **社交按钮**：Google 和 GitHub，2 列网格布局
- **分隔线**："or email login" 分隔符
- **邮箱表单**：带图标的邮箱输入框、带图标的密码输入框、忘记密码链接
- **提交按钮**：primary 变体，全宽
- **底部**：注册链接

## 可访问性

- 使用 `useId()` 为邮箱和密码输入框生成唯一 ID，与 `<label>` 正确关联
- 邮箱和密码字段通过 `v-model` 实现双向绑定，`loginSubmit` 事件携带 `{ email, password }` 表单数据
