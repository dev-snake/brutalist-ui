# 贡献指南

感谢你抽出时间为 Brutx 做贡献。本项目专注于为 Vue 3 + Tailwind CSS 构建大胆、无障碍的新粗野主义组件系统。

---

## 开发环境设置

本项目是使用 **pnpm workspaces** 管理的 monorepo。

### 1. 前置条件
- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

### 2. 快速开始
```bash
# 克隆仓库
git clone https://github.com/lidaixingchen/brutxui-vue3.git
cd brutxui-vue3

# 安装工作区依赖
pnpm install

# 构建所有包（UI、CLI、注册表和文档）
pnpm build
```

---

## Monorepo 包结构

- `packages/ui`：核心 Vue 3 组件包。
- `packages/cli`：CLI 工具 (`brutx-vue`)，用于项目初始化和组件安装。
- `packages/registry`：组件分发注册表，包含编译后的 JSON 模式。
- `apps/docs`：VitePress 文档站点。

---

## 添加或修改组件

我们使用类似 shadcn/ui 的**注册表架构**。组件以 JSON 文件的形式动态分发。

添加新组件（例如 `button`）的步骤：

1. **实现组件**，放在 `packages/ui/src/components/` 下。
2. **定义组件元数据**，在 `packages/cli/src/lib/constants.ts` 的 `COMPONENTS` 对象中添加，并声明所需的 npm `dependencies`。
3. **编译注册表 JSON**：
   运行以下脚本，自动解析、解析依赖并将 Vue 代码打包为注册表 JSON 文件：
   ```bash
   pnpm --filter brutx-registry-vue build
   ```
4. 提交 `packages/registry/registry/` 下生成的 JSON 文件。

---

## 本地测试 CLI

你可以在测试项目中本地测试 CLI：

1. 构建 CLI 包：
   ```bash
   pnpm --filter brutx-vue build
   ```
2. 在工作区内或外创建临时文件夹（例如 `temp-test-project`）。
3. 从测试文件夹运行编译后的 CLI：
   ```bash
   # 初始化 CLI
   node ../packages/cli/dist/index.js init --defaults

   # 使用本地注册表添加组件
   node ../packages/cli/dist/index.js add button combobox --registry ../packages/registry/registry
   ```

---

## 测试与代码检查

推送更改前，请确保所有检查通过：

- **类型检查**：`pnpm typecheck`
- **代码检查**：`pnpm lint`
- **单元/集成测试**：`pnpm test`
