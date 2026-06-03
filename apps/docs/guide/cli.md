# CLI

`brutx-vue` CLI 帮助你在项目中初始化 BrutxUI，并通过单条命令添加组件。

## 概览

```bash
npx brutx-vue@latest <command>
```

CLI 会自动处理依赖安装、文件创建和配置更新。

## brutx-vue init

在你的项目中初始化 BrutxUI。它会设置基础配置：

```bash
npx brutx-vue@latest init
```

init 命令将：

1. 检测你的项目框架（Vite、Nuxt 等）
2. 安装所需依赖（`reka-ui`、`class-variance-authority`、`clsx`、`tailwind-merge`、`lucide-vue-next`）
3. 在 `src/lib/utils.ts` 创建 `cn()` 工具函数
4. 配置 Tailwind CSS 粗野主义插件
5. 将 BrutxUI CSS 自定义属性添加到你的样式表中
6. 设置组件目录结构

### 选项

| 标志 | 描述 | 默认值 |
|------|------|--------|
| `--yes` / `-y` | 跳过提示并使用默认值 | `false` |
| `--cwd <path>` | 设置工作目录 | 当前目录 |

## brutx-vue add

向项目中添加单个组件：

```bash
npx brutx-vue@latest add <component...>
```

### 示例

添加单个组件：

```bash
npx brutx-vue@latest add button
```

添加多个组件：

```bash
npx brutx-vue@latest add button card dialog input
```

添加所有可用组件：

```bash
npx brutx-vue@latest add --all
```

### 选项

| 标志 | 描述 | 默认值 |
|------|------|--------|
| `--all` | 添加所有可用组件 | `false` |
| `--yes` / `-y` | 跳过确认提示 | `false` |
| `--cwd <path>` | 设置工作目录 | 当前目录 |
| `--overwrite` | 覆盖已有的组件文件 | `false` |

### 可用组件

alert, alert-dialog, avatar, badge, button, calendar, card, checkbox, combobox, command, dashboard-stats, dialog, dropdown-menu, form, input, label, pagination, popover, progress, radio-group, saas-pricing, scroll-area, select, separator, sheet, skeleton, slider, spinner, submit-button, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip

### 可用区块

brutalist-hero, pricing-section, auth-card, dashboard-shell, empty-state, waitlist-page

添加区块：

```bash
npx brutx-vue@latest add --block auth-card
```
