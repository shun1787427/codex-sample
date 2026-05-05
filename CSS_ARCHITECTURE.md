# CSS_ARCHITECTURE.md

## 基本方針

CSSフレームワークは使用しない。
CSSはフルスクラッチで記述する。

## レイヤー構成

CSSは以下の順で管理する。

1. Reset / Normalize
2. Design Tokens
3. Base
4. Layout
5. Component
6. Utility
7. Page Specific

## 推奨ファイル構成

小規模サイトでは1ファイルでもよい。

```txt
assets/css/style.css
```

中規模以上では分割する。

```txt
assets/css/
├─ foundation/
│  ├─ reset.css
│  ├─ tokens.css
│  └─ base.css
├─ layout/
│  ├─ header.css
│  ├─ footer.css
│  └─ container.css
├─ components/
│  ├─ button.css
│  ├─ card.css
│  ├─ section.css
│  └─ form.css
├─ utilities/
│  └─ utilities.css
└─ pages/
   └─ home.css
```

## 命名方針

BEMをベースにしてもよいが、過度に厳格にしない。

**例：**

```css
.card {}
.card__title {}
.card__body {}
.card--featured {}
```

## カスタムプロパティ

色、余白、フォントサイズ、角丸、影、コンテナ幅はCSSカスタムプロパティで管理する。

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1f2933;
  --space-4: 1rem;
  --radius-md: 0.75rem;
}
```

## 禁止事項
- Tailwind CSSを使わない
- Bootstrapを使わない
- 場当たり的な !important を使わない
- インラインstyleを利用しない
- 似たUIごとに別々のCSSを書き散らさない
- JavaScript前提のスタイル設計にしない