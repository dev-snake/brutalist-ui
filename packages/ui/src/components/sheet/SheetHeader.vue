<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface SheetHeaderProps {
    class?: string
}

const props = defineProps<SheetHeaderProps>()

const classes = computed(() =>
    cn('flex flex-col space-y-2 pb-4 border-b-3 border-brutal', props.class)
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
