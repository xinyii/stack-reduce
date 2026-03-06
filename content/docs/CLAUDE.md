# content/docs/ — 文档内容

> [返回根目录](../../CLAUDE.md)

## 概述

使用 Fumadocs MDX 管理的文档内容目录。包含 7 个顶级分类、31 个 MDX 文件和 29 个 meta.json 导航定义。

## 内容分类

| 分类 | 路径 | MDX 数 | 说明 |
|------|------|--------|------|
| 向导 | `guide/` | 2 | 简介、导读 |
| 工具 | `tool/` | 5 | ChatGPT、IntelliJ IDEA、uTools、Everything |
| 设计 | `design/` | 6 | UML、原型、数据库规范、接口设计 |
| 后端 | `backend/` | 6 | Java/TS 技术栈、框架、规范、数据库 |
| 前端 | `frontend/` | 4 | Web/H5/App 技术栈、通用库 |
| 测试 | `test/` | 3 | 单元测试、性能测试 |
| 运维 | `ops/` | 8 | JDK/MySQL/Nginx/Redis/Docker 部署、脚本、Jenkins |

## meta.json 规范

每个目录必须有 `meta.json`，控制侧边栏展示：

```json
{
  "title": "显示名称",
  "root": true,
  "pages": ["file-slug-1", "file-slug-2", "subfolder"]
}
```

- `title`：侧边栏中显示的目录名称
- `root`：仅顶级分类目录（guide/tool/design/backend/frontend/test/ops）设为 `true`
- `pages`：按顺序列出子页面 slug 或子目录名（不含扩展名）

## MDX 编写规范

### Frontmatter（必需）

```yaml
---
title: 页面标题
description: 页面描述（用于 SEO 和卡片展示）
---
```

### 语法注意

- 链接：使用 `[text](url)`，禁止 `<url>` 自动链接
- 提示框：使用 `<Callout title="标题">内容</Callout>`
- 警告框：使用 `<Callout type="warn" title="注意">内容</Callout>`
- 代码块中的 `<` `>` `{` `}` 安全，无需转义
- 正文中的 `<` `>` 会被解析为 JSX，需使用 HTML 实体或放在反引号中

## 添加新页面步骤

1. 在目标目录创建 `new-page.mdx`，添加 frontmatter
2. 在该目录的 `meta.json` 的 `pages` 数组中添加 `"new-page"`
3. 运行 `pnpm dev` 或 `pnpm build` 验证
