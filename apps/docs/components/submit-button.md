---
title: Submit Button 提交按钮
description: 提交按钮，自带防重复提交逻辑与加载中状态切换。
---

# Submit Button 提交按钮

新粗野主义风格提交按钮，内置加载和等待状态，专为表单提交设计。

## 预览

<ComponentPreview>
  <SubmitButtonDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="submit-button" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import SubmitButton from '@/components/ui/submit-button/SubmitButton.vue'

const isLoading = ref(false)

async function handleSubmit() {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    isLoading.value = false
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <SubmitButton :loading="isLoading" variant="primary">
            Save Changes
        </SubmitButton>
    </form>
</template>
```

## 配合表单使用

```vue
<script setup>
import { ref } from 'vue'
import Form from '@/components/ui/form/Form.vue'
import SubmitButton from '@/components/ui/submit-button/SubmitButton.vue'

const isLoading = ref(false)

function onSubmit(values) {
    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
    }, 2000)
}
</script>

<template>
    <Form @submit="onSubmit">
        <SubmitButton :loading="isLoading" variant="primary">
            Sign In
        </SubmitButton>
    </Form>
</template>
```

## 等待文本

加载时，按钮会显示 `pendingText` 属性的值，而非插槽内容：

```vue
<script setup>
import SubmitButton from '@/components/ui/submit-button/SubmitButton.vue'
</script>

<template>
    <SubmitButton loading pending-text="Processing..." variant="primary">
        Pay Now
    </SubmitButton>
</template>
```

## 属性

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'danger' \| 'success' \| 'outline' \| 'ghost' \| 'link'` | `'default'` |
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'icon'` | `'default'` |
| `pendingText` | `string` | locale: `submitButton.submitting` |
| `loading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `class` | `string` | — |

## 行为

- 按钮渲染为 `<button type="submit">` 用于表单提交
- 当 `loading` 为 `true` 时，按钮被禁用并显示旋转图标
- 当 `loading` 为 `true` 时，插槽内容被替换为 `pendingText`
- `disabled` 属性或 `loading` 状态都会阻止点击
