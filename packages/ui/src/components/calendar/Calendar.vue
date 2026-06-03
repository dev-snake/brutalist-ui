<script setup lang="ts">
import { computed } from 'vue'
import { Calendar as VCalendar } from 'v-calendar'
import { cn } from '../../lib/utils'

interface CalendarProps {
    modelValue?: Date | Date[] | null
    isRange?: boolean
    disabled?: boolean
    class?: string
}

interface DateRangeValue {
    start: Date
    end: Date
}

const props = withDefaults(defineProps<CalendarProps>(), {
    modelValue: undefined,
    isRange: false,
    disabled: false,
    class: '',
})

const emit = defineEmits<{
    'update:modelValue': [value: Date | Date[] | null]
}>()

const rootClasses = computed(() =>
    cn(
        'p-2 sm:p-3',
        'bg-brutal-bg text-brutal-fg',
        'border-3 border-brutal',
        'shadow-brutal',
        'w-fit max-w-full overflow-x-auto',
        props.class
    )
)

const vCalendarModelValue = computed<Date | DateRangeValue | null>(() => {
    if (props.isRange && Array.isArray(props.modelValue) && props.modelValue.length === 2) {
        return { start: props.modelValue[0], end: props.modelValue[1] }
    }
    if (props.isRange) return null
    if (props.modelValue instanceof Date) return props.modelValue
    return null
})

function handleUpdate(value: Date | DateRangeValue | null) {
    if (props.disabled) return
    if (props.isRange) {
        if (value && typeof value === 'object' && 'start' in value && 'end' in value) {
            emit('update:modelValue', [value.start, value.end])
        } else {
            emit('update:modelValue', null)
        }
    } else {
        if (value instanceof Date || value === null) {
            emit('update:modelValue', value)
        } else {
            emit('update:modelValue', null)
        }
    }
}

const dayBaseClasses = cn(
    'flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center text-[10px] sm:text-xs font-semibold transition-all duration-100 hover:bg-brutal-secondary hover:text-brutal-fg hover:font-bold cursor-pointer border-3 border-brutal/10',
    'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all'
)

const daySelectedClasses = 'bg-brutal-primary text-brutal-fg font-black border-3 border-brutal shadow-brutal-sm'
const dayInRangeClasses = 'bg-brutal-accent text-brutal-fg'
const dayRangeEndpointClasses = 'bg-brutal-secondary text-brutal-fg font-black border-3 border-brutal shadow-brutal-sm'
const dayTodayClasses = 'bg-brutal-secondary text-brutal-fg font-black border-3 border-brutal'
const dayOutsideClasses = 'text-brutal-muted-foreground opacity-40'
const dayDisabledClasses = 'opacity-40 cursor-not-allowed'
</script>

<template>
    <VCalendar
        :model-value="vCalendarModelValue"
        :mode="isRange ? 'range' : 'date'"
        :disabled="disabled"
        :class="rootClasses"
        :attributes="[]"
        trim-weeks
        :first-day-of-week="1"
        @update:model-value="handleUpdate"
    >
        <template #default="{ page }">
            <div class="vc-header flex items-center justify-between mb-2">
                <div class="vc-title font-black text-xs sm:text-sm tracking-tight uppercase text-brutal-fg">
                    {{ page.monthLabel }} {{ page.yearLabel }}
                </div>
            </div>
        </template>
        <template #day-content="{ day }">
            <div
                :class="[
                    dayBaseClasses,
                    day.isSelected && !day.isInRange ? daySelectedClasses : '',
                    day.isInRange && !day.isStart && !day.isEnd ? dayInRangeClasses : '',
                    (day.isStart || day.isEnd) ? dayRangeEndpointClasses : '',
                    day.isToday ? dayTodayClasses : '',
                    day.isOutside ? dayOutsideClasses : '',
                    day.isDisabled ? dayDisabledClasses : '',
                ]"
            >
                {{ day.label }}
            </div>
        </template>
    </VCalendar>
</template>
