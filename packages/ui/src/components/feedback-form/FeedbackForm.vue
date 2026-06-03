<script setup lang="ts">
import { computed, ref } from 'vue'
import { Send } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardHeader from '../card/CardHeader.vue'
import CardContent from '../card/CardContent.vue'
import CardTitle from '../card/CardTitle.vue'
import CardDescription from '../card/CardDescription.vue'
import Input from '../input/Input.vue'
import Textarea from '../textarea/Textarea.vue'
import Button from '../button/Button.vue'

interface FeedbackFormProps {
    title?: string
    description?: string
    submitText?: string
    class?: string
}

const props = withDefaults(defineProps<FeedbackFormProps>(), {
    title: undefined,
    description: undefined,
    submitText: undefined,
    class: '',
})

const emit = defineEmits<{
    submit: [payload: { name: string; email: string; subject: string; message: string }]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('feedbackForm.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('feedbackForm.defaultDescription'))
const resolvedSubmitText = computed(() => props.submitText ?? t('feedbackForm.defaultSubmitText'))
const nameLabel = computed(() => t('feedbackForm.nameLabel'))
const emailLabel = computed(() => t('feedbackForm.emailLabel'))
const subjectLabel = computed(() => t('feedbackForm.subjectLabel'))
const messageLabel = computed(() => t('feedbackForm.messageLabel'))

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const rootClasses = computed(() => cn('w-full max-w-2xl mx-auto', props.class))

function handleSubmit() {
    emit('submit', {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    })
}
</script>

<template>
    <div :class="rootClasses">
        <slot name="header">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-black tracking-tight">
                    {{ resolvedTitle }}
                </h2>
                <p v-if="resolvedDescription" class="mt-2 text-brutal-muted-foreground font-medium">
                    {{ resolvedDescription }}
                </p>
            </div>
        </slot>

        <slot>
            <Card variant="default">
                <CardHeader>
                    <CardTitle class="text-xl">
                        {{ resolvedTitle }}
                    </CardTitle>
                    <CardDescription v-if="resolvedDescription">
                        {{ resolvedDescription }}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form class="space-y-4" @submit.prevent="handleSubmit">
                        <div class="space-y-2">
                            <label class="text-sm font-bold text-brutal-fg">
                                {{ nameLabel }}
                            </label>
                            <Input v-model="name" :placeholder="nameLabel" />
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-bold text-brutal-fg">
                                {{ emailLabel }}
                            </label>
                            <Input v-model="email" type="email" :placeholder="emailLabel" />
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-bold text-brutal-fg">
                                {{ subjectLabel }}
                            </label>
                            <Input v-model="subject" :placeholder="subjectLabel" />
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-bold text-brutal-fg">
                                {{ messageLabel }}
                            </label>
                            <Textarea v-model="message" :placeholder="messageLabel" />
                        </div>
                        <Button variant="primary" type="submit" class="w-full">
                            <Send class="h-4 w-4 mr-2" />
                            {{ resolvedSubmitText }}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </slot>

        <slot name="footer" />
    </div>
</template>
