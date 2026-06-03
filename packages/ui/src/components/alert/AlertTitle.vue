<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface AlertTitleProps {
    class?: string
}

const props = defineProps<AlertTitleProps>()

const classes = computed(() =>
    cn('mb-1 font-black tracking-tight leading-none', props.class)
)
</script>

<template>
    <h5 :class="classes">
        <slot />
    </h5>
</template>
