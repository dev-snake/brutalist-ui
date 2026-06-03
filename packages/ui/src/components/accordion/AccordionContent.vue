<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { accordionContentVariants } from './accordion-variants'

const props = defineProps<AccordionContentProps & { class?: string }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const classes = computed(() =>
    cn(accordionContentVariants(), props.class)
)
</script>

<template>
    <AccordionContent
        v-bind="delegatedProps"
        class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    >
        <div :class="classes">
            <slot />
        </div>
    </AccordionContent>
</template>
