<script setup lang="ts">
import { ScratchCard } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-8 items-center">
        <ScratchCard class="w-full max-w-sm h-48">
            <div class="flex items-center justify-center h-full bg-brutal-accent">
                <p class="text-2xl font-black">🎉 恭喜中奖！</p>
            </div>
        </ScratchCard>

        <ScratchCard class="w-full max-w-sm h-48" :percentage="30" overlay-color="#FFE66D">
            <div class="flex items-center justify-center h-full bg-brutal-success">
                <p class="text-2xl font-black">自定义底色</p>
            </div>
        </ScratchCard>
    </div>
</template>
