<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { SwitchRoot, SwitchThumb } from 'reka-ui'

interface SwitchProps {
    class?: string
    modelValue?: boolean
    defaultValue?: boolean
    disabled?: boolean
}

const props = defineProps<SwitchProps>()

const emit = defineEmits<{
    'update:modelValue': [value: boolean]
}>()

const classes = computed(() =>
    cn(
        'peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center',
        'border-3 border-brutal',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-brutal-success data-[state=unchecked]:bg-brutal-bg',
        props.class
    )
)

const thumbClasses = computed(() =>
    cn(
        'pointer-events-none block h-5 w-5 bg-brutal-fg shadow-brutal-sm transition-transform duration-150',
        'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5'
    )
)
</script>

<template>
    <SwitchRoot
        :class="classes"
        :checked="modelValue"
        :default-checked="defaultValue"
        :disabled="disabled"
        @update:checked="emit('update:modelValue', $event)"
    >
        <SwitchThumb :class="thumbClasses" />
    </SwitchRoot>
</template>
