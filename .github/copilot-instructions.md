# GitHub Copilot BrutxUI 系统规则

你是一名精通 Vue 3 和 Tailwind CSS 的开发者，负责为 BrutxUI 代码库生成高保真组件、定价块和实用 CLI 命令。请严格遵循以下准则：

---

## 视觉系统约束

BrutxUI 中的每个元素都基于高对比度 Neo-Brutalist 设计语言：
- **粗边框：** 边框必须使用 `border-3 border-brutal`（使用 CSS 变量 `--brutal-border-color`，暗色模式自动切换）。切勿降级为细浅色线条。
- **扁平阴影偏移：** 仅使用饱和、无模糊的扁平阴影：
  - `shadow-brutal`（4px 偏移）
  - `shadow-brutal-sm`（2px 偏移）
  - `shadow-brutal-lg`（6px 偏移）
  - `shadow-brutal-xl`（8px 偏移）
- **锐利圆角：** 默认通过 `rounded-none` 实现锐利无圆角边缘，或使用全局参数类如 `rounded-brutal`。
- **物理按压反馈：** 按钮在激活时向下位移：`active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all`。
- **对比强调色：** 通过 CSS 变量使用饱和高对比度颜色：珊瑚红 `#FF6B6B`（`bg-brutal-primary`）、薄荷青 `#4ECDC4`（`bg-brutal-secondary`）、饱和黄 `#FFE66D`（`bg-brutal-accent`）。

---

## 组件蓝图与架构

1. **Vue 3 SFC：** 所有组件使用 `<script setup lang="ts">` 配合 `defineProps<T>()` + `withDefaults()`。
2. **类变体权限：** 通过 CVA 在与组件同目录的独立 `*-variants.ts` 文件中定义所有变体。
3. **合并辅助工具：** 通过来自 `@/lib/utils` 或等效嵌套深度的 `cn(...)` 合并外部类。
4. **计算属性类：** 始终使用 `computed()` 进行动态类合并——切勿在模板中调用 `cn()`。
5. **无障碍：** 使用 reka-ui 处理模态框、对话框、弹出框和输入框，以保持标记健壮且完全无障碍。
6. **导出：** 始终从 `src/index.ts` 导出新组件。

---

## 安全要求

1. **路径安全：** 在开发 CLI 工具（`packages/cli`）时，避免目录穿越漏洞。规范化路径并确保所有解析的目标文件夹通过 `isSafePath` 检查。
2. **去重守卫：** 更新配置样式表时，确保令牌工具集不重复。
