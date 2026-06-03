<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { breadcrumbPageVariants } from './breadcrumb-variants'

interface BreadcrumbPageProps {
    class?: string
}

const props = withDefaults(defineProps<BreadcrumbPageProps>(), {
    class: '',
})

const classes = computed(() =>
    cn(breadcrumbPageVariants(), props.class)
)
</script>

<template>
    <span
        role="link"
        aria-disabled="true"
        aria-current="page"
        :class="classes"
    >
        <slot />
    </span>
</template>
