<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupItem as RadioGroupItemPrimitive, RadioGroupIndicator as RadioGroupIndicatorPrimitive } from 'reka-ui'
import { Circle } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface RadioGroupItemProps {
    value: string
    disabled?: boolean
    class?: string
}

const props = defineProps<RadioGroupItemProps>()

const classes = computed(() =>
    cn(
        'peer aspect-square h-6 w-6 rounded-full',
        'border-3 border-brutal bg-brutal-bg text-brutal-fg',
        'shadow-brutal-sm',
        'transition-all duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-brutal-primary',
        props.class
    )
)
</script>

<template>
    <RadioGroupItemPrimitive :value="value" :disabled="disabled" :class="classes">
        <RadioGroupIndicatorPrimitive class="flex items-center justify-center">
            <Circle class="h-2.5 w-2.5 fill-current stroke-none" />
        </RadioGroupIndicatorPrimitive>
    </RadioGroupItemPrimitive>
</template>
