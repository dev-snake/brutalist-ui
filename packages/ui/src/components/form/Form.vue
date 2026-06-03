<script setup lang="ts">
import { provide } from 'vue'
import { useForm, type FormContext as VeeFormContext } from 'vee-validate'
import { formContextKey } from './form-context'

interface FormProps {
    class?: string
    initialValues?: Record<string, unknown>
    validationSchema?: unknown
}

const props = defineProps<FormProps>()

const emit = defineEmits<{
    submit: [values: Record<string, unknown>]
}>()

const { handleSubmit, ...formContext } = useForm({
    initialValues: props.initialValues,
    validationSchema: props.validationSchema,
})

const onSubmit = handleSubmit((values) => {
    emit('submit', values)
})

provide(formContextKey, formContext as unknown as VeeFormContext)
</script>

<template>
    <form :class="props.class" @submit="onSubmit">
        <slot />
    </form>
</template>
