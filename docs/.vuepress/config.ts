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
    ["meta", { name: "theme-color", content: "#1d4ed8" }],
    ["meta", { name: "format-detection", content: "telephone=no" }],
    ["link", { rel: "icon", href: "/mrwhale-logo.svg", type: "image/svg+xml" }],
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
