# HUD — Home Assistant Theme

A futuristic sci-fi / heads-up-display theme for Home Assistant. Deep navy background, glowing cyan primaries,
amber warnings, a faint tech-grid overlay on the dashboard, and a monospace / Orbitron-leaning font stack.

![vibe reference](https://sv.vecteezy.com/vektor-konst/24803276-hud-sci-fi-granssnitt-skarm-se-design-virtuell-verklighet-trogen-teknologi-visa-vektor)

## Install

1. Copy `themes/hud.yaml` into your Home Assistant config under `<config>/themes/hud.yaml`.
2. Make sure `configuration.yaml` loads the themes directory:

   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```

3. Restart Home Assistant (or call the `frontend.reload_themes` service).
4. Go to **Profile → Theme** and pick **HUD**.

## Optional: fonts

For the full HUD look, load **Orbitron** (or **Rajdhani** / **Share Tech Mono**) from Google Fonts.
Copy `www/fonts.js` into your HA config's `www/` folder, then pick **one** of:

**Via dashboard resource (UI):**

1. **Settings → Dashboards → ⋮ (top right) → Resources → Add resource**
2. URL: `/local/fonts.js`, type: **JavaScript**
3. Hard-refresh the browser (Ctrl/Cmd+Shift+R).

**Via `configuration.yaml`:**

```yaml
frontend:
  extra_module_url:
    - /local/fonts.js
```

Without this step the theme falls back gracefully to JetBrains Mono / Fira Code / system monospace.

Headlines (card headers, titles, display sizes) always prefer **Orbitron**. To also style plain
`h1` elements (e.g. in Markdown cards) and `.content .title` divs, install
[card-mod](https://github.com/thomasloven/lovelace-card-mod) — the theme's `card-mod-root-yaml`
block handles the rest.
