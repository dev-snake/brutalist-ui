<script setup lang="ts">
import { computed } from 'vue';
import { Check } from 'lucide-vue-next';
import { cn } from '../../lib/utils';
import { stepperDotVariants, stepperConnectorVariants } from './stepper-variants';
import { useLocale } from '@/composables/useLocale';

export interface StepperStep {
    id: string | number;
    title: string;
    description?: string;
}

const MIN_VERTICAL_CONNECTOR_HEIGHT = '2rem'

interface StepperProps {
    steps: StepperStep[];
    modelValue: number; // 0-indexed current step
    orientation?: 'horizontal' | 'vertical';
    class?: string;
}

const props = withDefaults(defineProps<StepperProps>(), {
    orientation: 'horizontal',
});

const { t } = useLocale();

const emit = defineEmits<{
    'update:modelValue': [step: number];
    'step-click': [index: number];
}>();

function getState(index: number): 'completed' | 'active' | 'upcoming' {
    if (index < props.modelValue) return 'completed';
    if (index === props.modelValue) return 'active';
    return 'upcoming';
}

function clickStep(index: number) {
    emit('update:modelValue', index);
    emit('step-click', index);
}

const rootClass = computed(() =>
    cn(
        props.orientation === 'horizontal'
            ? 'flex flex-row items-start w-full'
            : 'flex flex-col gap-0',
        props.class
    )
);

const stepWrapClasses = computed(() =>
    cn(
        props.orientation === 'horizontal'
            ? 'flex flex-col items-center flex-1 min-w-0'
            : 'flex flex-row items-start gap-3'
    )
)

const dotCompletedClasses = computed(() =>
    cn(stepperDotVariants({ state: 'completed' }), 'cursor-pointer')
)

const dotActiveClasses = computed(() =>
    cn(stepperDotVariants({ state: 'active' }), 'cursor-pointer')
)

const dotUpcomingClasses = computed(() =>
    cn(stepperDotVariants({ state: 'upcoming' }), 'cursor-pointer')
)

const connectorCompletedClasses = computed(() =>
    cn(stepperConnectorVariants({ orientation: props.orientation, completed: true }))
)

const connectorIncompleteClasses = computed(() =>
    cn(stepperConnectorVariants({ orientation: props.orientation, completed: false }))
)

const dotClassesMap = computed(() => {
    const map = new Map<number, string>()
    props.steps.forEach((_, index) => {
        const state = getState(index)
        if (state === 'completed') map.set(index, dotCompletedClasses.value)
        else if (state === 'active') map.set(index, dotActiveClasses.value)
        else map.set(index, dotUpcomingClasses.value)
    })
    return map
})

const connectorClassesMap = computed(() => {
    const map = new Map<number, string>()
    props.steps.forEach((_, index) => {
        const completed = index < props.modelValue
        map.set(index, completed ? connectorCompletedClasses.value : connectorIncompleteClasses.value)
    })
    return map
})
</script>

<template>
    <div :class="rootClass" role="list" :aria-label="t('stepper.progressSteps')">
        <template v-for="(step, index) in steps" :key="step.id">
            <!-- Step Item -->
            <div
                :class="stepWrapClasses"
                role="listitem"
                :aria-current="index === modelValue ? 'step' : undefined"
            >
                <!-- Horizontal: dot row with connectors -->
                <div
                    v-if="orientation === 'horizontal'"
                    class="flex items-center w-full"
                >
                    <!-- Left connector (not for first) -->
                    <div
                        v-if="index > 0"
                        :class="connectorClassesMap.get(index)"
                    />

                    <!-- Dot -->
                    <button
                        :class="dotClassesMap.get(index)"
                        type="button"
                        :aria-label="t('stepper.step', { index: index + 1, title: step.title })"
                        @click="clickStep(index)"
                    >
                        <Check v-if="getState(index) === 'completed'" class="w-4 h-4" />
                        <span v-else>{{ index + 1 }}</span>
                    </button>

                    <!-- Right connector (not for last) -->
                    <div
                        v-if="index < steps.length - 1"
                        :class="connectorClassesMap.get(index)"
                    />
                </div>

                <!-- Horizontal: label below dot -->
                <div
                    v-if="orientation === 'horizontal'"
                    class="mt-2 text-center px-1"
                    :class="getState(index) === 'upcoming' ? 'opacity-50' : ''"
                >
                    <p class="text-xs font-black tracking-wide truncate">{{ step.title }}</p>
                    <p v-if="step.description" class="text-xs font-medium opacity-60 mt-0.5 truncate">
                        {{ step.description }}
                    </p>
                </div>

                <!-- Vertical layout -->
                <template v-if="orientation === 'vertical'">
                    <div class="flex flex-col items-center">
                        <!-- Dot -->
                        <button
                            :class="dotClassesMap.get(index)"
                            type="button"
                            :aria-label="t('stepper.step', { index: index + 1, title: step.title })"
                            @click="clickStep(index)"
                        >
                            <Check v-if="getState(index) === 'completed'" class="w-4 h-4" />
                            <span v-else>{{ index + 1 }}</span>
                        </button>
                        <!-- Vertical connector below dot -->
                        <div
                            v-if="index < steps.length - 1"
                            :class="connectorClassesMap.get(index)"
                            :style="{ minHeight: MIN_VERTICAL_CONNECTOR_HEIGHT }"
                        />
                    </div>

                    <!-- Label right of dot -->
                    <div
                        class="pb-6 min-w-0 flex-1"
                        :class="getState(index) === 'upcoming' ? 'opacity-50' : ''"
                    >
                        <p class="text-sm font-black tracking-wide">{{ step.title }}</p>
                        <p v-if="step.description" class="text-xs font-medium opacity-60 mt-0.5">
                            {{ step.description }}
                        </p>
                        <!-- Content slot for active vertical step -->
                        <div v-if="index === modelValue" class="mt-3">
                            <slot :name="`step-${step.id}`" />
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>
