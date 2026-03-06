# .github/ — CI/CD 配置

> [返回根目录](../CLAUDE.md)

## workflows/deploy.yml

自动部署流水线，push 到 `main` 分支时触发。

### 流程

1. Checkout 代码
2. 安装 pnpm（latest）+ Node.js 22
3. `pnpm install --frozen-lockfile`
4. `pnpm build`（Next.js 静态导出 → `out/`）
5. 部署到 GitHub Pages（`peaceiris/actions-gh-pages@v4`，publish_dir: `out`）
6. 上传到腾讯云 COS（`TencentCloud/cos-action@v1`，local_path: `out`）

### 所需 Secrets

| Secret | 用途 |
|--------|------|
| `GITHUB_TOKEN` | GitHub Pages 部署（自动提供） |
| `TENCENT_CLOUD_SECRET_ID` | 腾讯云 API 密钥 ID |
| `TENCENT_CLOUD_SECRET_KEY` | 腾讯云 API 密钥 |
| `COS_BUCKET` | COS 存储桶名称 |
| `COS_REGION` | COS 地域 |
