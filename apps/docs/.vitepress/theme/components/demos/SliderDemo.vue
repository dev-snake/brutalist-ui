<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from 'brutx-ui-vue'

const value = ref([60])
</script>

<template>
    <div class="w-full max-w-sm space-y-2">
        <Slider v-model="value" :default-value="[60]" />
        <p class="text-sm font-bold text-brutal-muted-foreground">
            Value: {{ value[0] }}
        </p>
    </div>
</template>
