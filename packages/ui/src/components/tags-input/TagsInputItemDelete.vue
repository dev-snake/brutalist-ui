<script setup lang="ts">
import { TagsInputItemDelete, type TagsInputItemDeleteProps } from 'reka-ui'
import { computed } from 'vue'
import { X } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

const props = defineProps<TagsInputItemDeleteProps & { class?: string }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props
    return delegated
})

const classes = computed(() =>
    cn(
        'h-4 w-4 flex items-center justify-center border-3 border-brutal bg-brutal-bg text-brutal-fg shadow-brutal-sm transition-all hover:bg-brutal-destructive hover:text-brutal-fg rounded-brutal active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        props.class
    )
)
</script>

<template>
    <TagsInputItemDelete v-bind="delegatedProps" :class="classes">
        <slot>
            <X class="h-3.5 w-3.5 stroke-[3]" />
        </slot>
    </TagsInputItemDelete>
</template>
