<script setup lang="ts">
import { computed } from 'vue'
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { accordionItemVariants } from './accordion-variants'

type AccordionItemVariantProps = VariantProps<typeof accordionItemVariants>

interface Props extends AccordionItemProps {
    variant?: NonNullable<AccordionItemVariantProps['variant']>
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'default',
    class: '',
})

const delegatedProps = computed(() => {
    const { class: _, variant: __, ...delegated } = props
    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const classes = computed(() =>
    cn(accordionItemVariants({ variant: props.variant }), props.class)
)
</script>

<template>
    <AccordionItem v-bind="forwardedProps" :class="classes">
        <slot />
    </AccordionItem>
</template>
