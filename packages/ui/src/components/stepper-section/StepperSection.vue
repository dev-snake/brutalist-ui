<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Stepper from '../stepper/Stepper.vue'
import Button from '../button/Button.vue'
import Card from '../card/Card.vue'

export interface StepperStepItem {
    title: string
    description?: string
}

interface StepperSectionProps {
    title?: string
    steps?: StepperStepItem[]
    currentStep?: number
    class?: string
}

const props = withDefaults(defineProps<StepperSectionProps>(), {
    title: undefined,
    steps: () => [],
    currentStep: 0,
    class: '',
})

const emit = defineEmits<{
    'step-click': [index: number]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('stepperSection.defaultTitle'))
const resolvedPrevious = computed(() => t('stepperSection.previous'))
const resolvedNext = computed(() => t('stepperSection.next'))

const stepperSteps = computed(() =>
    props.steps.map((step, index) => ({
        id: index,
        title: step.title,
        description: step.description,
    }))
)

const canGoPrevious = computed(() => props.currentStep > 0)
const canGoNext = computed(() => props.currentStep < props.steps.length - 1)

const rootClasses = computed(() => cn('w-full max-w-3xl mx-auto', props.class))

function handleStepClick(index: number) {
    emit('step-click', index)
}

function handlePrevious() {
    if (canGoPrevious.value) {
        emit('step-click', props.currentStep - 1)
    }
}

function handleNext() {
    if (canGoNext.value) {
        emit('step-click', props.currentStep + 1)
    }
}
</script>

<template>
    <div :class="rootClasses">
        <slot name="header">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-black tracking-tight">
                    {{ resolvedTitle }}
                </h2>
            </div>
        </slot>

        <slot>
            <Stepper
                :steps="stepperSteps"
                :model-value="currentStep"
                orientation="horizontal"
                @step-click="handleStepClick"
            />

            <Card variant="default" class="mt-6">
                <div class="p-6">
                    <slot name="default" />
                </div>
            </Card>

            <div class="flex items-center justify-between mt-6">
                <Button
                    variant="outline"
                    :disabled="!canGoPrevious"
                    @click="handlePrevious"
                >
                    <ChevronLeft class="h-4 w-4 mr-1" />
                    {{ resolvedPrevious }}
                </Button>
                <Button
                    variant="primary"
                    :disabled="!canGoNext"
                    @click="handleNext"
                >
                    {{ resolvedNext }}
                    <ChevronRight class="h-4 w-4 ml-1" />
                </Button>
            </div>
        </slot>

        <slot name="footer" />
    </div>
</template>
