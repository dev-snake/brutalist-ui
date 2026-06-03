<script setup lang="ts">
import { Card3D } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-8 items-center">
        <Card3D class="w-full max-w-sm">
            <div class="p-6">
                <h3 class="text-lg font-black mb-2">3D 悬浮卡片</h3>
                <p class="text-sm">将鼠标移入卡片，体验 3D 物理偏转与反向阴影投影效果。</p>
            </div>
        </Card3D>

        <Card3D shadow="lg" class="w-full max-w-sm">
            <div class="p-6">
                <h3 class="text-lg font-black mb-2">大阴影变体</h3>
                <p class="text-sm">shadow="lg" 提供更大的偏移阴影。</p>
            </div>
        </Card3D>

        <Card3D shadow="xl" class="w-full max-w-sm">
            <div class="p-6">
                <h3 class="text-lg font-black mb-2">超大阴影变体</h3>
                <p class="text-sm">shadow="xl" 提供最大的偏移阴影。</p>
            </div>
        </Card3D>
    </div>
</template>
