<script setup lang="ts">
import { ref } from 'vue'
import { Combobox } from 'brutx-ui-vue'

const selected = ref<string | undefined>(undefined)

const options = [
    { value: 'vue', label: 'Vue' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
]
</script>

<template>
    <div class="w-full max-w-sm">
        <Combobox
            v-model="selected"
            :options="options"
            placeholder="Select a framework..."
            search-placeholder="Search frameworks..."
        />
    </div>
</template>
