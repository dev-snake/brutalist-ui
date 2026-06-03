<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface AlertDescriptionProps {
    class?: string
}

const props = defineProps<AlertDescriptionProps>()

const classes = computed(() =>
    cn('text-sm font-medium [&_p]:leading-relaxed', props.class)
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
