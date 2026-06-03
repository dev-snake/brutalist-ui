# 区块与模板

BrutxUI 提供了预构建的区块组件，将多个基础组件组合成完整的 UI 区段。这些是常见页面模式的即用型构建模块。

## 可用区块

| 区块 | 描述 |
|------|------|
| [Brutalist Hero](/blocks/brutalist-hero) | 带有 CTA 按钮和代码预览的落地页 Hero 区段 |
| [Pricing Section](/blocks/pricing-section) | 带有功能对比的定价表格 |
| [Auth Card](/blocks/auth-card) | 带有社交登录和邮箱表单的登录/注册卡片 |
| [Dashboard Shell](/blocks/dashboard-shell) | 带有侧边栏和顶栏的完整仪表盘布局 |
| [Empty State](/blocks/empty-state) | 带有图标和操作按钮的空状态占位符 |
| [Waitlist Page](/blocks/waitlist-page) | 带有邮箱输入和社交证明的候补注册页面 |
| [Not Found Page](/blocks/not-found-page) | 带有故障文本效果的 404 错误页面 |
| [Loading Page](/blocks/loading-page) | 带有旋转指示器和可选进度条的全页加载状态 |
| [Header Section](/blocks/header-section) | 带有导航链接和移动端菜单的顶部导航栏 |
| [Footer Section](/blocks/footer-section) | 带有链接组和版权声明的底部信息栏 |
| [FAQ Section](/blocks/faq-section) | 带有编号徽标的手风琴常见问题区块 |
| [Testimonial Card](/blocks/testimonial-card) | 带有头像和验证徽标的用户评价卡片 |
| [Blog Card](/blocks/blog-card) | 带有分类徽标和阅读更多的博客文章预览卡片 |
| [File Card](/blocks/file-card) | 带有文件图标和下载按钮的文件信息卡片 |
| [Quick Actions](/blocks/quick-actions) | 带有图标按钮网格的快捷操作面板 |
| [Tabs Nav](/blocks/tabs-nav) | 带有标签触发器和内容面板的标签页导航 |
| [Error Card](/blocks/error-card) | 带有警告提示和重试/关闭按钮的错误状态卡片 |
| [Success Card](/blocks/success-card) | 带有勾选图标和确认按钮的成功状态卡片 |
| [Search Widget](/blocks/search-widget) | 带有输入框和分组建议列表的搜索组件 |
| [Feedback Form](/blocks/feedback-form) | 带有姓名、邮箱、主题和消息字段的反馈表单 |
| [Stepper Section](/blocks/stepper-section) | 带有水平步骤条和前后导航按钮的步骤导航区块 |
| [Cookie Consent](/blocks/cookie-consent) | 固定在页面底部的 Cookie 同意横幅 |
| [Data Table Section](/blocks/data-table-section) | 带有搜索、排序和分页功能的数据表格区块 |
| [Settings Page](/blocks/settings-page) | 带有标签页导航和表单控件的设置页面 |
| [Blog List Page](/blocks/blog-list-page) | 带有搜索、分类筛选和分页的博客文章列表页面 |
| [Activity Log Page](/blocks/activity-log-page) | 带有表格、类型徽标和分页的活动日志页面 |
| [Profile Page](/blocks/profile-page) | 带有头像、表单编辑和保存操作的个人资料页面 |
| [Chart Section](/blocks/chart-section) | 带有标签页切换的图表展示区块 |
| [Gallery Section](/blocks/gallery-section) | 带有轮播图和图片卡片的画廊展示区块 |
| [Upload Card](/blocks/upload-card) | 带有拖拽上传、进度条和旋转指示器的文件上传卡片 |
| [Overview Page](/blocks/overview-page) | 带有统计卡片和活动面板的仪表盘概览页面 |

## 安装

使用 CLI 添加区块：

```bash
npx brutx-vue@latest add --block auth-card
```

或同时添加多个区块：

```bash
npx brutx-vue@latest add --block brutalist-hero pricing-section
```

## 自定义

区块是复制粘贴式组件。添加到项目后，你对其源代码拥有完全控制权。可以修改 props、样式和行为以满足你的需求。

所有区块都使用相同的 `--brutal-*` CSS 变量令牌，因此它们会自动适配你选择的主题预设。
