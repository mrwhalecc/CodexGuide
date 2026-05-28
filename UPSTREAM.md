# 上游同步（CodexGuide）

- 上游：https://github.com/freestylefly/CodexGuide
- 本站 Fork：https://github.com/mrwhalecc/CodexGuide
- 线上：https://codex.mrwhale.ai

## 仅改这些路径（Sync 后检查）

| 路径 | 说明 |
|------|------|
| `docs/.vuepress/` | MrWhale 品牌、SEO、Callout 插件 |
| `docs/mrwhale/` | 接入 MrWhale 业务文档 |
| `docs/about/` | 开源致谢 |
| `docs/index.md` | 首页（非教程正文） |
| `NOTICE` / `UPSTREAM.md` / `HOSTING.md` | 运维与合规 |

## 不要改

- `docs/guide/**`、`docs/platform/**`、`docs/recipes/**` 等教程正文（除 Sync 合并冲突外）

## 合并上游

```bash
git remote add upstream https://github.com/freestylefly/CodexGuide.git  # 首次
git fetch upstream
git merge upstream/main
```

合并后确认：`seo.ts` 中 `siteUrl` 仍为 `https://codex.mrwhale.ai`，页脚与 `/mrwhale/` 仍在。
