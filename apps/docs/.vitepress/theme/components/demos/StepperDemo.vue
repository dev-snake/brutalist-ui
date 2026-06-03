<script setup lang="ts">
import { ref } from 'vue'
import { Stepper } from 'brutx-ui-vue'
import type { StepperStep } from 'brutx-ui-vue'

const steps: StepperStep[] = [
    { id: 1, title: '账户信息', description: '填写基本资料' },
    { id: 2, title: '安全设置', description: '设置密码与验证' },
    { id: 3, title: '偏好配置', description: '个性化设置' },
    { id: 4, title: '完成', description: '注册成功' },
]

const current = ref(1)

function prev() { if (current.value > 0) current.value-- }
function next() { if (current.value < steps.length - 1) current.value++ }
</script>

<template>
    <div class="flex flex-col gap-6 w-full max-w-2xl mx-auto">
        <!-- 水平步骤条 -->
        <div class="border-3 border-brutal shadow-brutal rounded-brutal p-5 bg-brutal-bg">
            <p class="text-xs font-bold opacity-50 mb-4 uppercase tracking-widest">水平</p>
            <Stepper v-model="current" :steps="steps" orientation="horizontal" />

            <div class="mt-6 flex justify-between">
                <button
                    :disabled="current === 0"
                    class="text-sm font-black border-3 border-brutal px-4 py-1.5 rounded-brutal shadow-brutal bg-brutal-bg transition-all hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-brutal"
                    @click="prev"
                >
                    ← 上一步
                </button>
                <button
                    :disabled="current === steps.length - 1"
                    class="text-sm font-black border-3 border-brutal px-4 py-1.5 rounded-brutal shadow-brutal bg-brutal-primary transition-all hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-brutal"
                    @click="next"
                >
                    下一步 →
                </button>
            </div>
        </div>

        <!-- 垂直步骤条 -->
        <div class="border-3 border-brutal shadow-brutal rounded-brutal p-5 bg-brutal-bg">
            <p class="text-xs font-bold opacity-50 mb-4 uppercase tracking-widest">垂直</p>
            <Stepper v-model="current" :steps="steps" orientation="vertical" />
        </div>
    </div>
</template>
