<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuSeparator as DropdownMenuSeparatorPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface DropdownMenuSeparatorProps {
    class?: string
}

const props = defineProps<DropdownMenuSeparatorProps>()

const classes = computed(() =>
    cn('-mx-1 my-1 h-[3px] bg-brutal-fg', props.class)
)
</script>

<template>
    <DropdownMenuSeparatorPrimitive :class="classes" />
</template>
