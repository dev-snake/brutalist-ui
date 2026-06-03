<script setup lang="ts">
import { ref } from 'vue'
import { Counter } from 'brutx-ui-vue'

const stats = [
    { to: 12800, suffix: '+', label: '组件安装次数', size: 'lg' as const },
    { to: 99.9, suffix: '%', decimals: 1, label: '可用性', size: 'lg' as const },
    { to: 56, label: '内置组件数', size: 'lg' as const },
]

const key = ref(0)
function restart() { key.value++ }
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
                v-for="stat in stats"
                :key="stat.label"
                class="flex flex-col items-center gap-2 border-3 border-brutal shadow-brutal rounded-brutal p-4 bg-brutal-bg"
            >
                <Counter
                    :key="key"
                    :to="stat.to"
                    :suffix="stat.suffix ?? ''"
                    :decimals="stat.decimals ?? 0"
                    :size="stat.size"
                    :duration="2000"
                    easing="ease-out"
                />
                <p class="text-xs font-bold opacity-60 text-center">{{ stat.label }}</p>
            </div>
        </div>
        <div class="flex justify-center">
            <button
                class="text-xs font-bold border-3 border-brutal px-3 py-1.5 rounded-brutal shadow-brutal bg-brutal-muted transition-all hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-none"
                @click="restart"
            >
                🔄 重新播放动画
            </button>
        </div>
    </div>
</template>
