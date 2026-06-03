# 快速开始

BrutxUI 是一个**以复制粘贴为核心**的 Neo-Brutalism 组件库，专为 Vue 3 + Tailwind CSS 打造。它提供大胆、无障碍且高度可定制的 UI 组件，遵循新粗野主义设计哲学。

## BrutxUI 的优势场景

- **落地页和营销网站** — 需要大胆的视觉识别来脱颖而出
- **SaaS 仪表盘** — 清晰自信的 UI 建立用户信任
- **创意作品集** — 拥抱原始、富有表现力的设计
- **开发者工具** — 功能优先的美学契合目标受众
- **初创团队** — 希望快速交付且拥有独特外观

## 适合柔和处理的场景

- **企业后台应用** — 用户期望传统的 UI 模式
- **表单密集型工作流** — 最少的视觉噪音有助于完成填写
- **数据密集型表格** — 粗野主义边框在大规模下可能显得沉重
- **无障碍关键场景** — 减少动画和高对比度模式是主要需求

## 为什么采用复制粘贴模式？

BrutxUI 采用复制粘贴组件模式，而非传统的 npm 包方式：

- **完全拥有** 项目中的组件源代码
- **零依赖锁定** — 无需 fork 即可修改任何组件
- **更小的打包体积** — 只包含你实际使用的组件
- **轻松定制** — 直接修改变体、样式和行为
- **AI 友好** — LLM 可以直接读取和修改你的组件

## 系统可定制性

所有视觉属性都由 CSS 自定义属性驱动。你可以在 `:root` 级别或按组件覆盖它们：

```css
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
```

## 定制预设

BrutxUI 内置三套主题预设，你可以通过在根元素上添加类名来应用：

### Classic（默认）

标志性的 BrutxUI 风格 — 粗 3px 边框、硬 4px 阴影、零圆角、鲜艳色彩。

```html
<div class="theme-classic">
    <!-- Your app -->
</div>
```

### Pastel

更柔和的风格 — 2px 边框、3px 阴影、8px 圆角、柔和的粉彩色调。

```html
<div class="theme-pastel">
    <!-- Your app -->
</div>
```

### Mono

灰度极致 — 4px 边框、5px 阴影、零圆角、黑白调色板。

```html
<div class="theme-mono">
    <!-- Your app -->
</div>
```

## AI 优先集成

BrutxUI 旨在与 AI 编码助手无缝协作：

- **AGENTS.md** — 项目根目录的统一 AI 配置文件，为所有 AI 工具提供项目指令
- **结构化 Props** — AI 可以理解和生成的 TypeScript 接口

详见 [AI 集成](/guide/ai)指南。

## 无障碍优先

每个组件都基于 [reka-ui](https://reka-ui.com/) 无头原语构建，确保：

- 正确的 ARIA 属性和角色
- 键盘导航支持
- 焦点管理和可见的焦点环
- 屏幕阅读器兼容性
- 减少动画支持

## 下一步

- 在你的 Vite + Vue 3 项目中[安装 BrutxUI](/guide/installation-vite)
- 其他配置方式请参考[手动安装](/guide/installation-manual)
- [CLI 参考](/guide/cli)了解 `brutx-vue` 命令行工具
- [主题与令牌](/guide/theme)进行深度定制
- [国际化](/guide/locale)配置多语言支持
- [浏览组件](/components/alert)查看可用组件
