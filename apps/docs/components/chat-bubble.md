---
title: ChatBubble 聊天气泡
description: 聊天消息气泡组件，支持发送方/接收方/系统消息三种变体，附带头像、姓名、时间戳展示。
---

# ChatBubble 聊天气泡

支持三种消息角色变体的聊天 UI 组件，粗边框气泡 + 阴影偏移让对话界面充满个性张力。

## 预览

<ComponentPreview>
  <ChatBubbleDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="chat-bubble" />

## 用法

```vue
<script setup>
import { ChatBubble } from '@/components/ui/chat-bubble'

const message = {
    id: '1',
    variant: 'received',
    name: 'Alex',
    content: '这个 UI 库太好用了！',
    timestamp: '14:01',
}
</script>

<template>
    <div class="flex flex-col gap-3">
        <ChatBubble :message="{ id: '1', variant: 'received', name: 'Alex', content: '你好！' }" />
        <ChatBubble :message="{ id: '2', variant: 'sent', content: '嘿！' }" />
        <ChatBubble :message="{ id: '3', variant: 'system', content: '对话已开始' }" />
    </div>
</template>
```

## 消息数据类型

```ts
interface ChatMessage {
    id: string
    content: string
    variant?: 'sent' | 'received' | 'system'  // 默认 'received'
    avatar?: string      // 头像图片 URL
    name?: string        // 发送者姓名
    timestamp?: string   // 时间戳文本
}
```

## Props

### ChatBubble Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `message` | `ChatMessage` | — | 消息数据对象 |
| `showAvatar` | `boolean` | `true` | 是否显示头像区域 |
| `class` | `string` | — | 气泡自定义样式类 |

## 变体说明

| 变体 | 样式 | 用途 |
|------|------|------|
| `received` | 左对齐，白底 | 对方消息 |
| `sent` | 右对齐，主色背景 | 自己发送的消息 |
| `system` | 居中，斜体，虚线边框 | 系统通知 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `default` | 自定义气泡内容（默认显示 `message.content`） |
