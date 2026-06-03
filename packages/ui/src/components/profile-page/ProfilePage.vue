<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import Avatar from '../avatar/Avatar.vue'
import AvatarFallback from '../avatar/AvatarFallback.vue'
import Card from '../card/Card.vue'
import CardHeader from '../card/CardHeader.vue'
import CardContent from '../card/CardContent.vue'
import CardTitle from '../card/CardTitle.vue'
import Input from '../input/Input.vue'
import Button from '../button/Button.vue'
import Textarea from '../textarea/Textarea.vue'

interface ProfilePageProps {
    title?: string
    name?: string
    email?: string
    bio?: string
    class?: string
}

const props = withDefaults(defineProps<ProfilePageProps>(), {
    title: undefined,
    name: undefined,
    email: undefined,
    bio: undefined,
    class: '',
})

const emit = defineEmits<{
    save: [payload: { name: string; email: string; bio: string }]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('profilePage.defaultTitle'))
const resolvedNameLabel = computed(() => t('profilePage.nameLabel'))
const resolvedEmailLabel = computed(() => t('profilePage.emailLabel'))
const resolvedBioLabel = computed(() => t('profilePage.bioLabel'))
const resolvedSaveText = computed(() => t('profilePage.saveText'))

const formName = ref(props.name ?? '')
const formEmail = ref(props.email ?? '')
const formBio = ref(props.bio ?? '')

watch(() => props.name, (val) => { formName.value = val ?? '' })
watch(() => props.email, (val) => { formEmail.value = val ?? '' })
watch(() => props.bio, (val) => { formBio.value = val ?? '' })

const avatarInitials = computed(() => {
    if (!formName.value) return ''
    const parts = formName.value.trim().split(/\s+/)
    return parts.length >= 2
        ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
        : formName.value.slice(0, 2).toUpperCase()
})

function handleSave() {
    emit('save', {
        name: formName.value,
        email: formEmail.value,
        bio: formBio.value,
    })
}

const rootClasses = computed(() =>
    cn('min-h-screen bg-brutal-bg p-4 sm:p-8', props.class)
)
</script>

<template>
    <div :class="rootClasses">
        <div class="w-full max-w-2xl mx-auto">
            <slot name="header">
                <div class="mb-8">
                    <h1 class="text-3xl font-black tracking-tight">
                        {{ resolvedTitle }}
                    </h1>
                </div>
            </slot>

            <slot>
                <Card variant="elevated">
                    <CardHeader class="items-center text-center">
                        <Avatar size="lg">
                            <AvatarFallback>{{ avatarInitials }}</AvatarFallback>
                        </Avatar>
                        <CardTitle class="mt-4">{{ formName || resolvedNameLabel }}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-6">
                            <div class="space-y-2">
                                <label class="font-bold text-sm" for="profile-name">{{ resolvedNameLabel }}</label>
                                <Input
                                    id="profile-name"
                                    v-model="formName"
                                    :placeholder="resolvedNameLabel"
                                />
                            </div>
                            <div class="space-y-2">
                                <label class="font-bold text-sm" for="profile-email">{{ resolvedEmailLabel }}</label>
                                <Input
                                    id="profile-email"
                                    v-model="formEmail"
                                    type="email"
                                    :placeholder="resolvedEmailLabel"
                                />
                            </div>
                            <div class="space-y-2">
                                <label class="font-bold text-sm" for="profile-bio">{{ resolvedBioLabel }}</label>
                                <Textarea
                                    id="profile-bio"
                                    v-model="formBio"
                                    :placeholder="resolvedBioLabel"
                                />
                            </div>
                            <div class="flex justify-end">
                                <Button variant="primary" @click="handleSave">
                                    {{ resolvedSaveText }}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </slot>

            <slot name="footer" />
        </div>
    </div>
</template>
