<script setup lang="ts">
import { computed } from 'vue';
import { ChevronRight, File, Folder, FolderOpen } from 'lucide-vue-next';
import { cn } from '../../lib/utils';
import { treeItemVariants } from './tree-view-variants';
import type { TreeNode } from './TreeView.vue';

const INDENT_PER_DEPTH = 20
const BASE_INDENT = 4

interface TreeViewNodeProps {
    node: TreeNode;
    selectedId?: string | null;
    expandedIds: Set<string>;
    depth?: number;
}

const props = withDefaults(defineProps<TreeViewNodeProps>(), {
    selectedId: null,
    depth: 0,
});

const emit = defineEmits<{
    'toggle': [id: string];
    'select': [node: TreeNode];
}>();

const isLeaf = computed(() => !props.node.children || props.node.children.length === 0);
const isExpanded = computed(() => props.expandedIds.has(props.node.id));
const isSelected = computed(() => props.selectedId === props.node.id);

const itemClass = computed(() =>
    cn(treeItemVariants({ selected: isSelected.value }))
);

const indentStyle = computed(() => ({
    paddingLeft: `${props.depth * INDENT_PER_DEPTH + BASE_INDENT}px`,
}));
</script>

<template>
    <div role="treeitem" :aria-expanded="!isLeaf ? isExpanded : undefined" :aria-selected="isSelected">
        <div
            :class="itemClass"
            :style="indentStyle"
            @click="isLeaf ? emit('select', node) : (emit('toggle', node.id), emit('select', node))"
        >
            <ChevronRight
                v-if="!isLeaf"
                :class="cn('w-4 h-4 flex-shrink-0 transition-transform duration-150', isExpanded && 'rotate-90')"
            />
            <span v-else class="w-4 flex-shrink-0" />

            <FolderOpen v-if="!isLeaf && isExpanded" class="w-4 h-4 flex-shrink-0 text-brutal-primary" />
            <Folder v-else-if="!isLeaf" class="w-4 h-4 flex-shrink-0" />
            <File v-else class="w-4 h-4 flex-shrink-0 opacity-60" />

            <span class="truncate">{{ node.label }}</span>
        </div>

        <Transition name="tree-expand">
            <div v-if="!isLeaf && isExpanded" role="group">
                <TreeViewNode
                    v-for="child in node.children"
                    :key="child.id"
                    :node="child"
                    :selected-id="selectedId"
                    :expanded-ids="expandedIds"
                    :depth="depth + 1"
                    @toggle="emit('toggle', $event)"
                    @select="emit('select', $event)"
                />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.tree-expand-enter-active,
.tree-expand-leave-active {
    transition: opacity 0.15s ease, grid-template-rows 0.2s ease;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr;
}
.tree-expand-enter-from,
.tree-expand-leave-to {
    opacity: 0;
    grid-template-rows: 0fr;
}
</style>
