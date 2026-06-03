<script setup lang="ts">
import { computed, inject, ref, type Ref } from 'vue'
import { cn } from '../../lib/utils'
import { formFieldKey, formItemKey } from './form-context'

interface FormMessageProps {
    class?: string
}

const props = defineProps<FormMessageProps>()

const fieldContext = inject(formFieldKey, { name: '', error: ref<string | undefined>(undefined) as Ref<string | undefined>, value: ref<unknown>(undefined), setValue: () => {} })
const itemContext = inject(formItemKey, { id: '', formItemId: '', formDescriptionId: '', formMessageId: '' })

const body = computed(() => fieldContext.error.value)

const classes = computed(() =>
    cn('text-sm font-black text-brutal-destructive', props.class)
)
</script>

<template>
    <p v-if="body" :id="itemContext.formMessageId" role="alert" :class="classes">
        {{ body }}
    </p>
</template>
