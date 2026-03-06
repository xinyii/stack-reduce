# components/ — 共享组件

> [返回根目录](../CLAUDE.md)

## 文件

| 文件 | 职责 |
|------|------|
| `search.tsx` | 静态搜索对话框（`'use client'`）。使用 `@orama/orama` 创建客户端搜索引擎，配合 `useDocsSearch({ type: 'static' })` 从预渲染的 `/api/search` JSON 加载索引。通过 `app/provider.tsx` 注入到 `RootProvider` 的 `search.SearchDialog` |

## 扩展组件

如需添加新的全局 MDX 组件，在根目录 `mdx-components.tsx` 的 `getMDXComponents` 中注册。当前已注册：
- `defaultMdxComponents`（Fumadocs 默认组件集）
- `Callout`（`fumadocs-ui/components/callout`）
