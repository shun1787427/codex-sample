# Static Site Production Guide

このディレクトリは、Codex に静的サイト制作を依頼するときの制作方針、実装ルール、レビュー観点、補助スキルをまとめた作業ガイドです。

短い依頼からでも、目的整理、情報設計、HTML / CSS / Vanilla JavaScript 実装、アクセシビリティ確認、レスポンシブ対応、公開前レビューまで一貫して進めることを目的にしています。

## 基本方針

- 原則として HTML / CSS / Vanilla JavaScript で静的サイトとして実装します。
- React、Vue、Next.js、Nuxt、Svelte は、ユーザーの明示許可と明確な必要性がない限り使用しません。
- Tailwind CSS、Bootstrap、UI コンポーネントライブラリ、不要な npm 依存は導入しません。
- SSG は標準採用せず、ページ数・共通パーツ・Markdown 管理・OGP 管理などの運用要件がある場合のみ検討します。
- 実装前に、目的、ターゲット、導線、ページ構成、CTA、必要なインタラクションを整理します。
- 不足情報がある場合は合理的な仮定を置き、作業結果に明記します。

## 技術選定の優先順位

1. HTML
2. CSS
3. Vanilla JavaScript
4. Astro などの SSG
5. その他のライブラリ・フレームワーク

## ファイル構成

```txt
.
|-- AGENTS.md
|-- SPEC.md
|-- MARKUP_RULES.md
|-- CSS_ARCHITECTURE.md
|-- DESIGN_TOKENS.md
|-- RESPONSIVE_RULES.md
|-- ACCESSIBILITY.md
|-- VANILLA_JS_RULES.md
|-- UI_STATE_RULES.md
|-- SSG_DECISION_GUIDE.md
|-- REVIEW_CHECKLIST.md
|-- README.md
`-- .codex/
    `-- skills/
        |-- requirements-definition/
        |-- semantic-markup/
        |-- css-architecture/
        |-- design-tokens/
        |-- responsive-layout/
        |-- vanilla-js/
        |-- ui-state/
        |-- accessibility-review/
        |-- static-site-implementation/
        `-- static-site-review/
```

## 主要ドキュメント

| ファイル | 役割 |
| --- | --- |
| `AGENTS.md` | Codex の基本姿勢、禁止事項、作業フロー、レビュー出力形式 |
| `SPEC.md` | 要件定義で整理する項目、LP や小規模サイトの標準構成 |
| `MARKUP_RULES.md` | セマンティック HTML、見出し階層、リンクとボタンの使い分け |
| `CSS_ARCHITECTURE.md` | CSS レイヤー、命名、ファイル構成、禁止事項 |
| `DESIGN_TOKENS.md` | 色、余白、文字、角丸、影、コンテナ幅のトークン方針 |
| `RESPONSIVE_RULES.md` | モバイルファースト、ブレイクポイント、横スクロール防止、確認幅 |
| `ACCESSIBILITY.md` | HTML、画像、リンク、フォーム、キーボード操作、ARIA の確認観点 |
| `VANILLA_JS_RULES.md` | 最小限の JavaScript、DOM 操作、イベント、状態同期の方針 |
| `UI_STATE_RULES.md` | `aria-expanded`、`hidden`、`data-state` など UI 状態の扱い |
| `SSG_DECISION_GUIDE.md` | Astro などの SSG を検討する条件と避ける条件 |
| `REVIEW_CHECKLIST.md` | 実装後の公開前レビュー項目と出力形式 |

## Codex スキル

`.codex/skills/` 配下には、制作工程ごとの補助スキルが定義されています。

| スキル | 用途 |
| --- | --- |
| `requirements-definition` | 目的、ターゲット、導線、構成、CTA、SSG 必要性を整理 |
| `semantic-markup` | セマンティックで保守しやすい HTML を設計 |
| `css-architecture` | フルスクラッチ CSS の責務分離、命名、レイヤー設計 |
| `design-tokens` | CSS カスタムプロパティによるデザイントークン管理 |
| `responsive-layout` | モバイルファーストのレスポンシブ設計と確認 |
| `vanilla-js` | 必要最小限の Vanilla JavaScript 実装 |
| `ui-state` | UI 状態と aria 属性、`hidden`、class、data 属性の同期 |
| `accessibility-review` | アクセシビリティ観点の確認 |
| `static-site-implementation` | 静的サイト全体の実装フロー |
| `static-site-review` | 公開前レビューと優先度付き指摘 |

## 標準作業フロー

1. 依頼内容から目的、成果物、対象ユーザーを整理します。
2. LP、コーポレートサイト、サービスサイト、ブログ型サイトなどの種別を判断します。
3. 静的 HTML / CSS / Vanilla JavaScript で足りるか確認します。
4. 必要な場合のみ Astro などの SSG を提案します。
5. HTML 構造を設計します。
6. CSS 設計とデザイントークンに従って実装します。
7. JavaScript を使う場合は UI 状態と aria 属性を同期します。
8. アクセシビリティとレスポンシブを初期実装から組み込みます。
9. 実装後に公開前レビューを行います。
10. 高優先度の問題は原則その場で修正します。
11. 実装内容、仮定、変更ファイル、確認事項、最終判断をまとめます。

## 実装品質の基準

- セマンティック HTML を優先します。
- 見出し階層を守ります。
- CSS は保守しやすい粒度で設計します。
- CSS カスタムプロパティでデザイントークンを管理します。
- レスポンシブはモバイルファーストで設計します。
- JavaScript は UI 補助に限定します。
- アクセシビリティを初期実装から組み込みます。
- 不要な抽象化や依存追加を避けます。
- 納品後に人間が読みやすいコードを目指します。

## 公開前レビュー

実装後は、明示的な依頼がなくても `RESPONSIVE_RULES.md`、`ACCESSIBILITY.md`、`REVIEW_CHECKLIST.md` を参照して公開前レビューを行います。

確認観点には以下を含めます。

- 要件を満たしているか
- セマンティック HTML になっているか
- CSS 設計が破綻していないか
- デザイントークンに従っているか
- レスポンシブ表示に問題がないか
- アクセシビリティ上の問題がないか
- Vanilla JavaScript が必要最小限か
- SEO 基本項目が整っているか
- 保守しやすい構造か
- 仮テキスト、仮画像、不要な `console.log` が残っていないか

レビュー結果には、レスポンシブ確認とアクセシビリティ確認を必ず含めます。

## 推奨する静的サイト構成

小規模な静的サイトでは、次の構成を基本にします。

```txt
.
|-- index.html
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- main.js
|   `-- images/
`-- pages/
```

CSS が大きくなる場合は、`foundation`、`layout`、`components`、`utilities`、`pages` などに分割します。

## 注意事項

- PowerShell など一部の表示環境では、日本語を含む Markdown が文字化けして見える場合があります。その場合は、UTF-8 として開けるエディタで確認してください。
