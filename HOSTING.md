# Cloudflare Pages — codex.mrwhale.ai

| 项 | 值 |
|---|---|
| 仓库 | https://github.com/mrwhalecc/CodexGuide |
| 域名 | codex.mrwhale.ai |
| 主站引流 | https://mrwhale.ai |

## 构建设置

- **Build command:** `pnpm install --frozen-lockfile && pnpm build`
- **Output directory:** `docs/.vuepress/dist`
- **NODE_VERSION:** `22`
- **PNPM_VERSION:** `10.33.0`

推送 `main` 后 Cloudflare 自动发布。主站 Nginx 无需配置此子域。
