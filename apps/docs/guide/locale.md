# 国际化（i18n）

BrutxUI 内置轻量多语言支持，**默认语言为中文（zh-CN）**，同时提供英文（en）语言包。无需安装 `vue-i18n`，开箱即用。

## 设计原则

- **不强制依赖 vue-i18n** — 自带轻量 locale 系统（provide/inject），可与 vue-i18n 共存
- **默认中文** — 所有组件的默认文本为中文
- **完全向后兼容** — props 优先级最高，现有用法不受影响
- **零配置开箱即用** — 不传任何配置时显示中文
- **响应式切换** — 运行时切换语言，组件自动更新

## 优先级链

组件文本的解析优先级从高到低：

```text
组件 props > 全局 locale 配置 > 默认中文（zh-CN）
```

## 默认中文（零配置）

不进行任何配置时，组件自动显示中文文本：

```vue
<template>
    <CommandInput />
    <!-- placeholder 显示 "输入命令或搜索..." -->
</template>
```

## 全局切换为英文

通过 `BrutxUIPlugin` 的 `locale` 选项切换语言：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { BrutxUIPlugin, en } from 'brutx-ui-vue'

const app = createApp(App)
app.use(BrutxUIPlugin, { locale: en })
app.mount('#app')
```

## 局部覆盖

### 通过 props 覆盖单个组件

props 优先级最高，可以覆盖任何 locale 文本：

```vue
<template>
    <CommandInput placeholder="自定义搜索..." />
    <Spinner label="处理中..." />
</template>
```

### 通过 texts prop 批量覆盖

对于包含大量文本的组件（如 AuthCard），提供 `texts` prop 进行批量覆盖：

```vue
<template>
    <AuthCard :texts="{
        google: '使用 Google 登录',
        github: '使用 GitHub 登录',
        orEmailLogin: '或使用邮箱登录',
        signIn: '登 录',
    }" />
</template>
```

### 局部子树覆盖语言

使用 `provideLocale` 在某个组件子树内使用不同语言，不影响全局：

```vue
<script setup>
import { provideLocale, en } from 'brutx-ui-vue'

provideLocale(en)
</script>

<template>
    <div>
        <!-- 此区域内的组件显示英文 -->
        <CommandInput />
    </div>
</template>
```

## 响应式切换

`BrutxUIPlugin` 和 `provideLocale` 都接受响应式的 locale 值，切换时组件自动更新：

```vue
<script setup>
import { ref, computed } from 'vue'
import { BrutxUIPlugin, zhCN, en } from 'brutx-ui-vue'

const isEnglish = ref(false)
const locale = computed(() => isEnglish.value ? en : zhCN)
</script>
```

## 自定义语言包

### 部分覆盖

使用 `mergeLocale` 深合并，只覆盖需要修改的字段：

```ts
import { zhCN, mergeLocale } from 'brutx-ui-vue/locales'

const customLocale = mergeLocale(zhCN, {
    command: { placeholder: '请输入...' },
})
app.use(BrutxUIPlugin, { locale: customLocale })
```

### 创建全新语言包

导入 `Locale` 类型，创建完整的语言包：

```ts
import type { Locale } from 'brutx-ui-vue'
import { zhCN } from 'brutx-ui-vue/locales'

const jaJP: Locale = {
    command: {
        placeholder: 'コマンドを入力...',
        emptyText: '結果が見つかりません。',
        dialogTitle: 'コマンドパレット',
        dialogDescription: '実行するコマンドを検索...',
    },
    // ... 其他组件的翻译
}

