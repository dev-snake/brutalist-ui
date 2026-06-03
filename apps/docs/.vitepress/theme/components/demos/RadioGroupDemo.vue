<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from 'brutx-ui-vue'

const selected = ref('option-1')
</script>

<template>
    <RadioGroup v-model="selected" default-value="option-1">
        <div class="flex items-center gap-3">
            <RadioGroupItem value="option-1" />
            <span class="text-sm font-bold">Option 1</span>
        </div>
        <div class="flex items-center gap-3">
            <RadioGroupItem value="option-2" />
            <span class="text-sm font-bold">Option 2</span>
        </div>
        <div class="flex items-center gap-3">
            <RadioGroupItem value="option-3" />
            <span class="text-sm font-bold">Option 3</span>
        </div>
    </RadioGroup>
</template>
