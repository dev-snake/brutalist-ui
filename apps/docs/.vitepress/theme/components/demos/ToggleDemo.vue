<script setup lang="ts">
import { ref } from 'vue'
import { Toggle } from 'brutx-ui-vue'
import { Bold, Italic } from 'lucide-vue-next'

const boldPressed = ref(false)
const italicPressed = ref(false)
</script>

<template>
    <div class="flex gap-2">
        <Toggle v-model:pressed="boldPressed" aria-label="Bold">
            <Bold class="h-4 w-4" />
        </Toggle>
        <Toggle v-model:pressed="italicPressed" aria-label="Italic">
            <Italic class="h-4 w-4" />
        </Toggle>
    </div>
</template>
