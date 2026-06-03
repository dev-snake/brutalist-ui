<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { breadcrumbLinkVariants } from './breadcrumb-variants'

interface BreadcrumbLinkProps extends PrimitiveProps {
    class?: string
}

const props = withDefaults(defineProps<BreadcrumbLinkProps>(), {
    as: 'a',
    class: '',
})

const classes = computed(() =>
    cn(breadcrumbLinkVariants(), props.class)
)
</script>

<template>
    <Primitive
        :as="props.as"
        :as-child="props.asChild"
        :class="classes"
    >
        <slot />
    </Primitive>
</template>
