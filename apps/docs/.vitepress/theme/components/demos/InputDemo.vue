<script setup lang="ts">
import { ref } from 'vue'
import { Input } from 'brutx-ui-vue'

const value = ref('')
const errorValue = ref('')
</script>

<template>
    <div class="flex flex-col gap-4 w-full max-w-sm">
        <Input v-model="value" placeholder="Default input" />
        <Input v-model="errorValue" variant="error" placeholder="Error input" />
    </div>
</template>
