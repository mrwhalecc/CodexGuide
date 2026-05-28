import type { Page } from "vuepress";
import type { Plugin } from "vuepress";

import {
  CALLOUT_PAGE_PREFIXES,
  MRWHALE_CALLOUT_MD,
  MRWHALE_SITE,
  SITE_NAME,
} from "../mrwhale.js";

const normalizePath = (path: string): string => {
  const base = path.replace(/\.html$/, "").replace(/\/index$/, "") || "/";
  return base.endsWith("/") && base.length > 1 ? base.slice(0, -1) : base;
};

const shouldPrependCallout = (page: Page): boolean => {
  if (page.frontmatter.home || page.frontmatter.callout === false) return false;
  const path = normalizePath(page.path);
  return CALLOUT_PAGE_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
};

export const mrwhaleBrandingPlugin = (): Plugin => ({
  name: "mrwhale-branding",

  extendsPage(page) {
    if (shouldPrependCallout(page) && typeof page.content === "string") {
      if (!page.content.includes("使用 MrWhale API")) {
        page.content = `${MRWHALE_CALLOUT_MD}\n${page.content}`;
      }
    }
  },

});

export const mrwhaleSeoHead = (head: unknown[][]): void => {
  const add = (tag: string, attrs: Record<string, string>) => {
    if (head.some((entry) => entry[0] === tag && JSON.stringify(entry[1]) === JSON.stringify(attrs))) {
      return;
    }
    head.push([tag, attrs]);
  };

  add("link", { rel: "preconnect", href: MRWHALE_SITE });
  add("link", { rel: "dns-prefetch", href: MRWHALE_SITE });
  add("meta", { name: "application-name", content: SITE_NAME });
  add("meta", { property: "og:site_name", content: "MrWhale" });
};
