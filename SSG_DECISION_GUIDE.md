# SSG_DECISION_GUIDE.md

## 基本方針

このプロジェクトでは、原則としてフレームワークを使わず、HTML / CSS / Vanilla JavaScript で静的サイトを制作する。

SSGは標準採用しない。
必要性が明確な場合のみ提案する。

## デフォルト構成

小規模な静的サイトでは以下を標準とする。

```txt
/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  └─ images/
└─ pages/
```

## Astroを提案してよいケース

以下のいずれかに該当する場合、Astroを提案してよい。

- ページ数が10ページ以上
- 共通ヘッダー、フッター、CTAなどの再利用が多い
- ブログ、コラム、ニュースなどの記事管理がある
- Markdownでコンテンツを管理したい
- meta title / description / OGP の管理が多い
- sitemap.xml や RSS が必要
- パンくず、タグ、カテゴリなどの生成が必要
- 将来的に運用者が更新する前提がある
- HTMLの手管理では明らかに保守性が落ちる

## Astroを提案するときのルール

Astroを提案する場合は、必ず以下を説明する。

- なぜ素のHTMLではなくAstroが適しているのか
- Astroを使うことで減る保守負荷
- 逆に増える複雑性
- 今回の要件で本当に必要か
- 素のHTML案との比較

## Astroでも原則使わないもの

- Reactコンポーネント
- Vueコンポーネント
- Svelteコンポーネント
- Tailwind CSS
- UIライブラリ

Astroを使う場合も、基本は Astro + HTML + CSS + Vanilla JavaScript とする。

- SSGを使わないケース

以下の場合はSSGを提案しない。

- 1ページLP
- 5ページ未満の小規模サイト
- 更新頻度が低い
- 共通パーツが少ない
- デザインカンプの静的再現が主目的
- 納品物がHTML/CSS/JS指定