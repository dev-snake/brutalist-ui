<script setup lang="ts">
import { ref, computed, toRef, inject, onUnmounted, useId } from 'vue'
import { cn } from '../../lib/utils'
import { useAudioEngine } from '../../composables/useAudioEngine'
import { useLocale } from '@/composables/useLocale'
import { hardcoreInputVariants, hardcoreInputFaceVariants } from './hardcore-input-variants'
import { formFieldKey, type FormFieldContext } from '../form/form-context'

interface HardcoreInputProps {
    modelValue?: string
    sound?: boolean
    rules?: Array<(val: string) => boolean | string>
    shakeOnError?: boolean
    type?: string
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
    validateOn?: 'input' | 'blur' | 'submit'
    class?: string
}

const props = withDefaults(defineProps<HardcoreInputProps>(), {
    modelValue: '',
    sound: true,
    rules: () => [],
    shakeOnError: true,
    type: 'text',
    placeholder: '',
    disabled: false,
    readonly: false,
    validateOn: 'blur',
    class: '',
})

const emit = defineEmits<{
    'update:modelValue': [value: string]
    'validationChange': [state: 'default' | 'success' | 'error', message?: string]
}>()

const getUniqueId = () => {
    try {
        const id = useId()
        return id.replace(/:/g, '-')
    } catch {
        return Math.random().toString(36).substring(2, 9)
    }
}

const errorId = `input-error-${getUniqueId()}`

const validationState = ref<'default' | 'success' | 'error'>('default')
const errorMessage = ref<string>('')
const triggerShake = ref(false)

const audioEngine = useAudioEngine(toRef(props, 'sound'))
const { t } = useLocale()

const formField = inject<FormFieldContext | null>(formFieldKey, null)

onUnmounted(() => {
    audioEngine.dispose()
})

const validate = (value: string) => {
    if (props.rules.length === 0) {
        if (validationState.value !== 'default') {
            validationState.value = 'default'
            errorMessage.value = ''
            emit('validationChange', 'default')
        }
        return
    }

    let isOk = true
    let errText = ''

    for (const rule of props.rules) {
        const result = rule(value)
        if (result !== true) {
            isOk = false
            errText = typeof result === 'string' ? result : t('hardcoreInput.invalidInput')
            break
        }
    }

    const prevState = validationState.value

    if (!isOk) {
        validationState.value = 'error'
        errorMessage.value = errText
        
        if (prevState !== 'error') {
            audioEngine.playSound('fail')
        }
        
        if (props.shakeOnError) {
            triggerShake.value = false
            setTimeout(() => {
                triggerShake.value = true
            }, 10)
        }
        emit('validationChange', 'error', errText)
    } else {
        validationState.value = 'success'
        errorMessage.value = ''
        
        if (prevState !== 'success') {
            audioEngine.playSound('success')
        }
        emit('validationChange', 'success')
    }

    if (formField) {
        formField.error.value = !isOk ? errText : undefined
    }
}

const onInput = (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    emit('update:modelValue', value)
    
    // 键盘打字音效
    audioEngine.playSound('type')

    if (props.validateOn === 'input') {
        validate(value)
    }
}

const onBlur = () => {
    if (props.validateOn === 'blur') {
        validate(props.modelValue)
    }
}

const onAnimationEnd = () => {
    triggerShake.value = false
}

// 暴露外部主动校验接口
const triggerValidate = () => {
    validate(props.modelValue)
}

defineExpose({
    validate: triggerValidate,
    validationState,
    errorMessage,
})

const containerClasses = computed(() =>
    cn('relative w-full flex flex-col gap-1.5', props.class)
)

const inputClasses = computed(() =>
    cn(
        hardcoreInputVariants({ validationState: validationState.value }),
        triggerShake.value ? 'animate-shake' : ''
    )
)

