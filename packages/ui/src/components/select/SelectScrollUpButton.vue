<script setup lang="ts">
import { computed } from 'vue'
import { SelectScrollUpButton as SelectScrollUpButtonPrimitive } from 'reka-ui'
import { ChevronUp } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface SelectScrollUpButtonProps {
    class?: string
}

const props = defineProps<SelectScrollUpButtonProps>()

const classes = computed(() =>
    cn('flex cursor-default items-center justify-center py-1 bg-brutal-bg', props.class)
)
</script>

<template>
    <SelectScrollUpButtonPrimitive :class="classes">
        <ChevronUp class="h-4 w-4 stroke-[3]" />
    </SelectScrollUpButtonPrimitive>
</template>
