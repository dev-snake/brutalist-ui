<script setup lang="ts">
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { accordionTriggerVariants } from './accordion-variants'

const props = defineProps<AccordionTriggerProps & { class?: string }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardProps(delegatedProps)

const classes = computed(() =>
    cn(
        accordionTriggerVariants(),
        '[&[data-state=open]>svg]:rotate-180',
        props.class
    )
)
</script>

<template>
    <AccordionHeader class="flex">
        <AccordionTrigger v-bind="forwarded" :class="classes">
            <slot />
            <slot name="icon">
                <ChevronDown
                    class="h-5 w-5 shrink-0 transition-transform duration-200 border-3 border-brutal rounded-brutal bg-brutal-bg p-0.5 shadow-brutal-sm"
                />
            </slot>
        </AccordionTrigger>
    </AccordionHeader>
</template>
