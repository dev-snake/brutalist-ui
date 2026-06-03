<script setup lang="ts">
import { computed } from 'vue'
import { TabsList as TabsListPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface TabsListProps {
    class?: string
}

const props = defineProps<TabsListProps>()

const classes = computed(() =>
    cn(
        'inline-flex h-12 items-center justify-center p-1 gap-1',
        'bg-brutal-bg border-3 border-brutal shadow-brutal',
        props.class
    )
)
</script>

<template>
    <TabsListPrimitive :class="classes">
        <slot />
    </TabsListPrimitive>
</template>
