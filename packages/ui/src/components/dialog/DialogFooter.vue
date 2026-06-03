<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface DialogFooterProps {
    class?: string
}

const props = defineProps<DialogFooterProps>()

const classes = computed(() =>
    cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 pt-4 border-t-3 border-brutal', props.class)
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
