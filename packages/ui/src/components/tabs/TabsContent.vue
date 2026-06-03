<script setup lang="ts">
import { computed } from 'vue'
import { TabsContent as TabsContentPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface TabsContentProps {
    value: string
    class?: string
}

const props = defineProps<TabsContentProps>()

const classes = computed(() =>
    cn(
        'mt-3 p-4',
        'bg-brutal-bg text-brutal-fg border-3 border-brutal shadow-brutal',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        props.class
    )
)
</script>

<template>
    <TabsContentPrimitive :value="value" :class="classes">
        <slot />
    </TabsContentPrimitive>
</template>
