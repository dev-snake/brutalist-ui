<script setup lang="ts">
import { computed, ref } from 'vue'
import { TabsRoot } from 'reka-ui'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import TabsList from '../tabs/TabsList.vue'
import TabsTrigger from '../tabs/TabsTrigger.vue'
import TabsContent from '../tabs/TabsContent.vue'
import Card from '../card/Card.vue'
import CardHeader from '../card/CardHeader.vue'
import CardContent from '../card/CardContent.vue'
import CardTitle from '../card/CardTitle.vue'
import Input from '../input/Input.vue'
import Switch from '../switch/Switch.vue'
import Button from '../button/Button.vue'
import Separator from '../separator/Separator.vue'

export interface SettingsTab {
    label: string
    value: string
}

interface SettingsPageProps {
    title?: string
    tabs?: SettingsTab[]
    defaultTab?: string
    class?: string
}

const props = withDefaults(defineProps<SettingsPageProps>(), {
    title: undefined,
    tabs: () => [],
    defaultTab: undefined,
    class: '',
})

const emit = defineEmits<{
    save: [payload: { tab: string; values: Record<string, unknown> }]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('settingsPage.defaultTitle'))
const resolvedSaveText = computed(() => t('settingsPage.saveText'))
const resolvedNameLabel = computed(() => t('settingsPage.nameLabel'))
const resolvedNamePlaceholder = computed(() => t('settingsPage.namePlaceholder'))
const resolvedNotificationsLabel = computed(() => t('settingsPage.notificationsLabel'))

const activeTab = ref(props.defaultTab ?? (props.tabs.length > 0 ? props.tabs[0].value : ''))

const formValues = ref<Record<string, Record<string, unknown>>>({})

function getTabValues(tabValue: string): Record<string, unknown> {
    return formValues.value[tabValue] ?? {}
}

function setTabValue(tabValue: string, key: string, value: unknown) {
    if (!formValues.value[tabValue]) {
        formValues.value[tabValue] = {}
    }
    formValues.value[tabValue][key] = value
}

function handleSave() {
    emit('save', {
        tab: activeTab.value,
        values: getTabValues(activeTab.value),
    })
}

const rootClasses = computed(() =>
    cn('min-h-screen bg-brutal-bg p-4 sm:p-8', props.class)
)
</script>

<template>
    <div :class="rootClasses">
        <div class="w-full max-w-3xl mx-auto">
            <slot name="header">
                <div class="mb-8">
                    <h1 class="text-3xl font-black tracking-tight">
                        {{ resolvedTitle }}
                    </h1>
                </div>
            </slot>

            <slot>
                <TabsRoot v-model="activeTab" :default-value="props.defaultTab">
                    <TabsList class="w-full">
                        <TabsTrigger
                            v-for="tab in props.tabs"
                            :key="tab.value"
                            :value="tab.value"
                        >
                            {{ tab.label }}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent
                        v-for="tab in tabs"
                        :key="tab.value"
                        :value="tab.value"
                    >
                        <Card variant="flat">
                            <CardHeader>
                                <CardTitle>{{ tab.label }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="space-y-6">
                                    <slot :name="`tab-${tab.value}`" :values="getTabValues(tab.value)" :set-value="(key: string, val: unknown) => setTabValue(tab.value, key, val)">
                                        <div class="space-y-4">
                                            <div class="flex items-center justify-between">
                                                <label class="font-bold text-sm" :for="`setting-${tab.value}-name`">{{ resolvedNameLabel }}</label>
                                                <Input
                                                    :id="`setting-${tab.value}-name`"
                                                    :model-value="String(getTabValues(tab.value).name ?? '')"
                                                    :placeholder="resolvedNamePlaceholder"
                                                    class="max-w-xs"
                                                    @update:model-value="setTabValue(tab.value, 'name', $event)"
                                                />
                                            </div>
                                            <Separator />
                                            <div class="flex items-center justify-between">
                                                <label class="font-bold text-sm" :for="`setting-${tab.value}-notifications`">{{ resolvedNotificationsLabel }}</label>
                                                <Switch
                                                    :model-value="Boolean(getTabValues(tab.value).notifications ?? false)"
                                                    @update:model-value="setTabValue(tab.value, 'notifications', $event)"
                                                />
                                            </div>
                                        </div>
                                    </slot>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </TabsRoot>

                <div class="mt-6 flex justify-end">
                    <Button variant="primary" @click="handleSave">
                        {{ resolvedSaveText }}
                    </Button>
                </div>
            </slot>

            <slot name="footer" />
        </div>
    </div>
</template>
