<script setup lang="ts">
import { TagsInputItem, type TagsInputItemProps } from 'reka-ui'
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { tagsInputItemVariants } from './tags-input-variants'

type TagsInputItemVariantProps = VariantProps<typeof tagsInputItemVariants>

interface Props extends TagsInputItemProps {
    variant?: NonNullable<TagsInputItemVariantProps['variant']>
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    class: '',
})

const delegatedProps = computed(() => {
    const { class: _, variant: __, ...delegated } = props
    return delegated
})

const classes = computed(() =>
    cn(tagsInputItemVariants({ variant: props.variant }), props.class)
)
</script>

<template>
    <TagsInputItem v-bind="delegatedProps" :class="classes">
        <slot />
    </TagsInputItem>
</template>
