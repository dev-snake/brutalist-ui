# 手动安装

不使用 CLI 手动设置 BrutxUI，适用于需要对安装过程完全控制的项目。

## 前提条件

- **Node.js** 18+
- **Vue** 3.5+
- **Tailwind CSS** 3.4+

## 第 1 步：安装依赖

安装所需的包：

```bash
pnpm add reka-ui class-variance-authority clsx tailwind-merge lucide-vue-next
```

| 包名 | 用途 |
|---------|---------|
| `reka-ui` | 无障碍无头原语 |
| `class-variance-authority` | CVA 变体系统 |
| `clsx` | 条件类名 |
| `tailwind-merge` | 合并 Tailwind 类名避免冲突 |
| `lucide-vue-next` | 图标库 |

可选依赖：

```bash
pnpm add v-calendar vee-validate
```

| 包名 | 用途 |
|---------|---------|
| `v-calendar` | 日历组件 |
| `vee-validate` | 表单验证 |

## 第 2 步：创建 cn() 工具函数

创建 `src/lib/utils.ts`：

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
```

## 第 3 步：配置 Tailwind CSS

创建或更新 `tailwind.config.js`，添加 BrutxUI 的内容路径和插件：

```js
import brutalism from './src/lib/brutalism-plugin.js'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brutal: {
                    bg: 'var(--brutal-bg)',
                    fg: 'var(--brutal-fg)',
                    primary: 'var(--brutal-primary)',
                    secondary: 'var(--brutal-secondary)',
                    accent: 'var(--brutal-accent)',
                    destructive: 'var(--brutal-destructive)',
                    success: 'var(--brutal-success)',
                    muted: 'var(--brutal-muted)',
                    'muted-foreground': 'var(--brutal-muted-foreground)',
                    ring: 'var(--brutal-ring)',
                    info: 'var(--brutal-info)',
                    placeholder: 'var(--brutal-placeholder)',
                },
            },
            borderRadius: {
                brutal: 'var(--brutal-radius, 0px)',
            },
        },
    },
    plugins: [brutalism],
}
```

## 第 4 步：导入样式

将 BrutxUI CSS 自定义属性添加到你的主 CSS 文件中（例如 `src/style.css`）：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        --brutal-border-width: 3px;
        --brutal-border-color: #000000;
        --brutal-shadow-offset-x: 4px;
        --brutal-shadow-offset-y: 4px;
        --brutal-shadow-color: #000000;
        --brutal-radius: 0px;
        --brutal-bg: #ffffff;
        --brutal-fg: #000000;
        --brutal-primary: #FF6B6B;
        --brutal-secondary: #4ECDC4;
        --brutal-accent: #FFE66D;
        --brutal-destructive: #EF476F;
        --brutal-success: #7FB069;
        --brutal-muted: #f3f4f6;
        --brutal-muted-foreground: #4B5563;
        --brutal-ring: #000000;
        --brutal-pressed-offset: 2px;
        --brutal-info: #4A90D9;
        --brutal-overlay: rgba(0, 0, 0, 0.5);
        --brutal-placeholder: #9CA3AF;
    }

    .dark {
        --brutal-border-color: #ffffff;
        --brutal-shadow-color: #ffffff;
        --brutal-bg: #141414;
        --brutal-fg: #ffffff;
        --brutal-muted-foreground: #9CA3AF;
        --brutal-ring: #ffffff;
        --brutal-info: #3B82F6;
        --brutal-overlay: rgba(0, 0, 0, 0.7);
        --brutal-placeholder: #6B7280;
    }
}
```

## 第 5 步：复制组件文件

从 `packages/ui/src/components/` 中将你需要的组件文件复制到项目的 `src/components/ui/` 目录下。每个组件由以下文件组成：

- `.vue` 文件（例如 `Button.vue`）
- 对应的变体文件（例如 `button-variants.ts`），如果有的话

请确保更新复制文件中的导入路径以匹配你的项目结构。组件使用相对路径导入（如 `../lib/utils`），请根据需要调整。
