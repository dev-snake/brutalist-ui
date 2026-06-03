<script setup lang="ts">
import { Badge } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-wrap items-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="danger">Destructive</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="outline">Outline</Badge>
    </div>
</template>
