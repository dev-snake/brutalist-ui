<script setup lang="ts">
import { computed } from 'vue'
import { AlertTriangle, RotateCw, X } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import Button from '../button/Button.vue'
import Alert from '../alert/Alert.vue'
import AlertTitle from '../alert/AlertTitle.vue'
import AlertDescription from '../alert/AlertDescription.vue'

interface ErrorCardProps {
    title?: string
    description?: string
    retryText?: string
    class?: string
}

const props = withDefaults(defineProps<ErrorCardProps>(), {
    title: undefined,
    description: undefined,
    retryText: undefined,
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    retry: []
    dismiss: []
}>()

const rootClasses = computed(() => cn('w-full max-w-md', props.class))

const resolvedTitle = computed(() => props.title ?? t('errorCard.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('errorCard.defaultDescription'))
const resolvedRetryText = computed(() => props.retryText ?? t('errorCard.defaultRetryText'))
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <Alert variant="danger" class="mb-4">
            <AlertTriangle class="h-5 w-5" />
            <AlertTitle>{{ resolvedTitle }}</AlertTitle>
            <AlertDescription>{{ resolvedDescription }}</AlertDescription>
        </Alert>
        <CardContent>
            <div class="flex items-center justify-end gap-3">
                <Button variant="ghost" size="sm" @click="emit('dismiss')">
                    <X class="mr-1 h-4 w-4 stroke-[3]" />
                    {{ t('errorCard.dismiss') }}
                </Button>
                <Button variant="primary" size="sm" @click="emit('retry')">
                    <RotateCw class="mr-1 h-4 w-4 stroke-[3]" />
                    {{ resolvedRetryText }}
                </Button>
            </div>
            <slot name="actions" />
        </CardContent>
    </Card>
</template>
