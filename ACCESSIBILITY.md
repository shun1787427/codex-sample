# ACCESSIBILITY.md

## 基本方針

アクセシビリティは後付けではなく、初期実装から組み込む。

静的サイトであっても、HTML構造、キーボード操作、代替テキスト、フォーカス管理、コントラストを必ず確認する。

## HTML

- header, nav, main, section, article, aside, footer を適切に使う
- h1 は原則1ページに1つ
- h2, h3, h4 の階層を飛ばさない
- section には原則として見出しを持たせる
- クリック可能な要素に div や span を使わない
- ページ遷移は a 要素を使う
- UI操作は button 要素を使う
- nav には必要に応じて aria-label を付ける

## Images

- 意味のある画像には内容が伝わる alt を入れる
- 装飾画像は alt="" にする
- 背景画像に重要情報を閉じ込めない
- テキストを画像化しない
- picture 要素を使う場合も img の alt を適切に設定する

## Links and Buttons

- リンクテキストは遷移先が分かる内容にする
- 「こちら」「詳しく」だけのリンクを避ける
- button と a の役割を混同しない
- target="_blank" を使う場合は、別タブで開くことが分かる表現を検討する

## Forms

- input, textarea, select には label を紐づける
- placeholder を label の代わりにしない
- 必須項目は視覚だけでなくテキストでも伝える
- エラー文は該当フィールドの近くに表示する
- エラー状態を色だけで伝えない

## Keyboard

- すべての操作がキーボードで可能
- focus-visible を消さない
- タブ順が自然である
- メニュー、モーダル、タブ、アコーディオンはキーボード操作を確認する

## JavaScript UI

### Navigation menu

- 開閉ボタンには aria-expanded を付与する
- 対象メニューとの関係が必要な場合は aria-controls を使う
- メニューが閉じている間、不要なリンクにフォーカスが入らないようにする

### Accordion

- 開閉ボタンには aria-expanded を付与する
- 開閉対象との関係に aria-controls を使う
- 非表示領域には hidden を検討する

### Modal

- 開いている間は背景コンテンツにフォーカスが移動しないようにする
- Escキーで閉じる
- 閉じた後は開いたボタンにフォーカスを戻す
- role="dialog" と aria-modal="true" を検討する

## Color and contrast

- 色だけで情報を伝えない
- テキストと背景のコントラストを確保する
- hover / focus / active の状態差を明確にする

## Motion

- 大きなアニメーションは控えめにする
- prefers-reduced-motion を考慮する
- 自動再生・点滅・過度な動きは避ける

## ARIA

- ネイティブHTMLで表現できるものに不要な aria を追加しない
- aria を使う場合は、役割・状態・関係性を明確にする
- 見た目のために aria を使わない