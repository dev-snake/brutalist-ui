<script setup lang="ts">
import { computed, inject } from 'vue'
import { cn } from '../../lib/utils'
import { formItemKey } from './form-context'

interface FormDescriptionProps {
    class?: string
}

const props = defineProps<FormDescriptionProps>()

const itemContext = inject(formItemKey, { id: '', formItemId: '', formDescriptionId: '', formMessageId: '' })

const classes = computed(() =>
    cn('text-sm text-brutal-muted-foreground font-medium', props.class)
)
</script>

<template>
    <p :id="itemContext.formDescriptionId" :class="classes">
        <slot />
    </p>
</template>
