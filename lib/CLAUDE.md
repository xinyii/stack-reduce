# lib/ — 共享逻辑

> [返回根目录](../CLAUDE.md)

## 文件

| 文件 | 职责 |
|------|------|
| `source.ts` | Fumadocs 数据源加载器：从 `fumadocs-mdx:collections/server` 导入 docs collection，通过 `loader()` 创建 source 对象，baseUrl 为 `/docs` |
| `layout.shared.tsx` | 导出 `baseOptions()` 函数，返回全站导航配置（站点标题、7 个顶级分类链接） |

## source.ts 提供的能力

- `source.getPage(slug)` — 获取单个文档页面数据
- `source.getPages()` — 获取所有文档页面（用于 sitemap、搜索索引）
- `source.getPageTree()` — 获取侧边栏页面树（用于 DocsLayout）
- `source.generateParams()` — 生成 `generateStaticParams` 所需的参数列表
