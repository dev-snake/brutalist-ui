<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CommandGroupProps {
    heading?: string
    class?: string
}

const props = defineProps<CommandGroupProps>()

const classes = computed(() =>
    cn(
        'overflow-hidden p-1',
        props.class
    )
)

const headingClasses = computed(() =>
    cn(
        'px-3 py-2 text-xs font-black uppercase tracking-wider',
        'text-brutal-muted-foreground'
    )
)
</script>

<template>
    <div :class="classes" data-slot="command-group" role="group">
        <div v-if="heading" :class="headingClasses" data-slot="command-group-heading">
            {{ heading }}
        </div>
        <slot />
    </div>
</template>
