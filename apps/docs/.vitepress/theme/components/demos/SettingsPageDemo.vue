<script setup lang="ts">
import { SettingsPage } from 'brutx-ui-vue'
import type { SettingsTab } from 'brutx-ui-vue'

const tabs: SettingsTab[] = [
    { label: '通用', value: 'general' },
    { label: '通知', value: 'notifications' },
    { label: '安全', value: 'security' },
]
</script>

<template>
    <div class="w-full overflow-x-auto">
        <SettingsPage :tabs="tabs" />
    </div>
</template>
