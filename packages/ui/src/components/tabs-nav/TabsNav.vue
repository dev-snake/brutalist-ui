<script setup lang="ts">
import { computed } from 'vue'
import { TabsRoot } from 'reka-ui'
import { cn } from '../../lib/utils'
import TabsList from '../tabs/TabsList.vue'
import TabsTrigger from '../tabs/TabsTrigger.vue'
import TabsContent from '../tabs/TabsContent.vue'
import Card from '../card/Card.vue'

export interface TabItem {
    label: string
    value: string
}

interface TabsNavProps {
    tabs?: TabItem[]
    defaultValue?: string
    class?: string
}

const props = withDefaults(defineProps<TabsNavProps>(), {
    tabs: () => [],
    defaultValue: undefined,
    class: '',
})

const rootClasses = computed(() => cn('w-full max-w-4xl mx-auto', props.class))

const activeDefaultValue = computed(() => {
    if (props.defaultValue) return props.defaultValue
    if (props.tabs.length > 0) return props.tabs[0].value
    return ''
})
</script>

<template>
    <div :class="rootClasses">
        <slot name="header" />

        <TabsRoot :default-value="activeDefaultValue" class="w-full">
            <TabsList class="w-full flex">
                <TabsTrigger
                    v-for="tab in tabs"
                    :key="tab.value"
                    :value="tab.value"
                    class="flex-1"
                >
                    {{ tab.label }}
                </TabsTrigger>
            </TabsList>

            <slot>
                <TabsContent
                    v-for="tab in tabs"
                    :key="tab.value"
                    :value="tab.value"
                >
                    <Card variant="flat">
                        <p class="text-brutal-muted-foreground font-medium">{{ tab.label }}</p>
                    </Card>
                </TabsContent>
            </slot>
        </TabsRoot>

        <slot name="footer" />
    </div>
</template>
