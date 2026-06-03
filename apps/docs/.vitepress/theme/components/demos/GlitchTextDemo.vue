<script setup lang="ts">
import { ref } from 'vue'
import { GlitchText } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-8">
        <div>
            <p class="text-sm font-bold mb-2">Hover 触发（默认）</p>
            <GlitchText text="BRUTAL GLITCH" class="text-4xl" />
        </div>

        <div>
            <p class="text-sm font-bold mb-2">Click 触发</p>
            <GlitchText text="CLICK ME" trigger="click" speed="fast" class="text-3xl" />
        </div>

        <div>
            <p class="text-sm font-bold mb-2">Autoplay 自动播放</p>
            <GlitchText text="AUTO GLITCH" trigger="autoplay" speed="slow" class="text-3xl" />
        </div>

        <div>
            <p class="text-sm font-bold mb-2">Speed 变体</p>
            <div class="flex gap-4 items-end">
                <GlitchText text="SLOW" trigger="click" speed="slow" class="text-2xl" />
                <GlitchText text="MEDIUM" trigger="click" speed="medium" class="text-2xl" />
                <GlitchText text="FAST" trigger="click" speed="fast" class="text-2xl" />
            </div>
        </div>
    </div>
</template>
