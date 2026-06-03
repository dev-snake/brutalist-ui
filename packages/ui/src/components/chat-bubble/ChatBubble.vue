<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../lib/utils';
import { chatBubbleVariants, chatAvatarVariants } from './chat-bubble-variants';

interface ChatMessage {
    id: string;
    content: string;
    variant?: 'sent' | 'received' | 'system';
    avatar?: string;
    name?: string;
    timestamp?: string;
}

interface ChatBubbleProps {
    message: ChatMessage;
    showAvatar?: boolean;
    class?: string;
}

const props = withDefaults(defineProps<ChatBubbleProps>(), {
    showAvatar: true,
});

const isSent = computed(() => props.message.variant === 'sent');
const isSystem = computed(() => props.message.variant === 'system');

const wrapperClass = computed(() =>
    cn(
        'flex gap-2 w-full',
        isSent.value ? 'flex-row-reverse' : 'flex-row',
        isSystem.value ? 'justify-center' : '',
    )
);

const bubbleClass = computed(() =>
    cn(chatBubbleVariants({ variant: props.message.variant ?? 'received' }), props.class)
);

const avatarClass = computed(() => cn(chatAvatarVariants()));

const initials = computed(() => {
    const name = props.message.name ?? '?';
    return name.slice(0, 2).toUpperCase();
});
</script>

<template>
    <div :class="wrapperClass">
        <!-- Avatar -->
        <div
            v-if="showAvatar && !isSystem"
            :class="avatarClass"
            :title="message.name"
        >
            <img
                v-if="message.avatar"
                :src="message.avatar"
                :alt="message.name"
                class="w-full h-full object-cover rounded-brutal"
            />
            <span v-else>{{ initials }}</span>
        </div>

        <!-- Content -->
        <div :class="cn('flex flex-col gap-1', isSent ? 'items-end' : 'items-start')">
            <span v-if="message.name && !isSystem" class="text-xs font-bold text-brutal-fg opacity-60 px-1">
                {{ message.name }}
            </span>
            <div :class="bubbleClass">
                <slot>{{ message.content }}</slot>
            </div>
            <span v-if="message.timestamp" class="text-xs opacity-40 font-medium px-1">
                {{ message.timestamp }}
            </span>
        </div>
    </div>
</template>
