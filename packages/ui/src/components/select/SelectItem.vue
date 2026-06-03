<script setup lang="ts">
import { computed } from 'vue'
import { SelectItem as SelectItemPrimitive, SelectItemIndicator as SelectItemIndicatorPrimitive, SelectItemText as SelectItemTextPrimitive } from 'reka-ui'
import { Check } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface SelectItemProps {
    value: string
    disabled?: boolean
    class?: string
}

const props = defineProps<SelectItemProps>()

const classes = computed(() =>
    cn(
        'relative flex w-full cursor-pointer select-none items-center py-2 pl-8 pr-3',
        'font-bold outline-none',
        'focus:bg-brutal-accent focus:text-brutal-fg',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class
    )
)
</script>

<template>
    <SelectItemPrimitive :value="value" :disabled="disabled" :class="classes">
        <span class="absolute left-2 flex h-4 w-4 items-center justify-center">
            <SelectItemIndicatorPrimitive>
                <Check class="h-4 w-4 stroke-[3]" />
            </SelectItemIndicatorPrimitive>
        </span>
        <SelectItemTextPrimitive>
            <slot />
        </SelectItemTextPrimitive>
    </SelectItemPrimitive>
</template>
