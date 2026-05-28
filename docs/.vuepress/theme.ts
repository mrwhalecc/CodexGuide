import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import { mrwhaleSeoHead } from "./plugins/mrwhale-branding.js";
import { MRWHALE_SITE, SITE_NAME } from "./mrwhale.js";
import { getPageDescription, siteOgImage, siteUrl, toSiteUrl } from "./seo.js";
import sidebar from "./sidebar/index.js";

const addMeta = (
  head: unknown[][],
  attribute: "name" | "property",
  name: string,
  content: string,
): void => {
  if (head.some(([tag, attrs]) => tag === "meta" && attrs?.[attribute] === name)) return;
  head.push(["meta", { [attribute]: name, content }]);
};

export default hopeTheme({
  hostname: `${siteUrl}/`,
  logo: "/mrwhale-brand.svg",
  favicon: "/mrwhale-mark.svg",

  repo: false,

  docsDir: "docs",

  navbar,
  sidebar,

  print: false,
  pure: true,
  focus: false,
  breadcrumb: true,
  displayFooter: true,
  footer: `© <a href="${MRWHALE_SITE}" rel="noopener noreferrer">MrWhale.ai</a> · <a href="/about/attribution.html">开源致谢</a> · 教程基于 <a href="https://github.com/freestylefly/CodexGuide" rel="noopener noreferrer">CodexGuide</a>（MIT）`,
  contributors: false,
  lastUpdated: false,
  pageInfo: false,

  blog: false,

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    gfm: true,
    mark: true,
    tasklist: true,
    tabs: true,
  },

  plugins: {
    git: false,
    copyCode: true,
    copyright: {
      author: SITE_NAME,
      license: "MIT",
      triggerLength: 120,
      maxLength: 500,
      canonical: `${siteUrl}/`,
      global: false,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    seo: {
      fallBackImage: siteOgImage,
      canonical: (page) => toSiteUrl(page.path),
      ogp: (ogp, page) => ({
        ...ogp,
        "og:description": getPageDescription(page.path),
        "og:site_name": "MrWhale",
        "og:image": page.frontmatter.cover || page.frontmatter.banner ? ogp["og:image"] : siteOgImage,
        "og:image:alt": `${page.title} - ${SITE_NAME}`,
        "og:locale": "zh_CN",
      }),
      jsonLd: (jsonLD, page) => ({
        ...jsonLD,
        description: getPageDescription(page.path),
        url: toSiteUrl(page.path),
        image: [siteOgImage],
        inLanguage: "zh-CN",
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: `${siteUrl}/`,
          publisher: {
            "@type": "Organization",
            name: "MrWhale",
            url: `${MRWHALE_SITE}/`,
          },
        },
        publisher: {
          "@type": "Organization",
          name: "MrWhale",
          url: `${MRWHALE_SITE}/`,
          logo: {
            "@type": "ImageObject",
            url: `${MRWHALE_SITE}/logo.png`,
          },
        },
      }),
      customHead: (head, page) => {
        const description = getPageDescription(page.path);
        const title = `${page.title} | ${SITE_NAME}`;

        mrwhaleSeoHead(head);

        addMeta(head, "name", "twitter:card", "summary_large_image");
        addMeta(head, "name", "twitter:title", title);
        addMeta(head, "name", "twitter:description", description);
        addMeta(head, "name", "twitter:image", siteOgImage);
        addMeta(head, "name", "twitter:image:alt", `${page.title} - ${SITE_NAME}`);
        addMeta(head, "property", "og:title", title);
      },
    },
    sitemap: {
      hostname: `${siteUrl}/`,
      changefreq: "weekly",
      excludePaths: ["/404.html"],
    },
    slimsearch: {
      maxSuggestions: 10,
      locales: {
        "/": {
          placeholder: `搜索 ${SITE_NAME}`,
        },
      },
    },
  },
});
