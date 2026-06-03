<script setup lang="ts">
import { computed, inject, ref, type Ref } from 'vue'
import { cn } from '../../lib/utils'
import LabelRoot from '../label/Label.vue'
import { formFieldKey, formItemKey } from './form-context'

interface FormLabelProps {
    class?: string
}

const props = defineProps<FormLabelProps>()

const fieldContext = inject(formFieldKey, { name: '', error: ref<string | undefined>(undefined) as Ref<string | undefined>, value: ref<unknown>(undefined), setValue: () => {} })
const itemContext = inject(formItemKey, { id: '', formItemId: '', formDescriptionId: '', formMessageId: '' })

const classes = computed(() =>
    cn(
        fieldContext.error.value && 'text-brutal-destructive',
        props.class
    )
)
</script>

<template>
    <LabelRoot :class="classes" :for="itemContext.formItemId">
        <slot />
    </LabelRoot>
</template>
