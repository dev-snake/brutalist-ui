<script setup lang="ts">
import { TabsNav } from 'brutx-ui-vue'
import type { TabItem } from 'brutx-ui-vue'

const tabs: TabItem[] = [
    { label: '概览', value: 'overview' },
    { label: '分析', value: 'analytics' },
    { label: '设置', value: 'settings' },
]
</script>

<template>
    <TabsNav :tabs="tabs" />
</template>
