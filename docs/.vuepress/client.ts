import { defineClientConfig } from "vuepress/client";

const barId = "mrwhale-cta-bar";

export default defineClientConfig({
  setup() {
    if (import.meta.env.SSR) return;
    if (document.getElementById(barId)) return;

    const bar = document.createElement("aside");
    bar.id = barId;
    bar.className = "mrwhale-cta";
    bar.setAttribute("aria-label", "MrWhale 主站入口");
    bar.innerHTML = `
      <div class="mrwhale-cta__inner">
        <p class="mrwhale-cta__text">
          <span class="mrwhale-cta__eyebrow">MrWhale.ai</span>
          <span class="mrwhale-cta__label">接入 Codex · 创建 Token · 按量计费</span>
        </p>
        <div class="mrwhale-cta__actions">
          <a class="mrwhale-cta__btn mrwhale-cta__btn--primary" href="https://mrwhale.ai/docs/cli-codex" rel="noopener noreferrer">Codex 接入</a>
          <a class="mrwhale-cta__btn" href="https://mrwhale.ai/console" rel="noopener noreferrer">控制台</a>
          <a class="mrwhale-cta__btn mrwhale-cta__btn--ghost" href="https://mrwhale.ai" rel="noopener noreferrer">主站</a>
        </div>
      </div>
    `;
    document.body.appendChild(bar);
  },
});
