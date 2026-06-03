<script setup lang="ts">
import { TagsInputInput, type TagsInputInputProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const props = defineProps<TagsInputInputProps & { class?: string }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const classes = computed(() =>
    cn(
        'flex-1 bg-transparent px-2 text-sm font-bold placeholder:text-brutal-placeholder placeholder:font-normal focus:outline-none disabled:cursor-not-allowed',
        props.class
    )
)
</script>

<template>
    <TagsInputInput v-bind="delegatedProps" :class="classes" />
</template>
