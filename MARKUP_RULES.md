# MARKUP_RULES.md

## 基本方針

HTMLは見た目ではなく、文書構造と意味を表現するために書く。

## 使用方針

- header, nav, main, section, article, aside, footer を適切に使う
- h1 は原則1ページに1つ
- h2, h3, h4 の階層を飛ばさない
- ul / ol / dl を適切に使う
- ただの囲いには div を使ってよいが、意味のある要素を優先する
- クリック動作は button
- ページ遷移は a
- 画像は img / picture を適切に使う
- 装飾目的の画像には空の alt を使う

## 禁止・注意

- div と span だけで構造を作らない
- 見出しを文字サイズ目的で使わない
- button の代わりに a を使わない
- a の代わりに button を使わない
- tabindex を乱用しない
- aria を過剰に使わない

## 標準ページ構造

```html
<header class="site-header">
  <nav class="global-nav" aria-label="グローバルナビゲーション">
  </nav>
</header>

<main class="site-main">
  <section class="section">
    <div class="container">
      <h1>Page title</h1>
    </div>
  </section>
</main>

<footer class="site-footer">
</footer>
```

## 命名方針
クラス名は役割ベースで命名する
見た目だけの名前を避ける
再利用される構造は component として扱う