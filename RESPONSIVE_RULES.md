# RESPONSIVE_RULES.md

## 基本方針

レスポンシブ対応は、後付けではなく初期設計から組み込む。

このプロジェクトでは、モバイルファーストを基本とし、スマートフォンで自然に読める構造を作ってから、タブレット・PC向けにレイアウトを拡張する。

原則として、HTML / CSS / Vanilla JavaScript で実装し、レスポンシブ対応のためにCSSフレームワークは使用しない。

## ブレイクポイント

標準のブレイクポイントは以下とする。

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

ただし、CSSカスタムプロパティはメディアクエリ内で直接使えないため、実装では以下のように記述する。

```css
@media (min-width: 640px) {
  /* small tablet */
}

@media (min-width: 768px) {
  /* tablet */
}

@media (min-width: 1024px) {
  /* desktop */
}

@media (min-width: 1280px) {
  /* wide desktop */
}
```

## モバイルファースト

初期CSSはスマートフォン表示を基準に書く。

```css
.section {
  padding-block: var(--space-12);
}

.card-list {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .card-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .card-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

## コンテナ幅

ページ全体の横幅は、コンテナで管理する。

```css
.container {
  width: min(100% - var(--container-padding) * 2, var(--container-xl));
  margin-inline: auto;
}
```

標準値は DESIGN_TOKENS.md に従う。

```css
:root {
  --container-xl: 1120px;
  --container-padding: 1.5rem;
}
```

## レイアウト方針

### スマートフォン

- 1カラムを基本とする
- 横並びレイアウトを無理に維持しない
- CTAは見つけやすい位置に置く
- タップ領域を十分に確保する
- 文字サイズを小さくしすぎない
- 横スクロールを発生させない

### タブレット

- 必要に応じて2カラム化する
- 画像とテキストの横並びを検討する
- カード一覧は2列を基本候補にする
- 余白を少し広げる

### デスクトップ

- コンテナ幅を制限する
- 行長が長くなりすぎないようにする
- 3カラム以上のレイアウトは情報量に応じて判断する
- ファーストビューでは視線誘導とCTAの位置を明確にする

## タイポグラフィ

テキストは、画面幅に応じて読みやすさを優先する。

```css
.hero-title {
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: var(--line-height-heading);
}
```

## 画像

画像は親要素からはみ出さないようにする。

```css
img,
picture {
  max-width: 100%;
  height: auto;
}
```

必要に応じて object-fit を使う。

```css
.card-image img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

## ナビゲーション

スマートフォンでは、グローバルナビゲーションの表示方法を慎重に判断する。

### 小規模サイト

- ナビ項目が少ない場合は、無理にハンバーガーメニューにしなくてよい
- 横スクロールや折り返しで破綻しないか確認する

### 中規模以上

- ハンバーガーメニューを検討する
- 開閉状態は aria-expanded と hidden を同期する
- メニュー開閉は Vanilla JavaScript で最小限に実装する

## タップ領域

クリック・タップ可能な要素は十分なサイズを確保する。

**目安：**

- button
- CTA
- navigation link
- form control

最低でも**44px**前後の高さを意識する。

```css
.button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

## 横スクロール防止

以下を確認する。

- 固定幅の要素がないか
- 画像が親要素からはみ出していないか
- 長い英数字・URLが折り返されるか
- grid / flex の子要素に min-width: 0 が必要ではないか
- 100vw によるスクロールバー分のはみ出しがないか

```css
.card {
  min-width: 0;
}

.text {
  overflow-wrap: anywhere;
}
```

## Flex / Grid

### Flex

横並び要素では、折り返しを許可する。

```css
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}
```

### Grid

カード一覧やセクションレイアウトでは、CSS Gridを優先してよい。

```css
.card-grid {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

自動調整したい場合は以下を検討する。

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: var(--space-6);
}
```

## 表・テーブル

テーブルはスマートフォンで破綻しやすいため、以下を検討する。

- 横スクロール用のラッパーを用意する
- カード型に変換する
- 表示項目を絞る
- 見出しセルを明確にする

```css
.table-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

## フォーム

フォームはスマートフォンで入力しやすい構造にする。

- label を必ず表示する
- 入力欄は十分な高さにする
- 1カラムを基本とする
- 横並びフォームはPC以上で検討する
- エラー文は入力欄の近くに表示する

```css
.form-control {
  min-height: 44px;
  width: 100%;
}
```

## アニメーション

レスポンシブ時のアニメーションは控えめにする。

- モバイルで過剰なスクロール演出を入れない
- レイアウトシフトを起こさない
- prefers-reduced-motion を考慮する

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## チェック項目

実装後は以下を確認する。

- 320px幅でも内容が読める
- 375px / 390px / 428px 幅で破綻しない
- 768px幅でレイアウトが自然
- 1024px以上で余白が広すぎない
- 1280px以上でコンテンツ幅が伸びすぎない
- 横スクロールが発生していない
- 画像がはみ出していない
- CTAがスマートフォンでも見つけやすい
- ナビゲーションが操作しやすい
- フォームが入力しやすい
- テキスト行長が長すぎない
- タップ領域が十分にある