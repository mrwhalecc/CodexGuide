/** MrWhale product URLs — used in theme, SEO, and callouts. */
export const MRWHALE_SITE = "https://mrwhale.ai";
export const MRWHALE_CONSOLE = "https://mrwhale.ai/console";
export const MRWHALE_API_BASE = "https://mrwhale.ai/v1";
export const MRWHALE_DOCS_CODEX = "https://mrwhale.ai/docs/cli-codex";
export const MRWHALE_DOCS_REGISTER = "https://mrwhale.ai/docs/register";

export const SITE_NAME = "MrWhale Codex 指南";
export const SITE_TAGLINE =
  "系统学习 Codex 桌面 App、CLI、IDE 与实战案例；API 接入、Token 与按量计费请前往 MrWhale.ai。";

export const UPSTREAM_REPO = "https://github.com/freestylefly/CodexGuide";

/** Pages that receive a prepended MrWhale API callout (tutorial body untouched). */
export const CALLOUT_PAGE_PREFIXES = [
  "/guide/00-overview",
  "/guide/11-cli-installation",
  "/guide/12-cli-first-run",
  "/guide/14-agents-md",
  "/guide/15-sandbox-approvals",
  "/configuration/config-file",
  "/platform/cli",
] as const;

export const MRWHALE_CALLOUT_MD = `::: info 使用 MrWhale API
通过 [MrWhale.ai](${MRWHALE_SITE}) 调用 Codex / OpenAI 兼容模型时，请先阅读 **[接入 MrWhale →](/mrwhale/)**，并在控制台创建 Token。快速配置见 [MrWhale Codex 接入文档](${MRWHALE_DOCS_CODEX})（Base URL：\`${MRWHALE_API_BASE}\`）。
:::

`;
