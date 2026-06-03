<script setup lang="ts">
import { Marquee } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-4 w-full">
        <Marquee :speed="15" fade>
            <span>⚡️ FAST AND FLUID</span>
            <span>💥 NEO-BRUTALISM</span>
            <span>🚀 VUE 3 + TAILWIND</span>
            <span>🔥 SHADCN INSPIRED</span>
        </Marquee>
        <Marquee :speed="25" direction="right" class="bg-brutal-primary text-brutal-fg">
            <span>💻 CODES AND BUGS</span>
            <span>🛠️ BUILD TO SHIPPED</span>
            <span>🌟 OPEN SOURCE</span>
        </Marquee>
    </div>
</template>
