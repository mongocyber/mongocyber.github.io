# Self-Service Analytics Image Generation Spec

生成方式：image2.0。

统一规格：1600 x 900 PNG，16:9。

通用风格提示词：

```text
Modern B2B SaaS product design case-study illustration for a UX portfolio. Match the existing AgentBuilder project images: light background, translucent glass cards, fine blue connector lines, delicate shadows, restrained blue-gray and pale lavender-gray palette, small teal, violet, and orange accents, clean professional UX portfolio presentation, subtle 3D depth. No real brands, no logos, no watermark, no people, no large readable text, no paragraphs. Use abstract grey line placeholders, tiny unreadable labels, simple icons, charts, cards, status dots, and clean product UI structure only. High-resolution polished interface mockup, crisp edges, soft ambient lighting, controlled and professional.
```

| 文件名 | 用途 | 尺寸 | Alt 文案 | 生成提示词 |
| --- | --- | --- | --- | --- |
| `assets/self-service-analytics-hero.png` | Hero 首屏主视觉，概括自助分析工作台 | 1600 x 900 | 自助分析工具工作台概览，展示数据资产、图表配置、看板画布与发布入口 | 在通用风格基础上，生成 self-service analytics workspace overview：中心为浏览器式产品界面，左侧数据资产列表，中间字段选择与图表配置，右侧看板画布与发布控制，用连接线表达从数据选择到发布的完整链路。 |
| `assets/self-service-analytics-problem-scenario.png` | 01 项目背景，表达传统依赖流程到自助流程的转变 | 1600 x 900 | 传统分析流程与自助分析流程的对比示意图 | 在通用风格基础上，生成 problem scenario diagram：左侧是碎片化的需求、数据人员、研发、报表交付链路，右侧是用户自助完成数据源、字段、图表、看板、发布的简化路径，中间用过渡箭头连接。 |
| `assets/self-service-analytics-challenge-overview.png` | 03 设计挑战，概括四类设计难点 | 1600 x 900 | 自助分析工具设计挑战四象限示意图 | 在通用风格基础上，生成 2x2 challenge overview：四个玻璃卡片分别代表数据理解、图表配置、筛选联动、发布复用，中心放置抽象分析对象或仪表盘符号，用细线连接四象限。 |
| `assets/self-service-analytics-information-architecture.png` | 04 信息架构设计，展示对象模型关系 | 1600 x 900 | 自助分析工具信息架构与对象模型图 | 在通用风格基础上，生成 information architecture and object model diagram：从 data source、field、metric、dimension 到 chart、filter、dashboard、permission、publish、update record 的分层关系，左中右分布，连接线清晰但不依赖大段文字。 |
| `assets/self-service-analytics-data-field-selection.png` | 05 核心方案 1，展示数据源与字段选择界面 | 1600 x 900 | 数据源与字段选择界面，展示数据源列表、字段说明、字段示例和权限状态 | 在通用风格基础上，生成 product UI mockup：左侧数据源分类，中间字段表格，右侧字段说明、示例值、权限状态与使用边界面板，突出“先理解字段，再配置分析”。 |
| `assets/self-service-analytics-chart-config-panel.png` | 06 核心方案 2，展示图表配置与筛选联动 | 1600 x 900 | 图表配置面板，展示图表类型、指标维度、字段映射、筛选条件和实时预览 | 在通用风格基础上，生成 product UI mockup：左侧图表类型、指标维度、字段映射与筛选控件，中间实时图表预览，右侧筛选作用范围和校验反馈，用连接线表达字段到图表和筛选的关系。 |
| `assets/self-service-analytics-dashboard-publish.png` | 07 核心方案 3，展示看板编排与发布管理 | 1600 x 900 | 看板编排与发布管理界面，展示组件库、看板画布、筛选器、权限设置和发布状态 | 在通用风格基础上，生成 dashboard builder UI：左侧组件库，中心看板画布含多张图表卡片，顶部全局筛选器，右侧发布和权限设置面板，显示草稿、预览、发布状态但不出现长文字。 |
| `assets/self-service-analytics-design-decisions.png` | 08 关键设计决策，表达默认路径与高级能力的平衡 | 1600 x 900 | 关键设计决策图，展示默认路径、字段解释、配置反馈、筛选范围和发布控制 | 在通用风格基础上，生成 design decision diagram：用横向流程卡片表达默认模板优先、字段解释前置、配置分组稳定、实时预览反馈、筛选范围可见、错误定位、发布状态、团队权限，中心嵌入小型产品界面。 |
| `assets/self-service-analytics-outcome-summary.png` | 09 项目价值与成果，展示成果总结 | 1600 x 900 | 项目成果总结图，展示 6 个核心环节、2 类核心用户、完整链路和可复用设计模式 | 在通用风格基础上，生成 outcome summary visual：大号指标卡展示 6 和 2，下方用六步连接图标表达数据选择、字段配置、图表生成、筛选分析、看板编排、发布管理，右侧放置抽象 3D 分析仪表盘对象。 |
