<script setup lang="ts">
import { BeforeAfter } from 'brutx-ui-vue'

const beforeImg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%23FF6B6B"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="64" font-family="sans-serif" font-weight="bold" fill="%23000000">BEFORE (珊瑚红)</text></svg>`
const afterImg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%234ECDC4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="64" font-family="sans-serif" font-weight="bold" fill="%23000000">AFTER (薄荷青)</text></svg>`
</script>

<template>
    <div class="w-full max-w-[500px]">
        <BeforeAfter
            :before="beforeImg"
            :after="afterImg"
            :default-value="40"
        />
    </div>
</template>
