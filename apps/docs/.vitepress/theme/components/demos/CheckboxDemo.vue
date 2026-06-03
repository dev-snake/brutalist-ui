<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from 'brutx-ui-vue'

const checked = ref(false)
</script>

<template>
    <div class="flex items-center gap-3">
        <Checkbox v-model:checked="checked" />
        <span class="text-sm font-bold">Accept terms and conditions</span>
    </div>
</template>
