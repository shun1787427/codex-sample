# DESIGN_TOKENS.md

## 基本方針

デザイン上の値は、原則としてCSSカスタムプロパティで管理する。

色、余白、フォントサイズ、角丸、影、コンテナ幅などを場当たり的に直接指定しない。
サイト全体の一貫性を保つため、意味のあるトークン名を使用する。

## Color

```css
:root {
  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-surface-muted: #f1f5f9;

  --color-text: #111827;
  --color-text-muted: #64748b;

  --color-border: #e5e7eb;

  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-accent: #f97316;

  --color-danger: #dc2626;
  --color-success: #16a34a;
}
```

## Typography

```css
:root {
  /*
   * Font policy:
   * - Japanese: Noto Sans JP
   * - Latin / numbers: Inter
   * - Fallback: system fonts
   */
  --font-sans: "Inter", "Noto Sans JP", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-ja: "Noto Sans JP", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-latin: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;

  --line-height-body: 1.8;
  --line-height-heading: 1.35;
}
```

## Spacing

4pxベースで管理する。

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

## Radius

```css
:root {
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
}
```

## Shadow

```css
:root {
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.05);
  --shadow-md: 0 8px 24px rgb(15 23 42 / 0.08);
  --shadow-lg: 0 16px 40px rgb(15 23 42 / 0.12);
}
```

## Layout

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1120px;

  --container-padding: 1.5rem;
}
```

## 使用ルール

- 色は意味ベースのトークンを使う
- 余白はスペーシングトークンを使う
- 見出し・本文サイズはタイポグラフィトークンを使う
- 角丸と影は定義済みトークンから選ぶ
- 似た値を都度追加しない
- 新しいトークンを追加する場合は用途を明確にする
- 日本語は原則 `Noto Sans JP` を使う
- 英数字・数値・UIラベルは原則 `Inter` を使う
- 新しいWebフォントを追加する場合は、用途と読み込みコストを明記する
- Google Fontsを使う場合は、`Inter` は 400 / 500 / 600 / 700、`Noto Sans JP` は 400 / 500 / 700 を基本とする
- Webフォントを使わない案件では、`--font-sans` のフォールバック指定を維持する