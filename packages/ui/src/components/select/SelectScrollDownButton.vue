<script setup lang="ts">
import { computed } from 'vue'
import { SelectScrollDownButton as SelectScrollDownButtonPrimitive } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface SelectScrollDownButtonProps {
    class?: string
}

const props = defineProps<SelectScrollDownButtonProps>()

const classes = computed(() =>
    cn('flex cursor-default items-center justify-center py-1 bg-brutal-bg', props.class)
)
</script>

<template>
    <SelectScrollDownButtonPrimitive :class="classes">
        <ChevronDown class="h-4 w-4 stroke-[3]" />
    </SelectScrollDownButtonPrimitive>
</template>
