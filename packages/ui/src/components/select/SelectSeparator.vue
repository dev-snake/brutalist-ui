<script setup lang="ts">
import { computed } from 'vue'
import { SelectSeparator as SelectSeparatorPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface SelectSeparatorProps {
    class?: string
}

const props = defineProps<SelectSeparatorProps>()

const classes = computed(() =>
    cn('-mx-1 my-1 h-[3px] bg-brutal-fg', props.class)
)
</script>

<template>
    <SelectSeparatorPrimitive :class="classes" />
</template>
