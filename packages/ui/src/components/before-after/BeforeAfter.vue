<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { MoveHorizontal } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { beforeAfterRootVariants, beforeAfterHandleVariants } from './before-after-variants'

const DEFAULT_SLIDER_POSITION = 50

interface BeforeAfterProps {
    before: string
    after: string
    beforeAlt?: string
    afterAlt?: string
    defaultValue?: number
    disabled?: boolean
    class?: string
}

const props = withDefaults(defineProps<BeforeAfterProps>(), {
    beforeAlt: undefined,
    afterAlt: undefined,
    defaultValue: DEFAULT_SLIDER_POSITION,
    disabled: false,
    class: '',
})

const { t } = useLocale()

const resolvedBeforeAlt = computed(() => props.beforeAlt ?? t('beforeAfter.before'))
const resolvedAfterAlt = computed(() => props.afterAlt ?? t('beforeAfter.after'))

const sliderVal = ref(props.defaultValue)

watch(() => props.defaultValue, (val) => {
    if (val !== undefined) sliderVal.value = val
})

const clipStyle = computed(() => {
    return {
        clipPath: `inset(0 0 0 ${sliderVal.value}%)`,
    }
})

const sliderStyle = computed(() => {
    return {
        left: `${sliderVal.value}%`,
    }
})

const rootClasses = computed(() =>
    cn(beforeAfterRootVariants(), props.class)
)

const handleClasses = computed(() =>
    cn(beforeAfterHandleVariants())
)
</script>

<template>
    <div :class="rootClasses">
        <img
            :src="before"
            :alt="resolvedBeforeAlt"
            class="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div
            class="absolute inset-0 w-full h-full pointer-events-none"
            :style="clipStyle"
        >
            <img
                :src="after"
                :alt="resolvedAfterAlt"
                class="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
        </div>

        <div
            class="absolute top-0 bottom-0 w-[4px] bg-brutal-fg -translate-x-1/2 pointer-events-none z-10"
            :style="sliderStyle"
        />

        <div
            :class="handleClasses"
            :style="sliderStyle"
        >
            <MoveHorizontal class="h-4 w-4 stroke-[3] text-brutal-fg" />
        </div>

        <input
            type="range"
            min="0"
            max="100"
            v-model="sliderVal"
            :disabled="disabled"
            class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 disabled:cursor-not-allowed"
        />
    </div>
</template>
