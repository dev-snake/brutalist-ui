<script setup lang="ts">
import { Label } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-4">
        <Label>Default Label</Label>
        <Label variant="error">Error Label</Label>
        <Label variant="success">Success Label</Label>
        <Label variant="muted">Muted Label</Label>
    </div>
</template>
