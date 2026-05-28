import { defineClientConfig } from "vuepress/client";

const barId = "mrwhale-cta-bar";

export default defineClientConfig({
  setup() {
    if (import.meta.env.SSR) return;

    if (document.getElementById(barId)) return;

    const bar = document.createElement("div");
    bar.id = barId;
    bar.setAttribute("role", "complementary");
    bar.setAttribute("aria-label", "MrWhale 主站入口");
    bar.innerHTML = `
      <span>需要 API / Token？</span>
      <a href="https://mrwhale.ai/docs/cli-codex" rel="noopener noreferrer">Codex 接入</a>
      <a href="https://mrwhale.ai/console" rel="noopener noreferrer">控制台</a>
      <a href="https://mrwhale.ai" rel="noopener noreferrer">mrwhale.ai</a>
    `;
    document.body.appendChild(bar);
  },
});
