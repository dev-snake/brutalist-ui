# AGENTS.md — BrutxUI Vue 3

面向 Vue 3 + Tailwind CSS 的 Neo-Brutalist UI 组件库。独立维护的 Vue 3 版本。

## 单体仓库

| 包名 | 路径 | 说明 |
|---------|------|------|
| `brutx-ui-vue` | `packages/ui/` | 核心 Vue 3 组件库 |
| `brutx-vue` | `packages/cli/` | 用于 `init` 和 `add` 的 CLI |
| `brutx-registry-vue` | `packages/registry/` | 编译后的 JSON 注册表 |
| `brutx-shared-vue` | `packages/shared/` | 共享类型和元数据 |
| `docs` | `apps/docs/` | VitePress 文档站点 |

## 命令

```bash
pnpm build          # 构建 UI 包
pnpm lint           # 对所有包执行 lint
pnpm typecheck      # 对所有包执行类型检查
pnpm test           # 运行 UI 测试
pnpm test:watch     # 监视模式运行测试
```

## 技术栈

Vue 3.5+（`<script setup>`）· TypeScript 5.7+（strict）· Tailwind CSS 3.4+ · reka-ui 2.9+（无头原语）· CVA 0.7+（变体）· clsx + tailwind-merge 通过 `cn()` · Vite 6+ · Vitest 3+ · pnpm 8.15+

## 组件约定

- `<script setup lang="ts">` 配合 `defineProps<T>()` + `withDefaults()`
- 变体在独立的 `*-variants.ts` 文件中使用 CVA 定义，与组件同目录
- 始终通过 `cn()` 合并类——切勿拼接字符串
- 始终使用 `computed()` 进行动态类合并——切勿在模板中调用 `cn()`
- 始终使用 `reka-ui` 实现无障碍无头原语
- 始终从 `src/index.ts` 导出新组件
- 文本 props 默认值设为 `undefined`，通过 `useLocale()` 的 `t()` 函数提供默认文本；优先级链为 `props > t() > zh-CN 回退`

## Neo-Brutalist 视觉系统

### 设计令牌（`src/styles.css` → `:root` / `.dark`）

| 令牌 | 亮色 | 暗色 | 用途 |
|-------|-------|------|------|
| `--brutal-border-width` | `3px` | `3px` | 边框粗细 |
| `--brutal-border-color` | `#000000` | `#ffffff` | 边框颜色 |
| `--brutal-shadow-offset-x` | `4px` | `4px` | 阴影 X 偏移 |
| `--brutal-shadow-offset-y` | `4px` | `4px` | 阴影 Y 偏移 |
| `--brutal-shadow-color` | `#000000` | `#ffffff` | 阴影颜色 |
| `--brutal-radius` | `0px` | `0px` | 边框圆角 |
| `--brutal-bg` | `#ffffff` | `#141414` | 背景 |
| `--brutal-fg` | `#000000` | `#ffffff` | 前景 |
| `--brutal-primary` | `#FF6B6B` | `#FF6B6B` | 主色（珊瑚红） |
| `--brutal-secondary` | `#4ECDC4` | `#4ECDC4` | 辅助色（薄荷青） |
| `--brutal-accent` | `#FFE66D` | `#FFE66D` | 强调色（黄色） |
| `--brutal-destructive` | `#EF476F` | `#EF476F` | 危险色 |
| `--brutal-success` | `#7FB069` | `#7FB069` | 成功色 |
| `--brutal-info` | `#4A90D9` | `#3B82F6` | 信息提示色 |
| `--brutal-muted` | `#f3f4f6` | `#1e1e1e` | 柔和背景 |
| `--brutal-ring` | `#000000` | `#ffffff` | 焦点环 |
| `--brutal-pressed-offset` | `2px` | `2px` | 激活按压偏移 |

### 视觉规则

