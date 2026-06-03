<script setup lang="ts">
import { provide, computed } from 'vue'
import { useField } from 'vee-validate'
import { formFieldKey } from './form-context'

interface FormFieldProps {
    name: string
}

const props = defineProps<FormFieldProps>()

const fieldName = computed(() => props.name)
const { errorMessage, value, setValue } = useField(fieldName)

provide(formFieldKey, {
    name: props.name,
    error: errorMessage,
    value,
    setValue,
})
</script>

<template>
    <slot />
</template>
