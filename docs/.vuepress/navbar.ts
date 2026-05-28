import { navbar } from "vuepress-theme-hope";

import { MRWHALE_SITE } from "./mrwhale.js";

export default navbar([
  { text: "接入 API", icon: "link", link: "/mrwhale/" },
  { text: "学习路线", icon: "map", link: "/guide/00-overview.md" },
  { text: "教程", icon: "book", link: "/guide/00-overview.md" },
  { text: "实战案例", icon: "lightbulb", link: "/recipes/" },
  {
    text: "mrwhale.ai",
    icon: "home",
    link: MRWHALE_SITE,
  },
]);
