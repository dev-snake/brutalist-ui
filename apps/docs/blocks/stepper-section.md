---
title: Stepper Section
description: 步骤导航区块，带有水平步骤条、内容卡片和前后导航按钮。
---

# Stepper Section

新粗野主义风格的步骤导航区块，包含水平 Stepper、内容卡片和上一步/下一步按钮。

## 预览

<ComponentPreview>
  <StepperSectionDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block stepper-section
```

## 用法

```vue
<script setup>
import StepperSection from '@/components/ui/stepper-section/StepperSection.vue'
import type { StepperStepItem } from '@/components/ui/stepper-section/StepperSection.vue'

const steps: StepperStepItem[] = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Set up your profile' },
    { title: 'Complete', description: 'Review and finish' },
]

function handleStepClick(index: number) {
    console.log('Step:', index)
}
</script>

<template>
    <StepperSection
        title="Setup Wizard"
        :steps="steps"
        :current-step="0"
        @step-click="handleStepClick"
    />
</template>
```

## 自定义步骤内容

```vue
<script setup>
import { ref } from 'vue'
import StepperSection from '@/components/ui/stepper-section/StepperSection.vue'

const currentStep = ref(0)

const steps = [
    { title: 'Personal Info', description: 'Your basic information' },
    { title: 'Preferences', description: 'Customize your experience' },
    { title: 'Confirmation', description: 'Review your choices' },
]
</script>

<template>
    <StepperSection
        :steps="steps"
        :current-step="currentStep"
        @step-click="currentStep = $event"
    >
        <template v-if="currentStep === 0">
            <p>Personal info form goes here</p>
        </template>
        <template v-if="currentStep === 1">
            <p>Preferences form goes here</p>
        </template>
        <template v-if="currentStep === 2">
            <p>Confirmation summary goes here</p>
        </template>
    </StepperSection>
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `stepperSection.defaultTitle` |
| `steps` | `StepperStepItem[]` | `[]` |
| `currentStep` | `number` | `0` |
| `class` | `string` | — |

### StepperStepItem 类型

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 步骤标题 |
| `description` | `string` | 可选，步骤描述 |

## 事件

| 事件 | 载荷 |
|------|------|
| `step-click` | `[index: number]` |

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换/扩展区块头部 |
| `default` | 步骤内容区域（卡片内部） |
| `footer` | 替换/扩展区块底部 |

## 布局

StepperSection 包含：
- **头部**：居中标题
- **Stepper**：水平方向的步骤指示器
- **内容卡片**：Card 组件包裹的步骤内容区域
- **导航按钮**：上一步（outline 变体）和下一步（primary 变体），自动根据当前步骤禁用
