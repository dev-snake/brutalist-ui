<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'

interface CommandInputProps {
    modelValue?: string
    placeholder?: string
    class?: string
}

const props = withDefaults(defineProps<CommandInputProps>(), {
    modelValue: undefined,
    placeholder: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedPlaceholder = computed(() => props.placeholder ?? t('command.placeholder'))

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const wrapperClasses = computed(() =>
    cn(
        'flex h-12 items-center gap-3 px-4',
        'border-b-3 border-brutal',
        'bg-brutal-accent'
    )
)

const inputClasses = computed(() =>
    cn(
        'flex h-full w-full bg-transparent py-3',
        'text-sm font-bold text-brutal-fg placeholder:text-brutal-placeholder',
        'outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class
    )
)
</script>

<template>
    <div :class="wrapperClasses" data-slot="command-input">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 stroke-[3] text-brutal-fg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
        <input
            type="text"
            :value="modelValue"
            :placeholder="resolvedPlaceholder"
            :class="inputClasses"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
    </div>
</template>
