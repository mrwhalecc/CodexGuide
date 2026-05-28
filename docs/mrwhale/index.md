---
title: 接入 MrWhale
icon: link
pageClass: mrwhale-connect-page
description: 在 MrWhale.ai 创建 Token，将 Codex CLI 指向 OpenAI 兼容网关，与 MrWhale Codex 指南配合使用。
---

# 接入 MrWhale

本页是 **MrWhale 业务文档**，教你把 Codex CLI 接到 [MrWhale.ai](https://mrwhale.ai) 的 OpenAI 兼容 API。上方教程章节来自开源 CodexGuide，**正文未改字**，仅在本站增加接入说明。

## 为什么配合 MrWhale 使用

- **OpenAI 兼容**：Codex CLI 可使用 `OPENAI_BASE_URL` + `OPENAI_API_KEY` 方式接入。
- **统一控制台**：在 [控制台](https://mrwhale.ai/console) 创建与管理 Token、查看用量。
- **与主站文档一致**：详细计费、分组与排障见 [MrWhale Codex 接入文档](https://mrwhale.ai/docs/cli-codex)。

## 3 分钟接入

### 1. 注册并登录

打开 [mrwhale.ai](https://mrwhale.ai) 注册账号，进入 [控制台](https://mrwhale.ai/console)。

### 2. 创建 Token

建议名称填写 `Codex`，便于区分用途。记下以 `sk-` 开头的密钥（仅显示一次）。

### 3. 配置环境变量

::: code-tabs#shell

@tab macOS / Linux

```bash
export OPENAI_BASE_URL=https://mrwhale.ai/v1
export OPENAI_API_KEY=sk-your-token
```

@tab Windows PowerShell

```powershell
$env:OPENAI_BASE_URL = "https://mrwhale.ai/v1"
$env:OPENAI_API_KEY = "sk-your-token"
```

:::

::: warning 必须带 /v1
Codex 使用 OpenAI 兼容格式时，Base URL 需包含 **`/v1`** 后缀，即 `https://mrwhale.ai/v1`，不要省略。
:::

可将上述变量写入 `~/.zshrc`、`~/.bashrc` 或系统环境变量，避免每次开终端重复设置。

### 4. 验证

```bash
codex "List all files in the current directory"
```

若返回正常结果，说明 CLI 已通过 MrWhale 网关访问模型。

## 常见问题

| 现象 | 处理 |
|------|------|
| 401 / 鉴权失败 | 检查 Token 是否完整、是否过期；在控制台重新创建。 |
| model not found | 确认 Token 所属**分组**包含所需模型。 |
| 连不上 / 超时 | 核对 `OPENAI_BASE_URL` 是否为 `https://mrwhale.ai/v1`。 |

## 下一步

- 继续阅读本站 [学习路线](/guide/00-overview.md) 与 [CLI 安装](/guide/11-cli-installation.md)。
- [Claude Code 接入](https://mrwhale.ai/docs/cli-claude) · [Cursor 配置](https://mrwhale.ai/docs/cli-cursor) · [注册与充值](https://mrwhale.ai/docs/register)

---

[← 返回首页](/) · [开源致谢](/about/attribution.md)
