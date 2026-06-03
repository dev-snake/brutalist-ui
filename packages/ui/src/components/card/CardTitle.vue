<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CardTitleProps {
    class?: string
}

const props = defineProps<CardTitleProps>()

const classes = computed(() =>
    cn('text-2xl font-black tracking-tight leading-none', props.class)
)
</script>

<template>
    <h3 :class="classes">
        <slot />
    </h3>
</template>
