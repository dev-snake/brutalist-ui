<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'
import { formFieldKey, formItemKey } from './form-context'

interface FormControlProps {
    class?: string
}

defineProps<FormControlProps>()

const fieldContext = inject(formFieldKey, {
    name: '',
    error: ref<string | undefined>(undefined) as Ref<string | undefined>,
    value: ref<unknown>(undefined),
    setValue: () => {},
})
const itemContext = inject(formItemKey, { id: '', formItemId: '', formDescriptionId: '', formMessageId: '' })
</script>

<template>
    <slot
        :id="itemContext.formItemId"
        :aria-describedby="!fieldContext.error?.value ? itemContext.formDescriptionId : `${itemContext.formDescriptionId} ${itemContext.formMessageId}`"
        :aria-invalid="!!fieldContext.error?.value"
    />
</template>
