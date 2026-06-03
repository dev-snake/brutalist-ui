<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import Table from '../table/Table.vue'
import TableHeader from '../table/TableHeader.vue'
import TableBody from '../table/TableBody.vue'
import TableRow from '../table/TableRow.vue'
import TableHead from '../table/TableHead.vue'
import TableCell from '../table/TableCell.vue'
import Pagination from '../pagination/Pagination.vue'
import Input from '../input/Input.vue'

export interface ColumnDef {
    key: string
    label: string
    sortable?: boolean
}

interface DataTableSectionProps {
    title?: string
    columns?: ColumnDef[]
    rows?: Record<string, unknown>[]
    searchable?: boolean
    pageSize?: number
    class?: string
}

const DEFAULT_PAGE_SIZE = 10

const props = withDefaults(defineProps<DataTableSectionProps>(), {
    title: undefined,
    columns: () => [],
    rows: () => [],
    searchable: true,
    pageSize: DEFAULT_PAGE_SIZE,
    class: '',
})

const emit = defineEmits<{
    'row-click': [row: Record<string, unknown>]
    'sort': [payload: { key: string; direction: 'asc' | 'desc' }]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('dataTableSection.defaultTitle'))
const resolvedSearchPlaceholder = computed(() => t('dataTableSection.searchPlaceholder'))
const resolvedNoResults = computed(() => t('dataTableSection.noResults'))

const searchQuery = ref('')
const sortKey = ref('')
const sortDirection = ref<'asc' | 'desc'>('asc')
const currentPage = ref(1)

const filteredRows = computed(() => {
    if (!searchQuery.value) return props.rows
    const query = searchQuery.value.toLowerCase()
    return props.rows.filter(row =>
        Object.values(row).some(val =>
            String(val).toLowerCase().includes(query)
        )
    )
})

const sortedRows = computed(() => {
    if (!sortKey.value) return filteredRows.value
    const key = sortKey.value
    const dir = sortDirection.value
    return [...filteredRows.value].sort((a, b) => {
        const aVal = a[key]
        const bVal = b[key]
        if (aVal == null && bVal == null) return 0
        if (aVal == null) return dir === 'asc' ? -1 : 1
        if (bVal == null) return dir === 'asc' ? 1 : -1
        const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true })
        return dir === 'asc' ? cmp : -cmp
    })
})

const totalPages = computed(() => Math.max(1, Math.ceil(sortedRows.value.length / props.pageSize)))

const paginatedRows = computed(() => {
    const start = (currentPage.value - 1) * props.pageSize
    return sortedRows.value.slice(start, start + props.pageSize)
})

function handleSort(key: string) {
    if (sortKey.value === key) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
    } else {
        sortKey.value = key
        sortDirection.value = 'asc'
    }
    currentPage.value = 1
    emit('sort', { key, direction: sortDirection.value })
}

function handleRowClick(row: Record<string, unknown>) {
    emit('row-click', row)
}

function handleSearch() {
    currentPage.value = 1
}

const rootClasses = computed(() => cn('w-full max-w-5xl mx-auto', props.class))

const columnClasses = computed(() =>
    props.columns.map(col =>
        cn(col.sortable && 'cursor-pointer select-none active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all')
    )
)

function sortIcon(key: string) {
    if (sortKey.value !== key) return ArrowUpDown
    return sortDirection.value === 'asc' ? ArrowUp : ArrowDown
}
</script>

<template>
    <div :class="rootClasses">
        <slot name="header">
            <div class="mb-6">
                <h2 class="text-3xl font-black tracking-tight">
                    {{ resolvedTitle }}
                </h2>
            </div>
        </slot>

        <slot>
            <div v-if="searchable" class="mb-4">
                <Input
                    v-model="searchQuery"
                    :placeholder="resolvedSearchPlaceholder"
                    @update:model-value="handleSearch"
                />
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead
                            v-for="(col, index) in columns"
                            :key="col.key"
                            :class="columnClasses[index]"
                            @click="col.sortable && handleSort(col.key)"
                        >
                            <span class="inline-flex items-center gap-1">
                                {{ col.label }}
                                <component
                                    :is="sortIcon(col.key)"
                                    v-if="col.sortable"
                                    class="h-4 w-4 stroke-[3]"
                                />
                            </span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <template v-if="paginatedRows.length > 0">
                        <TableRow
                            v-for="(row, rowIndex) in paginatedRows"
                            :key="rowIndex"
                            class="cursor-pointer active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all"
                            @click="handleRowClick(row)"
                        >
                            <TableCell v-for="col in columns" :key="col.key">
                                {{ row[col.key] }}
                            </TableCell>
                        </TableRow>
                    </template>
                    <TableRow v-else>
                        <TableCell :colspan="columns.length || 1" class="text-center text-brutal-muted-foreground font-bold py-8">
                            {{ resolvedNoResults }}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div v-if="totalPages > 1" class="mt-4 flex justify-center">
                <Pagination
                    :current-page="currentPage"
                    :total-pages="totalPages"
                    @update:current-page="currentPage = $event"
                />
            </div>
        </slot>

        <slot name="footer" />
    </div>
</template>
