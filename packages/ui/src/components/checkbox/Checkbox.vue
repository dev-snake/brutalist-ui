<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import { Check } from 'lucide-vue-next'

interface CheckboxProps {
    class?: string
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
}

const props = defineProps<CheckboxProps>()

const emit = defineEmits<{
    'update:checked': [value: boolean]
}>()

const classes = computed(() =>
    cn(
        'peer h-6 w-6 shrink-0',
        'border-3 border-brutal',
        'bg-brutal-bg',
        'flex items-center justify-center',
        'transition-all duration-150',
        'shadow-brutal-sm',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-brutal-success',
        props.class
    )
)

const checkClasses = computed(() =>
    cn('h-4 w-4 stroke-[3] text-brutal-fg')
)
</script>

<template>
    <CheckboxRoot
        :class="classes"
        :checked="checked"
        :default-checked="defaultChecked"
        :disabled="disabled"
        @update:checked="emit('update:checked', $event)"
    >
        <CheckboxIndicator class="flex items-center justify-center text-current">
            <Check :class="checkClasses" />
        </CheckboxIndicator>
    </CheckboxRoot>
</template>
