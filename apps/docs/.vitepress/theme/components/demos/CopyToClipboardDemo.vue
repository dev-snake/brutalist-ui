<script setup lang="ts">
import { CopyToClipboard } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-4 items-start">
        <CopyToClipboard text="pnpm add brutx-ui-vue" />
        <CopyToClipboard text="Hello Neo-Brutalism!" class="bg-brutal-accent text-brutal-fg" />
    </div>
</template>
