---
title: Form 表单
description: 完整的表单字段包装器，集成了 Vee-Validate 与 Zod 模式校验支持。
---

# Form 表单

新粗野主义风格的表单系统，基于 vee-validate 构建，提供可组合的子组件用于结构化表单布局。

## 预览

<ComponentPreview>
  <FormDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="form" />

**需要额外安装依赖：**

```bash
pnpm add vee-validate @vee-validate/zod zod
```

## 用法

```vue
<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import Form from '@/components/ui/form/Form.vue'
import FormField from '@/components/ui/form/FormField.vue'
import FormItem from '@/components/ui/form/FormItem.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormControl from '@/components/ui/form/FormControl.vue'
import FormDescription from '@/components/ui/form/FormDescription.vue'
import FormMessage from '@/components/ui/form/FormMessage.vue'
import Input from '@/components/ui/input/Input.vue'
import SubmitButton from '@/components/ui/submit-button/SubmitButton.vue'

const schema = toTypedSchema(z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
}))

function onSubmit(values) {
    console.log('Form submitted:', values)
}
</script>

<template>
    <Form :validation-schema="schema" @submit="onSubmit">
        <FormField name="username" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" placeholder="Enter username" />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField name="email" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="email" placeholder="you@example.com" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <SubmitButton variant="primary">Submit</SubmitButton>
    </Form>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `Form` | 根表单组件，集成 vee-validate |
| `FormField` | 字段包装器，连接表单状态，提供 `value` 和 `setValue` |
| `FormItem` | 标签、控件和消息的布局容器 |
| `FormLabel` | 支持错误状态的标签，注入字段上下文 |
| `FormControl` | 输入控件的包装器，注入字段上下文 |
| `FormDescription` | 输入框下方的辅助文本 |
| `FormMessage` | 验证错误消息，注入字段上下文 |

## 字段上下文

`FormField` 通过 `provide/inject` 向子组件提供 `FormFieldContext`：

```ts
interface FormFieldContext {
    name: string
    error: Ref<string | undefined>
    value: Ref<unknown>        // 字段当前值
    setValue: (value: unknown) => void  // 设置字段值
}
```

`FormControl`、`FormLabel`、`FormMessage` 均注入此上下文，可直接访问字段值和错误状态。

## Props

### Form

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
| `initialValues` | `Record<string, unknown>` | — |
| `validationSchema` | `unknown` | — |

### FormField

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `name` | `string` | —（必填） |

### FormLabel

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'error' \| 'success' \| 'muted'` | `'default'` |
| `class` | `string` | — |

## 事件

### Form

| 事件 | 载荷 |
|------|------|
| `submit` | `Record<string, unknown>` |
