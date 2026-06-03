<script setup lang="ts">
import { computed, provide, useId } from 'vue'
import { cn } from '../../lib/utils'
import { formItemKey } from './form-context'

interface FormItemProps {
    class?: string
}

const props = defineProps<FormItemProps>()

const id = useId()

provide(formItemKey, {
    id,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
})

const classes = computed(() => cn('space-y-2', props.class))
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
