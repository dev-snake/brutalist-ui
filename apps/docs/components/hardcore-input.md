---
title: HardcoreInput 硬核输入框
description: 带 8-bit 复古音效、表情反馈和物理震动的表单校验输入框，集成 Form 系统。
---

# HardcoreInput 硬核输入框

输入框校验器的终极形态。通过 Web Audio API 动态合成 8-bit 复古电子音效（零音频依赖），同时在校验结果变化时触发 Neobrutalist 表情弹跳与物理震动。

## 预览

<ComponentPreview>
  <HardcoreInputDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="hardcore-input" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import HardcoreInput from '@/components/ui/hardcore-input/HardcoreInput.vue'

const value = ref('')

const minLength = (val) => val.length >= 5 || '至少需要 5 个字符'
const hasNumber = (val) => /\d/.test(val) || '必须包含数字'
</script>

<template>
    <HardcoreInput
        v-model="value"
        placeholder="输入内容..."
        :rules="[minLength, hasNumber]"
        validate-on="blur"
    />
</template>
```

## 校验触发时机

| 模式 | 说明 |
|------|------|
| `blur` | 失焦时校验（默认） |
| `input` | 每次输入时实时校验 |
| `submit` | 外部调用 `validate()` 时校验 |

## 音效系统

通过 `useAudioEngine` composable 使用 Web Audio API 合成三种音效：

| 音效 | 波形 | 说明 |
|------|------|------|
| `type` | Triangle | 打字音效，带 50ms 节流 |
| `success` | Sine | 校验通过，频率上升 |
| `fail` | Square | 校验失败，频率下降 |

可通过 `sound` prop 禁用音效。

## 视觉反馈

- **成功**：输入框边框变为 `--brutal-success` 色，右侧显示酷表情 SVG
- **错误**：输入框边框变为 `--brutal-destructive` 色，右侧显示怒气表情 SVG，输入框产生抖动动画
- **默认**：无额外反馈

## Form 集成

HardcoreInput 可与 Form 系统集成，当存在于 `FormField` 中时自动同步校验状态：

```vue
<Form v-slot="{ handleSubmit }">
    <FormField v-slot="{ componentField }" name="username">
        <FormItem>
            <FormLabel>用户名</FormLabel>
            <HardcoreInput v-bind="componentField" :rules="[minLength]" />
            <FormMessage />
        </FormItem>
    </FormField>
</Form>
```

## 无障碍

- 输入框设置了 `:aria-invalid` 和 `:aria-describedby`
- 错误消息设置了 `aria-live="polite"`
- 当用户偏好 `prefers-reduced-motion: reduce` 时，抖动和弹跳动画被禁用

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string` | `''` | v-model 绑定值 |
| `sound` | `boolean` | `true` | 是否启用 8-bit 复古电子音效 |
| `rules` | `Array<(val: string) => boolean \| string>` | `[]` | 校验规则函数列表 |
| `shakeOnError` | `boolean` | `true` | 输入错误时是否触发输入框抖动 |
| `type` | `string` | `'text'` | HTML input type 属性 |
| `placeholder` | `string` | `''` | 占位文本 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `validateOn` | `'input' \| 'blur' \| 'submit'` | `'blur'` | 校验触发时机 |
| `class` | `string` | — | 外部类覆盖 |

## 事件

| 事件 | 参数 | 说明 |
|------|------|------|
| `@update:modelValue` | `(value: string)` | v-model 更新事件 |
| `@validationChange` | `(state, message?)` | 校验状态变化事件 |

## 插槽

| 插槽 | 说明 |
|------|------|
| `default` | 输入框右侧附加内容（如图标、表情区域覆盖） |

## 暴露属性/方法

| 名称 | 说明 |
|------|------|
| `validate()` | 主动触发校验 |
| `validationState` | 当前校验状态 |
| `errorMessage` | 当前错误消息 |
