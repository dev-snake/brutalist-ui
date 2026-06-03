<div align="center">
  <img src="apps/docs/public/favicon.svg" alt="Brutx Logo" width="120" height="120" />

  # BrutxUI

  **面向 Vue 3 + Tailwind CSS 的复制粘贴式新粗野主义组件注册表。**

  当你需要可见边框、强烈阴影、无障碍原语以及可直接编辑的组件代码时，就用它。

  ### 组件注册表 (`brutx-ui-vue`)
  [![npm version](https://img.shields.io/npm/v/brutx-ui-vue.svg?style=flat-square&color=FF6B6B)](https://www.npmjs.com/package/brutx-ui-vue)
  [![npm downloads](https://img.shields.io/npm/dm/brutx-ui-vue.svg?style=flat-square&color=4ECDC4)](https://www.npmjs.com/package/brutx-ui-vue)

  ### CLI 工具 (`brutx-vue`)
  [![npm version](https://img.shields.io/npm/v/brutx-vue.svg?style=flat-square&color=FFE66D)](https://www.npmjs.com/package/brutx-vue)
  [![npm downloads](https://img.shields.io/npm/dm/brutx-vue.svg?style=flat-square&color=4ECDC4)](https://www.npmjs.com/package/brutx-vue)

  ### 项目健康度
  [![License: MIT](https://img.shields.io/badge/License-MIT-4ECDC4.svg?style=flat-square)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-FFE66D.svg?style=flat-square)](https://www.typescriptlang.org/)
  [![Vue 3](https://img.shields.io/badge/Vue_3-3.5+-4FC08D.svg?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6+-646CFF.svg?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)


  <br />

  [文档与预览](https://lidaixingchen.github.io/brutxui-vue3/) · [NPM 组件库](https://www.npmjs.com/package/brutx-ui-vue) · [NPM CLI](https://www.npmjs.com/package/brutx-vue) · [报告问题](https://github.com/lidaixingchen/brutxui-vue3/issues)
</div>

---

## BrutxUI 是什么？

BrutxUI 是一个面向 SaaS 应用、独立工具、仪表盘、开发者作品集、落地页和产品界面的新粗野主义设计注册表，适用于需要更强视觉冲击力的场景。

与作为单一 npm 依赖隐藏实现细节的方式不同，**BrutxUI 以复制粘贴为首要原则**。它遵循 `shadcn/ui` 推广的工作流：组件生成到你的项目中，基于 **reka-ui** 无障碍原语和 **Tailwind CSS** 构建，让你拥有代码并自由修改。

---

## 何时使用 BrutxUI

- **适合：** SaaS 产品、分析仪表盘、开发者工具、落地页、Web3 门户，以及能承载大胆界面风格的创意作品集。
- **谨慎使用：** 保守的企业仪表盘、面向患者的医疗记录、传统银行应用。当默认风格过于张扬时，**Pastel（柔和）** 和 **Monochrome（单色）** 预设可以柔化对比度。

---

## 与 `shadcn/ui` 的关系

BrutxUI 旨在与 `shadcn/ui` 协同工作，而非替代它：
* **共享工作流：** BrutxUI 使用相同的 `components.json` 布局模式。
* **共存：** 你可以在同一项目中，对安静的 UI 表面使用 `shadcn/ui` 组件，对按钮、页头、定价区域或其他高对比度区域使用 BrutxUI 组件。
* **Tailwind 样式：** 生成的文件合并到标准 Tailwind CSS 层中。

---

## 安装与注册表工作流

安装 BrutxUI 组件有两种常见方式：

### 方式 A：Brutx-Vue CLI（推荐）

Brutx-Vue CLI 负责 Tailwind 检测、CSS 令牌注入和包管理器检测。

```bash
# 在项目中初始化 BrutxUI 配置
npx brutx-vue@latest init

# 添加指定组件
npx brutx-vue@latest add button card badge

# 一次性安装全部组件
npx brutx-vue@latest add --all
```

### 方式 B：官方 `shadcn` CLI

由于 BrutxUI 遵循 shadcn/ui JSON 注册表模式，你可以使用官方 shadcn CLI 安装 BrutxUI 组件：

```bash
# 安装 Brutx Button
npx shadcn@latest add https://lidaixingchen.github.io/brutxui-vue3/registry/button.json

# 安装 Brutx SaaS 定价区块
npx shadcn@latest add https://lidaixingchen.github.io/brutxui-vue3/registry/saas-pricing.json
```

---

## 尺寸系统与主题预设

BrutxUI 在样式表中暴露 CSS 自定义属性，你可以全局柔化或强化粗野主义风格：

```css
:root {
  --brutal-border-width: 3px;     /* 布局边框粗细 */
  --brutal-radius: 0px;           /* 锐利直角 */
  --brutal-shadow-offset: 4px;    /* 常规卡片/按钮偏移 */
}
```

内置三种视觉预设：
1. **经典粗野主义 (`.theme-classic`)：** 深黑阴影、霓虹强调色、锐利直角。
2. **柔和新粗野 (`.theme-pastel`)：** 柔和色彩、较轻对比度、`8px` 圆角。
3. **纯粹单色 (`.theme-mono`)：** 灰度色彩和更粗的黑色线条，适用于极简界面。

---

## 多语言支持

BrutxUI 内置中文（`zh-CN`，默认）和英文（`en`）语言包，支持运行时切换、局部覆盖和自定义翻译，无需 `vue-i18n` 依赖：

```ts
import { BrutxUIPlugin, en } from 'brutx-ui-vue'

app.use(BrutxUIPlugin, { locale: en })
```

---

## 支持的组件与区块

BrutxUI 包含常见产品 UI 所需的组件和布局区块：

### 布局区块与模板
* **`saas-pricing`：** 响应式 SaaS 定价区域，支持月付/年付切换、清单图标、高亮方案和 CTA 按钮。[注册表 URL](https://lidaixingchen.github.io/brutxui-vue3/registry/saas-pricing.json)
* **`dashboard-stats`：** 响应式分析面板，用于收入和转化等指标，带正/负趋势徽章。[注册表 URL](https://lidaixingchen.github.io/brutxui-vue3/registry/dashboard-stats.json)

### 原子组件
* **表单：** `Button`、`Input`、`Textarea`、`Checkbox`、`Switch`、`Select`、`Label`
* **浮层：** `Dialog`（模态框）、`Popover`、`Tooltip`、`DropdownMenu`
* **数据与列表：** `Table`、`Tabs`、`Command`（快速搜索）、`Combobox`（多选器）、`Pagination`、`ScrollArea`
* **反馈：** `Alert`、`Badge`、`Toast`（通知）、`Spinner`（加载）、`Skeleton`
* **展示：** `Avatar`、`Calendar`、`Separator`

---

## 贡献与开发

在本地运行、测试和打包 BrutxUI：

### 1. 仓库设置
```bash
# 克隆仓库
git clone https://github.com/lidaixingchen/brutxui-vue3.git
cd brutxui-vue3

# 安装工作区依赖
pnpm install

# 构建 UI 模块和 CLI 二进制文件
pnpm --filter brutx-ui-vue build && pnpm --filter brutx-vue build
```

### 2. 运行测试套件
```bash
pnpm test
```

### 3. 重新编译组件 JSON 注册表
如果你修改了 `packages/ui/src/components/*.vue` 中的核心组件，请编译并验证模式：
```bash
# 编译为注册表 JSON 文件
pnpm --filter brutx-registry-vue build

# 根据 shadcn CLI 模式验证 JSON 文件
pnpm --filter brutx-registry-vue validate
```

---

## 许可证

BrutxUI 是基于 [MIT 许可证](LICENSE) 的开源软件。
