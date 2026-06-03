<script setup lang="ts">
import { TagsInputItemText, type TagsInputItemTextProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps<TagsInputItemTextProps & { class?: string }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const classes = computed(() =>
    cn('text-xs font-black uppercase tracking-wide', props.class)
)
</script>

<template>
    <TagsInputItemText v-bind="delegatedProps" :class="classes">
        <slot />
    </TagsInputItemText>
</template>
