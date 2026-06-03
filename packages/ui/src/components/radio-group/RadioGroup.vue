<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import { cn } from '../../lib/utils'

interface RadioGroupProps {
    defaultValue?: string
    modelValue?: string
    class?: string
}

const props = defineProps<RadioGroupProps>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const classes = computed(() => cn('grid gap-2', props.class))
</script>

<template>
    <RadioGroupRoot :default-value="defaultValue" :model-value="modelValue" :class="classes" @update:model-value="emit('update:modelValue', $event as string)">
        <slot />
    </RadioGroupRoot>
</template>
