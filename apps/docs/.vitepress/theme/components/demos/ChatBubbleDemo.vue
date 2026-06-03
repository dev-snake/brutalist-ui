<script setup lang="ts">
import { ChatBubble } from 'brutx-ui-vue'

const messages = [
    {
        id: '1',
        variant: 'system' as const,
        content: '对话开始于 2025-06-01',
    },
    {
        id: '2',
        variant: 'received' as const,
        name: 'Alex',
        content: '嘿！这个新粗野主义 UI 库看起来太赞了！',
        timestamp: '14:01',
    },
    {
        id: '3',
        variant: 'sent' as const,
        name: '我',
        content: '对吧！粗边框 + 硬朗阴影，直接把普通组件卷死。',
        timestamp: '14:02',
    },
    {
        id: '4',
        variant: 'received' as const,
        name: 'Alex',
        content: 'Kanban + TreeView 这两个复合组件是重头戏 🔥',
        timestamp: '14:03',
    },
    {
        id: '5',
        variant: 'sent' as const,
        name: '我',
        content: '还有 Carousel！Embla 驱动的，性能拉满 💪',
        timestamp: '14:03',
    },
]
</script>

<template>
    <div class="flex flex-col gap-3 max-w-md mx-auto border-3 border-brutal shadow-brutal rounded-brutal p-4 bg-brutal-bg">
        <ChatBubble
            v-for="msg in messages"
            :key="msg.id"
            :message="msg"
        />
    </div>
</template>
