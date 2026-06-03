<script setup lang="ts">
import { ref } from 'vue'
import { TreeView } from 'brutx-ui-vue'
import type { TreeNode } from 'brutx-ui-vue'

const nodes: TreeNode[] = [
    {
        id: 'src',
        label: 'src',
        children: [
            {
                id: 'components',
                label: 'components',
                children: [
                    { id: 'button', label: 'Button.vue' },
                    { id: 'input', label: 'Input.vue' },
                ],
            },
            {
                id: 'composables',
                label: 'composables',
                children: [
                    { id: 'useToast', label: 'useToast.ts' },
                ],
            },
            { id: 'index', label: 'index.ts' },
        ],
    },
    {
        id: 'public',
        label: 'public',
        children: [
            { id: 'favicon', label: 'favicon.ico' },
        ],
    },
    { id: 'pkg', label: 'package.json' },
]

const selected = ref<string | null>('button')
</script>

<template>
    <div class="w-full max-w-sm border-3 border-brutal shadow-brutal rounded-brutal p-3 bg-brutal-bg">
        <TreeView
            v-model="selected"
            :nodes="nodes"
            :default-expanded="['src', 'components']"
        />
        <p v-if="selected" class="mt-3 text-xs font-bold border-t-3 border-brutal pt-2 opacity-60">
            已选择：{{ selected }}
        </p>
    </div>
</template>
