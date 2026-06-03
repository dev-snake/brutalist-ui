<script setup lang="ts">
import { Spinner, BlockSpinner, BarsSpinner } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex items-center gap-8">
        <div class="flex flex-col items-center gap-2">
            <Spinner />
            <span class="text-xs font-bold">Spinner</span>
        </div>
        <div class="flex flex-col items-center gap-2">
            <BlockSpinner />
            <span class="text-xs font-bold">BlockSpinner</span>
        </div>
        <div class="flex flex-col items-center gap-2">
            <BarsSpinner />
            <span class="text-xs font-bold">BarsSpinner</span>
        </div>
    </div>
</template>
