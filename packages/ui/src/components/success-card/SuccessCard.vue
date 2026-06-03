<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import Button from '../button/Button.vue'

interface SuccessCardProps {
    title?: string
    description?: string
    confirmText?: string
    class?: string
}

const props = withDefaults(defineProps<SuccessCardProps>(), {
    title: undefined,
    description: undefined,
    confirmText: undefined,
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    confirm: []
}>()

const rootClasses = computed(() => cn('w-full max-w-md', props.class))

const resolvedTitle = computed(() => props.title ?? t('successCard.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('successCard.defaultDescription'))
const resolvedConfirmText = computed(() => props.confirmText ?? t('successCard.defaultConfirmText'))
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <div class="h-2 bg-brutal-success border-b-3 border-brutal" />
        <CardContent class="pt-6">
            <div class="flex flex-col items-center text-center">
                <div class="relative mb-4">
                    <div class="absolute inset-0 bg-brutal-muted border-3 border-brutal translate-x-2 translate-y-2" />
                    <div class="relative h-16 w-16 flex items-center justify-center bg-brutal-success border-3 border-brutal shadow-brutal">
                        <Check class="h-8 w-8 stroke-[3]" />
                    </div>
                </div>
                <h3 class="text-xl font-black tracking-tight">
{{ resolvedTitle }}
</h3>
                <p v-if="resolvedDescription" class="mt-2 text-sm text-brutal-muted-foreground font-medium">
{{ resolvedDescription }}
</p>
                <Button variant="primary" class="mt-6" @click="emit('confirm')">
                    {{ resolvedConfirmText }}
                </Button>
                <slot name="actions" />
            </div>
        </CardContent>
    </Card>
</template>
