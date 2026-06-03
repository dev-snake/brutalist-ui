<script setup lang="ts">
import { computed } from 'vue'
import { AlertDialogTitle as AlertDialogTitlePrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface AlertDialogTitleProps {
    class?: string
}

const props = defineProps<AlertDialogTitleProps>()

const classes = computed(() =>
    cn('text-lg font-black tracking-tight text-brutal-fg', props.class)
)
</script>

<template>
    <AlertDialogTitlePrimitive :class="classes">
        <slot />
    </AlertDialogTitlePrimitive>
</template>
