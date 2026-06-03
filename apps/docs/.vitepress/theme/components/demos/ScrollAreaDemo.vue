<script setup lang="ts">
import { ScrollArea } from 'brutx-ui-vue'
</script>

<template>
    <ScrollArea class="h-72 w-64 rounded-brutal border-3 border-brutal">
        <div class="p-4">
            <p
                v-for="i in 8"
                :key="i"
                class="mb-3 text-sm font-bold"
            >
                Item {{ i }}
            </p>
        </div>
    </ScrollArea>
</template>