1. **边框：** `border-3 border-brutal`——禁止细边框或浅色 slate/gray 边框
2. **阴影：** 仅使用 `shadow-brutal*`——禁止模糊/扩散阴影（`shadow-md`、`shadow-lg` 被禁止）
3. **圆角：** `rounded-brutal`——禁止硬编码 `rounded-md` 等
4. **按压：** `active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all`——交互元素必须在按压时产生位移，不能感觉迟钝
5. **悬停：** `hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5`
6. **颜色：** 使用 `--brutal-*` CSS 变量——禁止硬编码任意颜色

## CVA 变体文件
[CVA.md](CVA.md)

### Tailwind 工具类

- 边框：`border-3`、`border-brutal`、`rounded-brutal`
- 阴影：`shadow-brutal`、`shadow-brutal-sm`、`shadow-brutal-lg`、`shadow-brutal-xl`
- 颜色：`bg-brutal-bg`、`text-brutal-fg`、`bg-brutal-primary`、`bg-brutal-secondary`、`bg-brutal-accent`、`bg-brutal-destructive`、`bg-brutal-success`、`bg-brutal-info`、`bg-brutal-muted`

### 主题预设

`.theme-classic`（默认）· `.theme-pastel`（柔和，8px 圆角）· `.theme-mono`（灰度，4px 边框）

## 反模式（禁止）

1. **禁止软阴影：** 不要使用 Tailwind 默认的 `shadow-md` 或 `shadow-lg`。使用 `shadow-brutal` 或 `shadow-brutal-lg`。
2. **禁止圆角边框：** 不要将 `rounded-md` 或 `rounded-lg` 用作默认变体，除非通过主题自定义样式类明确柔化。使用 `rounded-none` 或 `rounded-brutal`。
3. **禁止暗淡边框：** 不要将 `border-slate-100` 或 `border-slate-200` 等浅色边框用于主边框。边框必须保持粗重（`border-3 border-brutal`）。
4. **禁止缺少按压反馈：** 交互式按钮必须在点击时产生位移。不要让激活状态感觉迟钝或无生气。
5. **禁止路径穿越：** 在编译或编辑 CLI 依赖时，绝不允许相对路径遍历（`..`）逃逸安全工作区。请规范化并检查路径。

## 导入

- `@/` → `src/`
- 内部：相对路径（`../lib/utils`）
- 无头原语：`import { Primitive } from 'reka-ui'`
- 图标：`import { Loader2 } from 'lucide-vue-next'`
- 国际化：`import { useLocale } from '@/composables/useLocale'`

## 代码风格

- 除非要求否则不写注释 · 无魔法数字 · 无硬编码值
- 可翻译文本使用 `t('componentName.key')` 访问，含插值的使用 `t('key', { param: value })`
- 4 空格缩进 · 单引号 · PascalCase 组件（`Button.vue`）· kebab-case 变体（`button-variants.ts`）· camelCase 组合式函数（`useToast.ts`）

## 安全

- CLI：规范化路径，使用 `isSafePath` 验证
- CSS：`styles.css` 中无重复令牌
- 禁止硬编码密钥

## 目录结构

- **文档网站：** `apps/docs/`（VitePress）
- **核心包：** `packages/ui/`
  - 组件文件：`packages/ui/src/components/`
  - 组合式函数：`packages/ui/src/composables/`
  - 语言包：`packages/ui/src/locales/`
  - 工具函数：`packages/ui/src/lib/utils.ts`
  - 测试文件：`packages/ui/src/components/*.test.ts`
  - 构建产物：`packages/ui/dist/`
- **CLI 工具：** `packages/cli/`
  - CLI 操作：`packages/cli/src/commands/`
  - 核心逻辑：`packages/cli/src/lib/`
- **注册表构建器：** `packages/registry/`
  - 组件 JSON：`packages/registry/registry/`
  - 构建脚本：`packages/registry/scripts/`
- **共享类型：** `packages/shared/`

## 注册表模式

- 创建新组件或块时，始终将其配置模式追加到 `packages/registry/registry/`。然后通过 `pnpm --filter brutx-registry-vue build` 和 `pnpm --filter brutx-registry-vue validate` 编译并验证模式。
