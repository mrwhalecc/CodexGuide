import { navbar } from "vuepress-theme-hope";

import { MRWHALE_CONSOLE, MRWHALE_SITE } from "./mrwhale.js";

/** 顶栏：少而清晰；教程/案例放下拉，避免 10+ 项挤在一行 */
export default navbar([
  { text: "首页", link: "/" },
  { text: "接入 MrWhale", link: "/mrwhale/", attrs: { class: "mw-nav-em" } },
  {
    text: "指南",
    children: [
      { text: "学习路线", link: "/guide/00-overview.md" },
      { text: "入口地图", link: "/platform/" },
      { text: "实践方法", link: "/practice/" },
      { text: "官方资料", link: "/reference/" },
    ],
  },
  {
    text: "配置",
    children: [
      { text: "配置总览", link: "/configuration/" },
      { text: "CLI 选项与命令", link: "/configuration/cli-options.md" },
      { text: "config.toml", link: "/configuration/config-file.md" },
      { text: "MCP、Skills 与 Subagents", link: "/configuration/mcp-skills-subagents.md" },
      { text: "安全与审批", link: "/configuration/security-admin.md" },
    ],
  },
  {
    text: "教程",
    children: [
      { text: "01 桌面 App 安装", link: "/guide/01-app-installation.md" },
      { text: "02 订阅 Plus", link: "/guide/02-subscribe-plus.md" },
      { text: "03 桌面 App 总览", link: "/guide/03-app-overview.md" },
      { text: "04 手机端协同", link: "/guide/04-mobile-control-desktop.md" },
      { text: "05 第一个任务", link: "/guide/05-app-first-task.md" },
      { text: "06 任务执行", link: "/guide/06-task-execution.md" },
      { text: "07 权限管理", link: "/guide/07-permissions.md" },
      { text: "08 技能与插件", link: "/guide/08-skills-plugins.md" },
      { text: "09 自动化", link: "/guide/09-automation.md" },
      { text: "10 桌面宠物", link: "/guide/10-desktop-pet.md" },
      { text: "11 CLI 安装", link: "/guide/11-cli-installation.md" },
      { text: "12 CLI 改代码", link: "/guide/12-cli-first-run.md" },
      { text: "13 VS Code", link: "/guide/13-ide-vscode.md" },
      { text: "14 AGENTS.md", link: "/guide/14-agents-md.md" },
      { text: "15 沙盒与审批", link: "/guide/15-sandbox-approvals.md" },
      { text: "16 Codex Cloud", link: "/guide/16-cloud-ide-app.md" },
      { text: "17 排障手册", link: "/guide/17-troubleshooting.md" },
    ],
  },
  {
    text: "案例",
    children: [
      { text: "案例总览", link: "/recipes/" },
      { text: "01 PPT Skill", link: "/recipes/ppt-skill-walkthrough.md" },
      { text: "02 Draw.io MCP", link: "/recipes/drawio-mcp.md" },
      { text: "03 Playwright MCP", link: "/recipes/playwright-mcp.md" },
      { text: "04 HyperFrames", link: "/recipes/hyperframes-animation.md" },
      { text: "05 Obsidian", link: "/recipes/obsidian-codex.md" },
      { text: "06 飞书 CLI", link: "/recipes/feishu-cli-codex.md" },
      { text: "07 LLM Wiki", link: "/recipes/llm-wiki-codex.md" },
      { text: "08 Figma MCP", link: "/recipes/figma-mcp-codex.md" },
      { text: "09 Notion MCP", link: "/recipes/notion-mcp-codex.md" },
      { text: "10 DKFile 发布", link: "/recipes/dkfile-deploy-codex.md" },
      { text: "11 远程排障", link: "/recipes/remote-bug-fix.md" },
      { text: "12 Chrome 插件", link: "/recipes/chrome-browser-plugin.md" },
      { text: "13 GitHub Actions", link: "/recipes/github-actions-ci-fix.md" },
      { text: "参考致谢", link: "/recipes/credits.md" },
    ],
  },
  { text: "开源致谢", link: "/about/attribution.md" },
  {
    text: "控制台",
    link: MRWHALE_CONSOLE,
    attrs: { class: "mw-nav-cta", rel: "noopener noreferrer" },
  },
  {
    text: "mrwhale.ai",
    link: MRWHALE_SITE,
    attrs: { class: "mw-nav-out", target: "_blank", rel: "noopener noreferrer" },
  },
]);
