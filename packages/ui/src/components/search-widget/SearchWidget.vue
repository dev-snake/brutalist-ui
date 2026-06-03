<script setup lang="ts">
import { computed, ref } from 'vue'
import { Search } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import Command from '../command/Command.vue'
import CommandInput from '../command/CommandInput.vue'
import CommandList from '../command/CommandList.vue'
import CommandGroup from '../command/CommandGroup.vue'
import CommandItem from '../command/CommandItem.vue'
import CommandEmpty from '../command/CommandEmpty.vue'

export interface SearchSuggestion {
    label: string
    value: string
    group?: string
}

interface SearchWidgetProps {
    placeholder?: string
    suggestions?: SearchSuggestion[]
    class?: string
}

const props = withDefaults(defineProps<SearchWidgetProps>(), {
    placeholder: undefined,
    suggestions: () => [],
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    search: [value: string]
    select: [suggestion: SearchSuggestion]
}>()

const rootClasses = computed(() => cn('w-full max-w-lg', props.class))

const resolvedPlaceholder = computed(() => props.placeholder ?? t('searchWidget.defaultPlaceholder'))

const query = ref('')

const filteredSuggestions = computed(() => {
    if (!query.value) return []
    const q = query.value.toLowerCase()
    return props.suggestions.filter(s => s.label.toLowerCase().includes(q))
})

const groupedSuggestions = computed(() => {
    const groups: Record<string, SearchSuggestion[]> = {}
    for (const suggestion of filteredSuggestions.value) {
        const group = suggestion.group ?? ''
        if (!groups[group]) groups[group] = []
        groups[group].push(suggestion)
    }
    return groups
})

function handleSearch(value: string) {
    query.value = value
    emit('search', value)
}

function handleSelect(value: string) {
    const suggestion = props.suggestions.find(s => s.value === value)
    if (suggestion) {
        emit('select', suggestion)
    }
}
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <CardContent class="p-0">
            <Command>
                <CommandInput
                    :placeholder="resolvedPlaceholder"
                    :model-value="query"
                    @update:model-value="handleSearch"
                />
                <CommandList v-if="query">
                    <CommandEmpty />
                    <CommandGroup
                        v-for="(groupSuggestions, groupKey) in groupedSuggestions"
                        :key="groupKey"
                        :heading="groupKey || undefined"
                    >
                        <CommandItem
                            v-for="suggestion in groupSuggestions"
                            :key="suggestion.value"
                            :value="suggestion.value"
                            @select="handleSelect"
                        >
                            <Search class="h-4 w-4 stroke-[3]" />
                            {{ suggestion.label }}
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
            <slot name="actions" />
        </CardContent>
    </Card>
</template>
