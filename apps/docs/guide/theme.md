# 主题与令牌

BrutxUI 使用 CSS 自定义属性（设计令牌）来控制新粗野主义系统的每个视觉方面。这让定制变得像覆盖一个变量一样简单。

## CSS 变量

所有令牌都以 `--brutal-` 为前缀，并在 `:root` 级别定义：

| 令牌 | 亮色模式 | 暗色模式 | 用途 |
|-------|-------|------|---------|
| `--brutal-border-width` | `3px` | `3px` | 所有组件的边框粗细 |
| `--brutal-border-color` | `#000000` | `#ffffff` | 边框颜色 |
| `--brutal-shadow-offset-x` | `4px` | `4px` | 阴影水平偏移 |
| `--brutal-shadow-offset-y` | `4px` | `4px` | 阴影垂直偏移 |
| `--brutal-shadow-color` | `#000000` | `#ffffff` | 阴影颜色 |
| `--brutal-radius` | `0px` | `0px` | 圆角元素的边框圆角 |
| `--brutal-bg` | `#ffffff` | `#141414` | 背景颜色 |
| `--brutal-fg` | `#000000` | `#ffffff` | 前景（文本）颜色 |
| `--brutal-primary` | `#FF6B6B` | `#FF6B6B` | 主色（珊瑚色） |
| `--brutal-secondary` | `#4ECDC4` | `#4ECDC4` | 辅助色（薄荷青） |
| `--brutal-accent` | `#FFE66D` | `#FFE66D` | 强调色（黄色） |
| `--brutal-destructive` | `#EF476F` | `#EF476F` | 危险/错误颜色 |
| `--brutal-success` | `#7FB069` | `#7FB069` | 成功颜色 |
| `--brutal-muted` | `#f3f4f6` | `#1e1e1e` | 柔和背景 |
| `--brutal-muted-foreground` | `#4B5563` | `#9CA3AF` | 柔和文本颜色 |
| `--brutal-ring` | `#000000` | `#ffffff` | 焦点环颜色 |
| `--brutal-pressed-offset` | `2px` | `2px` | 按下状态的 Y 轴偏移 |
| `--brutal-info` | `#4A90D9` | `#3B82F6` | 信息颜色 |
| `--brutal-overlay` | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.7)` | 遮罩背景 |
| `--brutal-placeholder` | `#9CA3AF` | `#6B7280` | 占位符文本颜色 |

## 主题预设

### Classic（默认）

标志性的 BrutxUI 风格。粗边框、硬阴影、零圆角、鲜艳色彩。

```css
.theme-classic {
    --brutal-border-width: 3px;
    --brutal-border-color: #000000;
    --brutal-shadow-offset-x: 4px;
    --brutal-shadow-offset-y: 4px;
    --brutal-shadow-color: #000000;
    --brutal-radius: 0px;
    --brutal-primary: #FF6B6B;
    --brutal-secondary: #4ECDC4;
    --brutal-accent: #FFE66D;
}
```

### Pastel

更柔和、更友好的风格。更细的边框、更小的阴影、圆角、柔和色调。

```css
.theme-pastel {
    --brutal-border-width: 2px;
    --brutal-border-color: #1e1e24;
    --brutal-shadow-offset-x: 3px;
    --brutal-shadow-offset-y: 3px;
    --brutal-shadow-color: #1e1e24;
    --brutal-radius: 8px;
    --brutal-primary: #d6c6e1;
    --brutal-secondary: #c5ded9;
    --brutal-accent: #fbe3b5;
}
```

### Mono

极致对比。超粗边框、更大阴影、灰度调色板。

```css
.theme-mono {
    --brutal-border-width: 4px;
    --brutal-border-color: #000000;
    --brutal-shadow-offset-x: 5px;
    --brutal-shadow-offset-y: 5px;
    --brutal-shadow-color: #000000;
    --brutal-radius: 0px;
    --brutal-primary: #000000;
    --brutal-secondary: #ffffff;
    --brutal-accent: #7a7a7a;
}
```

## 自定义令牌

在 `:root` 级别覆盖令牌以进行全局修改：

```css
:root {
    --brutal-primary: #8B5CF6;
    --brutal-secondary: #06B6D4;
    --brutal-radius: 4px;
}
```

或将覆盖范围限定到特定区域：

```css
.sidebar {
    --brutal-primary: #8B5CF6;
    --brutal-border-width: 2px;
}
```

## Tailwind 工具类

BrutxUI 注册了以下引用 CSS 变量的 Tailwind 工具类：

### 边框

| 工具类 | 映射到 |
|---------|---------|
| `border-3` | `border-width: var(--brutal-border-width)` |
| `border-brutal` | `border-color: var(--brutal-border-color)` |
| `rounded-brutal` | `border-radius: var(--brutal-radius)` |

### 阴影

| 工具类 | 映射到 |
|---------|---------|
| `shadow-brutal` | 完整偏移阴影 |
| `shadow-brutal-sm` | 半偏移阴影 |
| `shadow-brutal-lg` | 1.5 倍偏移阴影 |
| `shadow-brutal-xl` | 2 倍偏移阴影 |

### 颜色

| 工具类 | 映射到 |
|---------|---------|
| `bg-brutal-bg` | `var(--brutal-bg)` |
| `text-brutal-fg` | `var(--brutal-fg)` |
| `bg-brutal-primary` | `var(--brutal-primary)` |
| `bg-brutal-secondary` | `var(--brutal-secondary)` |
| `bg-brutal-accent` | `var(--brutal-accent)` |
| `bg-brutal-destructive` | `var(--brutal-destructive)` |
| `bg-brutal-success` | `var(--brutal-success)` |
| `bg-brutal-muted` | `var(--brutal-muted)` |
| `text-brutal-muted-foreground` | `var(--brutal-muted-foreground)` |
| `ring-brutal-ring` | `var(--brutal-ring)` |

## 暗色模式

BrutxUI 通过 `.dark` 类支持暗色模式。当 `dark` 类被应用到 `<html>` 或 `<body>` 元素时，所有 CSS 变量会自动切换为暗色值。

```html
<html class="dark">
    <!-- Dark mode active -->
</html>
```

通过编程方式切换暗色模式：

```vue
<script setup>
import { ref } from 'vue'

const isDark = ref(false)

function toggleDark() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
    <button @click="toggleDark">Toggle Dark Mode</button>
</template>
```

主题预设也通过 `.dark .theme-pastel` 或 `.theme-pastel.dark` 选择器支持暗色模式。