const faceClasses = computed(() =>
    cn(
        hardcoreInputFaceVariants(),
        validationState.value === 'success' ? 'bg-brutal-success' : '',
        validationState.value === 'error' ? 'bg-brutal-destructive text-white animate-bounce-short' : ''
    )
)
</script>

<template>
    <div :class="containerClasses">
        <div class="relative flex items-center w-full">
            <input
                :type="type"
                :value="modelValue"
                :disabled="disabled"
                :readonly="readonly"
                :placeholder="placeholder"
                :class="inputClasses"
                :aria-invalid="validationState === 'error'"
                :aria-describedby="errorMessage ? errorId : undefined"
                @input="onInput"
                @blur="onBlur"
                @animationend="onAnimationEnd"
            />
            
            <!-- 右侧校验反馈表情 -->
            <div class="absolute right-3 flex items-center z-10 pointer-events-none select-none">
                <slot>
                    <div v-if="validationState !== 'default'" :class="faceClasses">
                        <!-- 成功 (😎) SVG -->
                        <svg v-if="validationState === 'success'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <circle cx="12" cy="12" r="10" fill="var(--brutal-accent, #FFE66D)" stroke="currentColor" stroke-width="2.5" />
                            <!-- 墨镜 -->
                            <rect x="6" y="8" width="5" height="4" rx="1.5" fill="black" stroke="black" stroke-width="1" />
                            <rect x="13" y="8" width="5" height="4" rx="1.5" fill="black" stroke="black" stroke-width="1" />
                            <line x1="11" y1="10" x2="13" y2="10" stroke="black" stroke-width="2" />
                            <!-- 微笑嘴巴 -->
                            <path d="M8 15 Q12 19 16 15" stroke="black" stroke-width="2.5" stroke-linecap="round" fill="none" />
                        </svg>
                        
                        <!-- 错误 (😠) SVG -->
                        <svg v-if="validationState === 'error'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <circle cx="12" cy="12" r="10" fill="var(--brutal-destructive, #EF476F)" stroke="currentColor" stroke-width="2.5" />
                            <!-- 倒八字愤怒眉毛 -->
                            <line x1="6" y1="8" x2="10" y2="10" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                            <line x1="18" y1="8" x2="14" y2="10" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                            <!-- 怒气眼睛 -->
                            <circle cx="8" cy="12" r="1.5" fill="black" />
                            <circle cx="16" cy="12" r="1.5" fill="black" />
                            <!-- 嘟起向下的嘴巴 -->
                            <path d="M9 17 Q12 14 15 17" stroke="black" stroke-width="2.5" stroke-linecap="round" fill="none" />
                        </svg>
                    </div>
                </slot>
            </div>
        </div>
        
        <!-- 错误校验提示文案 -->
        <p
            v-if="validationState === 'error' && errorMessage"
            :id="errorId"
            class="text-xs font-black tracking-wide text-brutal-destructive animate-fade-in"
            aria-live="polite"
        >
            {{ errorMessage }}
        </p>
    </div>
</template>

<style scoped>
@keyframes input-shake {
    0%, 100% { transform: translateX(0); }
    15%, 45%, 75% { transform: translateX(-6px); }
    30%, 60%, 90% { transform: translateX(6px); }
}

:deep(.animate-shake) {
    animation: input-shake 0.35s ease-in-out;
}

@keyframes bounce-short {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
}

:deep(.animate-bounce-short) {
    animation: bounce-short 0.4s ease-in-out 2;
}

@keyframes fade-in {
    from { opacity: 0; transform: translateY(-2px); }
    to { opacity: 1; transform: translateY(0); }
}

:deep(.animate-fade-in) {
    animation: fade-in 0.2s ease-out forwards;
}

@media (prefers-reduced-motion: reduce) {
    :deep(.animate-shake),
    :deep(.animate-bounce-short),
    :deep(.animate-fade-in) {
        animation: none !important;
        transform: none !important;
    }
}
</style>
