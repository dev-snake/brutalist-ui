<script setup lang="ts">
import { StepperSection } from 'brutx-ui-vue'
import type { StepperStepItem } from 'brutx-ui-vue'

const steps: StepperStepItem[] = [
    { title: '选择方案', description: '选择适合您的订阅方案' },
    { title: '填写信息', description: '输入您的账户和支付信息' },
    { title: '确认订单', description: '核对订单详情并确认' },
    { title: '完成', description: '订阅已激活，开始使用' },
]
</script>

<template>
    <StepperSection :steps="steps" :current-step="1" />
</template>
