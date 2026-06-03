---
title: Stepper 步骤条
description: 多步骤进度指示组件，支持水平与垂直方向，完成/激活/未开始三种状态，可点击跳转，适合多步表单与向导流程。
---

# Stepper 步骤条

可视化的多步流程引导组件，完成步骤带勾选图标，激活步骤高亮放大，粗边框圆形节点与连接线尽显新粗野主义质感。

## 预览

<ComponentPreview>
  <StepperDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="stepper" />

## 用法

```vue
<script setup>
import { Stepper } from '@/components/ui/stepper'
import type { StepperStep } from '@/components/ui/stepper'
import { ref } from 'vue'

const steps: StepperStep[] = [
    { id: 1, title: '基本信息', description: '填写账户资料' },
    { id: 2, title: '安全设置', description: '设置密码' },
    { id: 3, title: '完成', description: '注册成功' },
]

const current = ref(0)
</script>

<template>
    <!-- 水平步骤条 -->
    <Stepper v-model="current" :steps="steps" orientation="horizontal" />

    <!-- 垂直步骤条（支持内容插槽） -->
    <Stepper v-model="current" :steps="steps" orientation="vertical">
        <template #step-1>
            <p class="text-sm">在此填写第一步的内容...</p>
        </template>
        <template #step-2>
            <p class="text-sm">在此填写第二步的内容...</p>
        </template>
    </Stepper>

    <!-- 导航按钮 -->
    <button :disabled="current === 0" @click="current--">上一步</button>
    <button :disabled="current === steps.length - 1" @click="current++">下一步</button>
</template>
```

## StepperStep 类型

```ts
interface StepperStep {
    id: string | number   // 唯一标识（垂直插槽名为 step-{id}）
    title: string         // 步骤标题
    description?: string  // 可选副标题
}
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `steps` | `StepperStep[]` | — | 步骤数据列表 |
| `modelValue` | `number` | — | 当前步骤索引（0 开始，v-model） |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 布局方向 |
| `class` | `string` | — | 根节点自定义样式类 |

## 事件

| 事件 | 参数 | 说明 |
|------|------|------|
| `update:modelValue` | `number` | 步骤变更（v-model） |
| `step-click` | `number` | 点击某步骤节点时触发 |

## 插槽（垂直模式）

垂直模式下，每个步骤在激活时可通过 `#step-{id}` 插槽注入内容区域：

```html
<Stepper v-model="current" :steps="steps" orientation="vertical">
    <template #step-1>
        <!-- 第一步激活时展示的内容 -->
    </template>
</Stepper>
```

## 节点状态说明

| 状态 | 样式 | 条件 |
|------|------|------|
| `completed` | 绿色背景 + ✓ 图标 | 索引 < 当前步骤 |
| `active` | 主色背景 + 阴影放大 | 索引 = 当前步骤 |
| `upcoming` | 白色背景 + 半透明 | 索引 > 当前步骤 |
