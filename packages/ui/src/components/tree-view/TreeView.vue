<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { cn } from '../../lib/utils';
import TreeViewNode from './TreeViewNode.vue';
import { useLocale } from '@/composables/useLocale';

export interface TreeNode {
    id: string;
    label: string;
    icon?: string;
    children?: TreeNode[];
    data?: unknown;
}

interface TreeViewProps {
    nodes: TreeNode[];
    modelValue?: string | null;
    defaultExpanded?: string[];
    class?: string;
}

const props = withDefaults(defineProps<TreeViewProps>(), {
    modelValue: null,
    defaultExpanded: () => [],
});

const emit = defineEmits<{
    'update:modelValue': [id: string | null];
    'select': [node: TreeNode];
    'expand': [id: string, expanded: boolean];
}>();

const { t } = useLocale();

const expandedIds = ref<Set<string>>(new Set(props.defaultExpanded));

watch(() => props.defaultExpanded, (newVal) => {
    expandedIds.value = new Set(newVal);
});

function toggleExpand(id: string) {
    const next = !expandedIds.value.has(id);
    if (next) {
        expandedIds.value.add(id);
    } else {
        expandedIds.value.delete(id);
    }
    emit('expand', id, next);
}

function selectNode(node: TreeNode) {
    emit('update:modelValue', node.id);
    emit('select', node);
}

const rootClass = computed(() => cn('flex flex-col gap-0.5', props.class));
</script>

<template>
    <div :class="rootClass" role="tree" :aria-label="t('treeView.fileTree')">
        <TreeViewNode
            v-for="node in nodes"
            :key="node.id"
            :node="node"
            :selected-id="modelValue"
            :expanded-ids="expandedIds"
            :depth="0"
            @toggle="toggleExpand"
            @select="selectNode"
        />
    </div>
</template>
