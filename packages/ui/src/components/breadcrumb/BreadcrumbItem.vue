<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { breadcrumbItemVariants } from './breadcrumb-variants'

interface BreadcrumbItemProps {
    class?: string
}

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
    class: '',
})

const classes = computed(() =>
    cn(breadcrumbItemVariants(), props.class)
)
</script>

<template>
    <li :class="classes">
        <slot />
    </li>
</template>
