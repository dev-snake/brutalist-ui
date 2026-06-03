<script setup lang="ts">
import { TagsInputRoot, type TagsInputRootProps, type TagsInputRootEmits, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps<TagsInputRootProps & { class?: string }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const classes = computed(() =>
    cn(
        'flex flex-wrap gap-2 items-center p-2 min-h-11 border-3 border-brutal bg-brutal-bg rounded-brutal shadow-brutal focus-within:ring-2 focus-within:ring-brutal-ring focus-within:ring-offset-2 transition-all duration-150',
        props.class
    )
)
</script>

<template>
    <TagsInputRoot v-bind="forwarded" :class="classes">
        <slot />
    </TagsInputRoot>
</template>
