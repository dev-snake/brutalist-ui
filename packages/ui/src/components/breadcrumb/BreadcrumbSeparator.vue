<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { breadcrumbSeparatorVariants } from './breadcrumb-variants'

interface BreadcrumbSeparatorProps {
    class?: string
}

const props = withDefaults(defineProps<BreadcrumbSeparatorProps>(), {
    class: '',
})

const classes = computed(() =>
    cn(breadcrumbSeparatorVariants(), props.class)
)
</script>

<template>
    <li
        role="presentation"
        aria-hidden="true"
        :class="classes"
    >
        <slot>
            <span>/</span>
        </slot>
    </li>
</template>
