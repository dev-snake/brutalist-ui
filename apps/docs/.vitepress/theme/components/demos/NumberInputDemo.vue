<script setup lang="ts">
import { ref } from 'vue'
import { NumberInput } from 'brutx-ui-vue'

const val1 = ref(10)
const val2 = ref(20)
</script>

<template>
    <div class="flex flex-col gap-6 w-full max-w-[300px]">
        <div>
            <label class="block text-sm font-black mb-2">双侧分立式 (Split Layout)</label>
            <NumberInput v-model="val1" :min="0" :max="100" layout="split" />
        </div>
        <div>
            <label class="block text-sm font-black mb-2">右侧堆叠式 (Stacked Layout)</label>
            <NumberInput v-model="val2" :min="0" :max="100" layout="stacked" />
        </div>
    </div>
</template>
