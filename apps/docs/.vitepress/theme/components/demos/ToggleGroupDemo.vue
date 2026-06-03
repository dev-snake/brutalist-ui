<script setup lang="ts">
import { ref } from 'vue'
import { ToggleGroup, ToggleGroupItem } from 'brutx-ui-vue'

const selected = ref<string[]>([])
</script>

<template>
    <ToggleGroup v-model="selected" type="multiple">
        <ToggleGroupItem value="bold">B</ToggleGroupItem>
        <ToggleGroupItem value="italic">I</ToggleGroupItem>
        <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
</template>
