import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import { mrwhaleBrandingPlugin } from "./plugins/mrwhale-branding.js";
import { MRWHALE_SITE, SITE_NAME } from "./mrwhale.js";
import { getPageDescription, siteDescription, siteUrl } from "./seo.js";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "docs/.vuepress/dist",
  lang: "zh-CN",
  title: SITE_NAME,
  description: siteDescription,

  head: [
    ["meta", { name: "robots", content: "index,follow,max-image-preview:large" }],
    ["meta", { name: "author", content: "MrWhale" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "MrWhale,Codex,Codex CLI,OpenAI Codex,AGENTS.md,AI 编程,Codex 教程,mrwhale.ai,OpenAI API,API 网关,Claude Code,Cursor",
      },
    ],
    ["meta", { name: "theme-color", content: "#0f172a" }],
    ["meta", { name: "format-detection", content: "telephone=no" }],
    ["link", { rel: "icon", href: "/mrwhale-mark.svg", type: "image/svg+xml" }],
    ["link", { rel: "apple-touch-icon", href: "/mrwhale-mark.svg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap",
      },
    ],
    ["link", { rel: "canonical", href: siteUrl }],
    ["link", { rel: "preconnect", href: MRWHALE_SITE }],
    ["link", { rel: "dns-prefetch", href: MRWHALE_SITE }],
  ],

  plugins: [
    mrwhaleBrandingPlugin(),
    {
      name: "mrwhale-seo-defaults",
      extendsPage: (page) => {
        if (!page.frontmatter.description) {
          page.frontmatter.description = getPageDescription(page.path);
        }
      },
    },
  ],

  bundler: viteBundler(),

  theme,

  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],

  shouldPrefetch: false,
  shouldPreload: false,
});
