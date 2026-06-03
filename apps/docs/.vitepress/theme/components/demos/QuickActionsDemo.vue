<script setup lang="ts">
import { QuickActions } from 'brutx-ui-vue'
import { Plus, Upload, Download, Settings, Bell, Search } from 'lucide-vue-next'
import type { ActionItem } from 'brutx-ui-vue'

const actions: ActionItem[] = [
    { label: '新建', icon: Plus, variant: 'primary' },
    { label: '上传', icon: Upload, variant: 'secondary' },
    { label: '下载', icon: Download, variant: 'outline' },
    { label: '设置', icon: Settings, variant: 'outline' },
    { label: '通知', icon: Bell, variant: 'outline' },
    { label: '搜索', icon: Search, variant: 'outline' },
]
</script>

<template>
    <QuickActions :actions="actions" />
</template>
