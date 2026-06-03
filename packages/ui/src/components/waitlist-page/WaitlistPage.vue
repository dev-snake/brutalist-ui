<script setup lang="ts">
import { computed, ref } from 'vue'
import { Sparkles, Users, Star } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import Button from '../button/Button.vue'
import Input from '../input/Input.vue'

interface WaitlistPageProps {
    title?: string
    description?: string
    ctaText?: string
    waitlistCount?: number
    class?: string
}

const props = withDefaults(defineProps<WaitlistPageProps>(), {
    title: undefined,
    description: '',
    ctaText: undefined,
    waitlistCount: 0,
    class: '',
})

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('waitlistPage.title'))
const resolvedCtaText = computed(() => props.ctaText ?? t('waitlistPage.ctaText'))

const emit = defineEmits<{
    submit: [email: string]
}>()

const email = ref('')

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const rootClasses = computed(() => cn('w-full max-w-lg mx-auto text-center', props.class))

function handleSubmit() {
    if (email.value && EMAIL_REGEX.test(email.value)) {
        emit('submit', email.value)
    }
}
</script>

<template>
    <div :class="rootClasses">
        <div class="inline-flex items-center gap-2 mb-6 bg-brutal-accent px-3 py-1 border-3 border-brutal rotate-[-1deg]">
            <Sparkles class="h-4 w-4 stroke-[3] animate-spin" />
            <span class="font-black text-sm">{{ t('waitlistPage.earlyAccess') }}</span>
        </div>

        <h1 class="text-3xl font-black tracking-tight">
{{ resolvedTitle }}
</h1>
        <p v-if="description" class="mt-3 text-brutal-muted-foreground font-medium">
{{ description }}
</p>

        <form class="mt-8 flex flex-col sm:flex-row gap-3" @submit.prevent="handleSubmit">
            <Input v-model="email" type="email" placeholder="you@example.com" class="flex-1" />
            <Button type="submit" variant="primary">
{{ resolvedCtaText }}
</Button>
        </form>

        <div class="mt-8 flex items-center justify-center gap-6 text-sm font-bold text-brutal-muted-foreground">
            <div v-if="waitlistCount > 0" class="flex items-center gap-1">
                <Users class="h-4 w-4 stroke-[3]" />
                <span>{{ t('waitlistPage.onWaitlist', { count: waitlistCount.toLocaleString() }) }}</span>
            </div>
            <div class="flex items-center gap-1">
                <Star v-for="i in 5" :key="i" class="h-3 w-3 fill-brutal-accent text-brutal-accent" />
            </div>
            <div class="flex items-center gap-1">
                <div class="h-2 w-2 rounded-full bg-brutal-success animate-pulse" />
                <span>{{ t('waitlistPage.live') }}</span>
            </div>
        </div>
    </div>
</template>
