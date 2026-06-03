<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Button from '../button/Button.vue'
import Separator from '../separator/Separator.vue'

export interface FooterLink {
    label: string
    href?: string
}

export interface FooterLinkGroup {
    title: string
    links: FooterLink[]
}

interface FooterSectionProps {
    logoText?: string
    description?: string
    linkGroups?: FooterLinkGroup[]
    copyright?: string
    class?: string
}

const props = withDefaults(defineProps<FooterSectionProps>(), {
    logoText: undefined,
    description: undefined,
    linkGroups: () => [],
    copyright: undefined,
    class: '',
})

const emit = defineEmits<{
    'link-click': [payload: { groupIndex: number; linkIndex: number }]
}>()

const { t } = useLocale()

const resolvedLogoText = computed(() => props.logoText ?? t('footerSection.defaultLogoText'))
const resolvedDescription = computed(() => props.description ?? t('footerSection.defaultDescription'))
const resolvedCopyright = computed(() => props.copyright ?? t('footerSection.defaultCopyright'))

const rootClasses = computed(() =>
    cn(
        'w-full',
        'bg-brutal-bg border-3 border-t border-brutal',
        props.class
    )
)
</script>

<template>
    <footer :class="rootClasses">
        <div class="max-w-7xl mx-auto px-4 md:px-6 py-10">
            <slot name="header">
                <div class="mb-8">
                    <span class="text-xl font-black tracking-tight text-brutal-fg">
                        {{ resolvedLogoText }}
                    </span>
                    <p v-if="resolvedDescription" class="mt-2 text-sm text-brutal-muted-foreground font-medium max-w-sm">
                        {{ resolvedDescription }}
                    </p>
                </div>
            </slot>

            <slot>
                <div v-if="linkGroups.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div v-for="(group, groupIndex) in linkGroups" :key="groupIndex">
                        <h3 class="font-black text-sm tracking-wide text-brutal-fg mb-3">
                            {{ group.title }}
                        </h3>
                        <ul class="space-y-2">
                            <li v-for="(link, linkIndex) in group.links" :key="linkIndex">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    class="px-0 text-brutal-muted-foreground hover:text-brutal-fg"
                                    @click="emit('link-click', { groupIndex, linkIndex })"
                                >
                                    {{ link.label }}
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </slot>

            <Separator />

            <slot name="footer">
                <div class="pt-6 text-center">
                    <p class="text-sm text-brutal-muted-foreground font-medium">
                        {{ resolvedCopyright }}
                    </p>
                </div>
            </slot>
        </div>
    </footer>
</template>
