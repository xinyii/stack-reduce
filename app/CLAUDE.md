# app/ — Next.js App Router

> [返回根目录](../CLAUDE.md)

## 概述

Next.js 16 App Router 目录，包含所有页面路由、布局和 API 端点。使用静态导出模式（`output: 'export'`）。

## 目录结构

```
app/
├── layout.tsx          # 根布局：<html>、全局 metadata、百度统计、Provider
├── provider.tsx        # 客户端 Provider：RootProvider（暗色主题 + 静态搜索）
├── global.css          # Tailwind CSS 4 + Fumadocs 样式
├── sitemap.ts          # 静态 sitemap 生成（force-static）
├── (home)/
│   ├── layout.tsx      # 首页布局（HomeLayout）
│   └── page.tsx        # 首页：Hero + 6 个 Feature 卡片
├── docs/
│   ├── layout.tsx      # 文档布局（DocsLayout + 侧边栏树）
│   └── [[...slug]]/
│       └── page.tsx    # 文档页面：MDX 渲染 + generateStaticParams
└── api/
    └── search/
        └── route.ts    # 静态搜索索引（staticGET + revalidate=false）
```

## 关键入口

| 文件 | 职责 |
|------|------|
| `layout.tsx` | 全局 HTML shell、metadata（title template、description、metadataBase）、百度统计注入 |
| `provider.tsx` | `'use client'` — 包装 `RootProvider`，配置暗色默认主题和自定义搜索对话框 |
| `docs/[[...slug]]/page.tsx` | 动态文档页 — 从 `source.getPage()` 获取数据，渲染 `DocsPage`/`DocsBody`/`DocsTitle` |

## 依赖关系

- `provider.tsx` → `components/search.tsx`（搜索对话框）
- `docs/layout.tsx` → `lib/source.ts`（页面树）、`lib/layout.shared.tsx`（导航配置）
- `docs/[[...slug]]/page.tsx` → `lib/source.ts`、`mdx-components.tsx`
- `sitemap.ts` → `lib/source.ts`

## 注意事项

- `output: 'export'` 模式下，API 路由必须能静态渲染
- `sitemap.ts` 和 `api/search/route.ts` 都需要标记为静态（`dynamic = 'force-static'` 或 `revalidate = false`）
- `provider.tsx` 是客户端组件（`'use client'`），因为 `RootProvider` 需要客户端交互
