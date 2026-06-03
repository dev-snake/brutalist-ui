<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { textareaVariants } from './textarea-variants'

type TextareaVariantProps = VariantProps<typeof textareaVariants>

interface TextareaProps {
    modelValue?: string
    variant?: NonNullable<TextareaVariantProps['variant']>
    textareaSize?: NonNullable<TextareaVariantProps['textareaSize']>
    disabled?: boolean
    placeholder?: string
    class?: string
}

const props = withDefaults(defineProps<TextareaProps>(), {
    modelValue: undefined,
    variant: 'default',
    textareaSize: 'default',
    disabled: false,
    placeholder: '',
    class: '',
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const classes = computed(() =>
    cn(textareaVariants({ variant: props.variant, textareaSize: props.textareaSize }), props.class)
)
</script>

<template>
    <textarea
        :value="modelValue"
        :disabled="disabled"
        :placeholder="placeholder"
        :class="classes"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
</template>
