<script setup lang="ts">
import { ref, computed } from 'vue';
import { cn } from '../../lib/utils';
import { useLocale } from '@/composables/useLocale';
import { kanbanColumnVariants, kanbanCardVariants } from './kanban-variants';

export interface KanbanCard {
    id: string;
    title: string;
    description?: string;
    tags?: string[];
    color?: string;
}

export interface KanbanColumn {
    id: string;
    title: string;
    color?: string;
    cards: KanbanCard[];
}

interface KanbanBoardProps {
    modelValue: KanbanColumn[];
    class?: string;
}

const props = defineProps<KanbanBoardProps>();

const emit = defineEmits<{
    'update:modelValue': [columns: KanbanColumn[]];
    'card-move': [cardId: string, fromColumn: string, toColumn: string];
}>();

const { t } = useLocale();

const draggingCard = ref<{ cardId: string; fromColumn: string } | null>(null);
const dragOverColumn = ref<string | null>(null);

const columns = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
});

function onDragStart(cardId: string, fromColumn: string) {
    draggingCard.value = { cardId, fromColumn };
}

function onDragEnd() {
    draggingCard.value = null;
    dragOverColumn.value = null;
}

function onDragOver(e: DragEvent, columnId: string) {
    e.preventDefault();
    dragOverColumn.value = columnId;
}

function onDragLeave(columnId: string) {
    if (dragOverColumn.value === columnId) {
        dragOverColumn.value = null;
    }
}

function onDrop(toColumnId: string) {
    if (!draggingCard.value) return;
    const { cardId, fromColumn } = draggingCard.value;
    if (fromColumn === toColumnId) {
        dragOverColumn.value = null;
        draggingCard.value = null;
        return;
    }

    const sourceColumn = columns.value.find((col) => col.id === fromColumn);
    const card = sourceColumn?.cards.find((c) => c.id === cardId);
    if (!card) {
        draggingCard.value = null;
        dragOverColumn.value = null;
        return;
    }

    const newColumns = columns.value.map((col) => {
        if (col.id === fromColumn) {
            return { ...col, cards: col.cards.filter((c) => c.id !== cardId) };
        }
        if (col.id === toColumnId) {
            return { ...col, cards: [...col.cards, card] };
        }
        return col;
    });

    emit('update:modelValue', newColumns);
    emit('card-move', cardId, fromColumn, toColumnId);
    draggingCard.value = null;
    dragOverColumn.value = null;
}

const boardClass = computed(() => cn('flex gap-4 overflow-x-auto pb-4', props.class));

const columnClassesMap = computed(() => {
    const map = new Map<string, string>()
    columns.value.forEach((col) => {
        map.set(col.id, cn(kanbanColumnVariants({ dragOver: dragOverColumn.value === col.id })))
    })
    return map
})

const cardClassesMap = computed(() => {
    const map = new Map<string, string>()
    columns.value.forEach((col) => {
        col.cards.forEach((card) => {
            map.set(card.id, cn(kanbanCardVariants({ dragging: draggingCard.value?.cardId === card.id })))
        })
    })
    return map
})
</script>

<template>
    <div :class="boardClass">
        <div
            v-for="col in columns"
            :key="col.id"
            :class="columnClassesMap.get(col.id)"
            @dragover="onDragOver($event, col.id)"
            @dragleave="onDragLeave(col.id)"
            @drop="onDrop(col.id)"
        >
            <!-- Column Header -->
            <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                    <span
                        v-if="col.color"
                        class="inline-block w-3 h-3 rounded-brutal border-3 border-brutal"
                        :style="{ background: col.color }"
                    />
                    <h3 class="font-black text-sm tracking-wide uppercase text-brutal-fg">{{ col.title }}</h3>
                </div>
                <span class="text-xs font-bold border-3 border-brutal px-1.5 py-0.5 rounded-brutal bg-brutal-bg shadow-brutal">
                    {{ col.cards.length }}
                </span>
            </div>

            <!-- Cards -->
            <div class="flex flex-col gap-2 min-h-[120px]">
                <div
                    v-for="card in col.cards"
                    :key="card.id"
                    :class="cardClassesMap.get(card.id)"
                    draggable="true"
                    @dragstart="onDragStart(card.id, col.id)"
                    @dragend="onDragEnd"
                >
                    <p class="font-bold text-sm text-brutal-fg">{{ card.title }}</p>
                    <p v-if="card.description" class="text-xs text-brutal-fg opacity-70 mt-1">
                        {{ card.description }}
                    </p>
                    <div v-if="card.tags && card.tags.length" class="flex flex-wrap gap-1 mt-2">
                        <span
                            v-for="tag in card.tags"
                            :key="tag"
                            class="text-xs font-bold px-1.5 py-0.5 border-3 border-brutal rounded-brutal bg-brutal-accent"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </div>

                <!-- Empty State -->
                <div
                    v-if="col.cards.length === 0"
                    class="flex items-center justify-center h-16 border-3 border-dashed border-brutal rounded-brutal text-xs font-medium opacity-40"
                >
                    {{ t('kanban.dropCardsHere') }}
                </div>
            </div>

            <!-- Add Card Slot -->
            <slot :name="`add-${col.id}`" />
        </div>
    </div>
</template>
