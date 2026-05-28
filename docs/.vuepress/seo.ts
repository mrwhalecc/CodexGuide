import { MRWHALE_SITE, SITE_NAME, SITE_TAGLINE } from "./mrwhale.js";

export const siteUrl = "https://codex.mrwhale.ai";

export const siteDescription = SITE_TAGLINE;

export const siteOgImage = `${siteUrl}/og.svg`;

const mrwhaleCta = ` API 与 Token：${MRWHALE_SITE}`;

export const pageDescriptions: Record<string, string> = {
  "/": `${SITE_NAME}：${SITE_TAGLINE}${mrwhaleCta}`,
  "/mrwhale/":
    `在 MrWhale.ai 创建 Token，配置 Codex CLI（OPENAI_BASE_URL=${MRWHALE_SITE}/v1）。${mrwhaleCta}`,
  "/mrwhale/index.html": `在 MrWhale.ai 接入 Codex CLI 与 OpenAI 兼容 API。${mrwhaleCta}`,
  "/about/attribution.html":
    `${SITE_NAME} 教程来源与 MIT 许可说明；API 服务由 MrWhale.ai 提供。`,
  "/community/":
    "MrWhale Codex 指南 — 社区与共建说明。主站 API 与计费请访问 mrwhale.ai。",
  "/community/roadmap.html":
    "MrWhale Codex 指南内容规划；API 接入请见 mrwhale.ai/docs。",
  "/configuration/":
    `Codex 配置与扩展总览。配合 ${MRWHALE_SITE} 网关使用时，请先看接入 MrWhale。${mrwhaleCta}`,
  "/configuration/cli-options.html":
    `Codex CLI 选项与命令。通过 MrWhale 调用时 Base URL 为 ${MRWHALE_SITE}/v1。${mrwhaleCta}`,
  "/configuration/config-file.html":
    `Codex config.toml 配置指南。${MRWHALE_SITE} 用户建议同时阅读接入文档。${mrwhaleCta}`,
  "/configuration/mcp-skills-subagents.html":
    `Codex MCP、Skills 与 Subagents 指南。${mrwhaleCta}`,
  "/configuration/security-admin.html":
    `Codex 安全、审批与管理指南。${mrwhaleCta}`,
  "/guide/":
    `Codex 学习路线 — ${SITE_NAME}。完成入门后可在 ${MRWHALE_SITE} 配置 API。${mrwhaleCta}`,
  "/guide/00-overview.html":
    `Codex 学习路线。第 0 步建议先完成 ${MRWHALE_SITE} Token 与 CLI 环境变量配置。${mrwhaleCta}`,
  "/guide/01-app-installation.html":
    "Codex 桌面 App 下载与安装教程。",
  "/guide/02-subscribe-plus.html":
    "ChatGPT Plus 与 Pro 订阅指南。",
  "/guide/03-app-overview.html":
    "Codex 桌面 App 基本组成说明。",
  "/guide/04-mobile-control-desktop.html":
    "手机端跟进桌面 Codex 任务教程。",
  "/guide/05-app-first-task.html":
    "用 Codex 完成第一个任务的入门教程。",
  "/guide/06-task-execution.html":
    "Codex 任务顺序执行与并行说明。",
  "/guide/07-permissions.html":
    "Codex 权限管理指南。",
  "/guide/08-skills-plugins.html":
    "Codex Skills 和 Plugins 入门说明。",
  "/guide/09-automation.html":
    "Codex 自动化指南。",
  "/guide/10-desktop-pet.html":
    "Codex 桌面形象设置教程。",
  "/guide/11-cli-installation.html":
    `Codex CLI 安装与登录。接入 ${MRWHALE_SITE} 见本站「接入 MrWhale」。${mrwhaleCta}`,
  "/guide/12-cli-first-run.html":
    `第一次让 Codex CLI 改代码。${MRWHALE_SITE} 用户请先配置 OPENAI_BASE_URL。${mrwhaleCta}`,
  "/guide/13-ide-vscode.html":
    "在 VS Code 中使用 Codex 的教程。",
  "/guide/14-agents-md.html":
    `AGENTS.md 项目规则指南。${mrwhaleCta}`,
  "/guide/15-sandbox-approvals.html":
    `Codex 沙盒、审批与安全边界。${mrwhaleCta}`,
  "/guide/16-cloud-ide-app.html":
    "Codex Cloud 使用指南。",
  "/guide/17-troubleshooting.html":
    `Codex 排障手册。API 鉴权问题可对照 ${MRWHALE_SITE}/docs/cli-codex。${mrwhaleCta}`,
  "/platform/":
    `Codex 入口地图 — ${SITE_NAME}。${mrwhaleCta}`,
  "/platform/app.html": "Codex 桌面 App 入口说明。",
  "/platform/chatgpt.html": "ChatGPT 中的 Codex 使用说明。",
  "/platform/cli.html":
    `Codex CLI 入口说明。${MRWHALE_SITE} OpenAI 兼容接入见 /mrwhale/。${mrwhaleCta}`,
  "/platform/cloud.html": "Codex Cloud 与 Web 入口说明。",
  "/platform/ide.html": "Codex IDE 入口说明。",
  "/practice/":
    "Codex 实践方法总览。",
  "/practice/non-dev-workflows.html":
    "Codex 非开发工作流指南。",
  "/practice/task-design.html":
    "Codex 任务设计方法。",
  "/practice/team-playbook.html":
    "Codex 团队实践指南。",
  "/recipes/":
    `Codex 实战案例库 — ${SITE_NAME}。${mrwhaleCta}`,
  "/recipes/chrome-browser-plugin.html":
    "Codex Chrome 浏览器插件案例。",
  "/recipes/credits.html":
    "参考来源与致谢。",
  "/recipes/dkfile-deploy-codex.html":
    "Codex 与 DKFile 发布案例。",
  "/recipes/drawio-mcp.html":
    "Codex 与 Draw.io MCP 案例。",
  "/recipes/feishu-cli-codex.html":
    "Codex 与飞书 CLI 案例。",
  "/recipes/figma-mcp-codex.html":
    "Codex 与 Figma MCP 案例。",
  "/recipes/github-actions-ci-fix.html":
    "Codex 与 GitHub Actions 案例。",
  "/recipes/hyperframes-animation.html":
    "Codex 与 HyperFrames 案例。",
  "/recipes/llm-wiki-codex.html":
    "Codex 与 LLM Wiki 案例。",
  "/recipes/notion-mcp-codex.html":
    "Codex 与 Notion MCP 案例。",
  "/recipes/obsidian-codex.html":
    "Codex 与 Obsidian 案例。",
  "/recipes/playwright-mcp.html":
    "Codex 与 Playwright MCP 案例。",
  "/recipes/ppt-skill-walkthrough.html":
    "Codex 与 PPT Skill 案例。",
  "/recipes/remote-bug-fix.html":
    "Codex 与云服务器排障案例。",
  "/reference/":
    "Codex 官方资料索引。API 接入请访问 mrwhale.ai。",
};

export const getPageDescription = (path: string): string =>
  pageDescriptions[path] ?? `${SITE_NAME} — ${SITE_TAGLINE}${mrwhaleCta}`;

export const toSiteUrl = (path: string): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
