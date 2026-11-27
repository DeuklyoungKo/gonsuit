# Design: gonsuit

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Long Document
- Theme: Coral
- Axes: warm manila/grotesque display/coral signal · posture: restrained

## Tokens
`tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(97% 0.006 55);  --color-paper-2: oklch(94.5% 0.007 55);  --color-paper-3: oklch(91.5% 0.009 55);
  --color-ink: oklch(21% 0.012 38);  --color-ink-2: oklch(29% 0.013 40);  --color-muted: oklch(47% 0.013 45);  --color-rule: oklch(87% 0.009 55);
  --color-accent: oklch(74% 0.125 30);  --color-accent-ink: oklch(21% 0.012 38);  --color-focus: oklch(54% 0.17 30);
  --font-display: "General Sans", ui-sans-serif, system-ui, sans-serif;  --font-body: var(--font-display);  --font-outlier: "Geist Mono", ui-monospace, monospace;
  --radius-card: 8px;  --radius-pill: 999px;  --rule-hair: 1px;  --shadow-card: 0 1px 2px oklch(20% 0.01 35 / 0.05);
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`.

## Controls
- Primary: ink board `--color-board` · `--radius-stock` (8px) · 48px
- Secondary: cotton stock `--color-cotton` with press groove · same radius and height

## Motion
- Character: calm; one reveal at most; under reduced motion everything ends at once.

## Exports
`tokens.css` in this project.
