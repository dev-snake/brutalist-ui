<script setup lang="ts">
import { computed } from 'vue'
import { SelectLabel as SelectLabelPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface SelectLabelProps {
    class?: string
}

const props = defineProps<SelectLabelProps>()

const classes = computed(() =>
    cn('px-3 py-2 text-sm font-black tracking-wide', props.class)
)
</script>

<template>
    <SelectLabelPrimitive :class="classes">
        <slot />
    </SelectLabelPrimitive>
</template>
