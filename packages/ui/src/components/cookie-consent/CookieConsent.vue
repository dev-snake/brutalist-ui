<script setup lang="ts">
import { computed } from 'vue'
import { Cookie } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import Button from '../button/Button.vue'

interface CookieConsentProps {
    title?: string
    description?: string
    acceptText?: string
    declineText?: string
    class?: string
}

const props = withDefaults(defineProps<CookieConsentProps>(), {
    title: undefined,
    description: undefined,
    acceptText: undefined,
    declineText: undefined,
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    accept: []
    decline: []
}>()

const rootClasses = computed(() =>
    cn(
        'fixed bottom-0 left-0 right-0 z-50 p-4',
        props.class
    )
)

const cardClasses = computed(() =>
    cn(
        'mx-auto w-full max-w-4xl',
        'border-3 border-brutal shadow-brutal-lg',
    )
)

const resolvedTitle = computed(() => props.title ?? t('cookieConsent.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('cookieConsent.defaultDescription'))
const resolvedAcceptText = computed(() => props.acceptText ?? t('cookieConsent.defaultAcceptText'))
const resolvedDeclineText = computed(() => props.declineText ?? t('cookieConsent.defaultDeclineText'))
</script>

<template>
    <div :class="rootClasses">
        <Card :class="cardClasses" variant="default">
            <CardContent class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex items-start gap-3">
                    <Cookie class="h-6 w-6 shrink-0 stroke-[2.5] mt-0.5" />
                    <div>
                        <h3 class="text-base font-black tracking-tight">
{{ resolvedTitle }}
</h3>
                        <p class="mt-1 text-sm text-brutal-muted-foreground font-medium">
{{ resolvedDescription }}
</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 sm:flex-row sm:shrink-0">
                    <Button variant="outline" size="sm" @click="emit('decline')">
                        {{ resolvedDeclineText }}
                    </Button>
                    <Button variant="primary" size="sm" @click="emit('accept')">
                        {{ resolvedAcceptText }}
                    </Button>
                </div>
                <slot name="actions" />
            </CardContent>
        </Card>
    </div>
</template>
