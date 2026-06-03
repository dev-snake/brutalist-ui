# 安装（Vite）

在新建或现有的 Vite + Vue 3 项目中设置 BrutxUI。

## 前提条件

- **Node.js** 18+
- **Vue** 3.5+
- **Tailwind CSS** 3.4+

## 第 1 步：创建 Vite 项目

如果你还没有项目，先创建一个：

```bash
pnpm create vite my-app --template vue-ts
cd my-app
```

## 第 2 步：安装 Tailwind CSS

安装并配置 Tailwind CSS：

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
```

更新 `tailwind.config.js`：

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

将 Tailwind 指令添加到 `src/style.css`：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 第 3 步：初始化 BrutxUI

运行 init 命令来设置粗野主义插件和样式：

```bash
npx brutx-vue@latest init
```

此命令将：
- 安装所需依赖（`reka-ui`、`class-variance-authority`、`clsx`、`tailwind-merge`、`lucide-vue-next`）
- 配置 Tailwind 粗野主义插件
- 创建 `cn()` 工具函数
- 将 BrutxUI 样式添加到你的 CSS 中

## 第 4 步：添加组件

只添加你需要的组件：

```bash
npx brutx-vue@latest add button
npx brutx-vue@latest add card dialog
npx brutx-vue@latest add input label checkbox
```

或者一次性添加所有组件：

```bash
npx brutx-vue@latest add --all
```

## 第 5 步：导入样式

确保在你的 `src/main.ts` 中导入了 BrutxUI 样式：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
```

`brutx-vue init` 命令会将所需的 CSS 添加到你的 `style.css` 文件中，包括 `--brutal-*` CSS 自定义属性和 Tailwind 层。

## 第 6 步：使用组件

在你的 Vue 文件中导入并使用组件：

```vue
<script setup>
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
</script>

<template>
    <Card variant="default">
        <CardHeader>
            <CardTitle>Hello BrutxUI</CardTitle>
        </CardHeader>
        <CardContent>
            <Button variant="primary" size="default">
                Get Started
            </Button>
        </CardContent>
    </Card>
</template>
```

## 配置语言（可选）

BrutxUI 默认显示中文文本。如需切换为英文或其他语言，在 `main.ts` 中配置 `BrutxUIPlugin`：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { BrutxUIPlugin, en } from 'brutx-ui-vue'
import './style.css'

const app = createApp(App)
app.use(BrutxUIPlugin, { locale: en })
app.mount('#app')
```

更多语言配置选项请参考[国际化](/guide/locale)指南。
