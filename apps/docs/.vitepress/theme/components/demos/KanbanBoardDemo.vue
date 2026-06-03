<script setup lang="ts">
import { ref } from 'vue'
import { KanbanBoard } from 'brutx-ui-vue'
import type { KanbanColumn } from 'brutx-ui-vue'

const columns = ref<KanbanColumn[]>([
    {
        id: 'todo',
        title: '待办',
        color: 'var(--brutal-muted)',
        cards: [
            { id: 'c1', title: '设计首页 Banner', description: '确定配色与排版方案', tags: ['设计'] },
            { id: 'c2', title: '编写组件文档', tags: ['文档'] },
        ],
    },
    {
        id: 'doing',
        title: '进行中',
        color: 'var(--brutal-accent)',
        cards: [
            { id: 'c3', title: '开发 Kanban 组件', description: '支持拖拽排序', tags: ['开发', 'P0'] },
        ],
    },
    {
        id: 'done',
        title: '已完成',
        color: 'var(--brutal-success)',
        cards: [
            { id: 'c4', title: 'Accordion 组件', tags: ['完成'] },
            { id: 'c5', title: 'Timeline 组件', tags: ['完成'] },
        ],
    },
])
</script>

<template>
    <div class="overflow-x-auto">
        <KanbanBoard v-model="columns" />
    </div>
</template>
