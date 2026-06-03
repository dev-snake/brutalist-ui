<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'brutx-ui-vue'

const enabled = ref(false)
</script>

<template>
    <div class="flex items-center gap-3">
        <Switch v-model="enabled" />
        <span class="text-sm font-bold">{{ enabled ? 'Enabled' : 'Disabled' }}</span>
    </div>
</template>