app.use(BrutxUIPlugin, { locale: jaJP })
```

## 与 vue-i18n 共存

BrutxUI 的 locale 系统独立于 vue-i18n，两者互不干扰。推荐在 vue-i18n 的 locale watch 中同步更新 BrutxUI 的 locale：

```ts
import { watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { provideLocale, zhCN, en } from 'brutx-ui-vue'

const LOCALE_MAP = { 'zh-CN': zhCN, en }

const { locale } = useI18n()
provideLocale(computed(() => LOCALE_MAP[locale.value] ?? zhCN))
```

## t() 翻译函数

`useLocale()` 返回的 `t()` 函数支持点号路径访问和插值参数：

```ts
import { useLocale } from 'brutx-ui-vue'

const { t } = useLocale()

t('command.placeholder')
// → '输入命令或搜索...'

t('combobox.selectedCount', { count: 3 })
// → '已选 3 项'

t('pagination.page', { number: 5 })
// → '第 5 页'
```

### 回退链

当 `t(path, params?)` 被调用时，按以下顺序查找：

1. 当前 locale 中查找 `path` 对应的值
2. 不存在 → 回退到 zh-CN 语言包中 `path` 对应的值
3. 仍不存在 → 返回路径字符串 `path` 本身

## 可用语言包

| 语言包 | 导入路径 | 说明 |
|--------|---------|------|
| `zhCN` | `brutx-ui-vue` 或 `brutx-ui-vue/locales` | 简体中文（默认） |
| `en` | `brutx-ui-vue` 或 `brutx-ui-vue/locales` | 英文 |

## API 参考

### BrutxUIPlugin

Vue 插件，用于全局配置 locale。

```ts
interface BrutxUIPluginOptions {
    locale?: MaybeRef<Locale>
}

app.use(BrutxUIPlugin, { locale: en })
```

### provideLocale

在组件子树内注入 locale 配置。

```ts
function provideLocale(locale: MaybeRef<Locale>): void
```

### useLocale

获取当前 locale 和翻译函数。

```ts
function useLocale(): {
    locale: ComputedRef<Locale>
    t: TranslateFunction
}

type TranslateFunction = (
    path: string,
    params?: Record<string, string | number>
) => string
```

### mergeLocale

深合并语言包，用于部分覆盖。

```ts
function mergeLocale(base: Locale, override: DeepPartial<Locale>): Locale
```

## 支持的组件文本键

| 组件 | locale 键 | 含插值参数 |
|------|----------|-----------|
| Command | `command.placeholder`、`command.emptyText`、`command.dialogTitle`、`command.dialogDescription` | — |
| Combobox | `combobox.placeholder`、`combobox.multiPlaceholder`、`combobox.searchPlaceholder`、`combobox.emptyText`、`combobox.selectedCount` | `selectedCount`: `{count}` |
| Pagination | `pagination.firstPage`、`pagination.previousPage`、`pagination.nextPage`、`pagination.lastPage`、`pagination.page`、`pagination.label` | `page`: `{number}` |
| Carousel | `carousel.previousSlide`、`carousel.nextSlide`、`carousel.goToSlide` | `goToSlide`: `{index}` |
| Spinner | `spinner.loading` | — |
| SubmitButton | `submitButton.submitting` | — |
| CopyToClipboard | `copyToClipboard.copy`、`copyToClipboard.copied` | — |
| BeforeAfter | `beforeAfter.before`、`beforeAfter.after` | — |
| AuthCard | `authCard.welcomeBack`、`authCard.signInToContinue`、`authCard.google`、`authCard.github`、`authCard.orEmailLogin`、`authCard.email`、`authCard.password`、`authCard.forgotPassword`、`authCard.signIn`、`authCard.noAccount`、`authCard.register` | — |
| WaitlistPage | `waitlistPage.title`、`waitlistPage.ctaText`、`waitlistPage.earlyAccess`、`waitlistPage.onWaitlist`、`waitlistPage.live` | `onWaitlist`: `{count}` |
| DashboardShell | `dashboardShell.sidebarNavigation`、`dashboardShell.signOut` | — |
| BrutalistHero | `brutalistHero.title`、`brutalistHero.primaryCtaText`、`brutalistHero.secondaryCtaText`、`brutalistHero.neoBrutalismUI` | — |
| SaaSPricing | `saasPricing.title`、`saasPricing.monthly`、`saasPricing.annually`、`saasPricing.mostPopular`、`saasPricing.perMonth`、`saasPricing.perMonthBilledAnnually`、`saasPricing.billingPeriod` | — |
| Toast | `toast.close` | — |
| Dialog | `dialog.close` | — |
| Sheet | `sheet.close` | — |
| Breadcrumb | `breadcrumb.label`、`breadcrumb.more` | — |
| TreeView | `treeView.fileTree` | — |
| Stepper | `stepper.progressSteps`、`stepper.step` | `step`: `{index}`、`{title}` |
| EmptyState | `emptyState.defaultTitle`、`emptyState.defaultActionText` | — |
