<script setup lang="ts">
import { AccordionRoot, type AccordionRootProps, type AccordionRootEmits, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<AccordionRootProps & { class?: string }>()
const emits = defineEmits<AccordionRootEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <AccordionRoot v-bind="forwarded" :class="props.class">
        <slot />
    </AccordionRoot>
</template>
