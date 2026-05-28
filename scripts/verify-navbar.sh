#!/usr/bin/env bash
# Post-deploy smoke check for codex.mrwhale.ai navbar
set -euo pipefail

URL="${1:-https://codex.mrwhale.ai/}"
HTML="$(curl -fsSL "$URL")"

need=(
  "vp-navbar"
  "vp-nav-links"
  "首页"
  "学习路线"
  "入口地图"
  "接入 MrWhale"
  "mrwhale-brand.svg"
)

echo "Checking $URL ..."
for token in "${need[@]}"; do
  if ! printf '%s' "$HTML" | grep -q "$token"; then
    echo "FAIL: missing '$token' in HTML"
    exit 1
  fi
  echo "  ok: $token"
done

# Must not hide all nav links (regression: vpi- on <a>)
if printf '%s' "$HTML" | grep -q 'vp-nav-links"></div>'; then
  echo "FAIL: empty vp-nav-links"
  exit 1
fi

echo "PASS: navbar smoke check"
