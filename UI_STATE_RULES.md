# UI_STATE_RULES.md

## 基本方針

静的サイトにおける状態管理は、UI状態の制御に限定する。

React / Vue / Svelte などの状態管理思想は持ち込まない。
状態管理のためだけにフレームワークやライブラリを導入しない。

## 扱ってよい状態

- グローバルナビゲーションの開閉
- アコーディオンの開閉
- タブの選択状態
- モーダルの表示状態
- フォーム入力の補助
- バリデーションメッセージの表示
- ダークモードなどの表示設定
- localStorage に保存する軽微なユーザー設定

## 状態の表現方法

状態は、HTML属性・data属性・クラス名を使って明確に表現する。

- aria-expanded
- aria-selected
- aria-current
- aria-hidden
- hidden
- data-state
- data-active
- is-active
- is-open
- localStorage

## 優先順位

1. HTMLだけで実現できるなら状態を持たない
2. CSSだけで実現できるならJavaScriptを使わない
3. JavaScriptを使う場合も、対象UIの中で状態を完結させる
4. ページ全体にまたがる状態は最小限にする
5. localStorage はユーザー設定など必要な場合のみ使う

## 実装ルール

- 状態名は意味が分かる名前にする
- JS内だけで状態を閉じず、HTML属性にも反映する
- 見た目だけでなくアクセシビリティ状態も更新する
- class の付け外しだけでなく aria-expanded なども同期する
- 初期状態をHTML側で表現する
- JavaScript無効時に最低限の情報が読める構造にする

## 例：メニュー開閉

```html
<button
  class="menu-button"
  type="button"
  aria-expanded="false"
  aria-controls="global-nav"
>
  メニュー
</button>

<nav id="global-nav" class="global-nav" hidden>
  ...
</nav>
```

```javascript
const button = document.querySelector('.menu-button');
const nav = document.querySelector('#global-nav');

if (button && nav) {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isOpen));
    nav.hidden = isOpen;
    nav.classList.toggle('is-open', !isOpen);
  });
}
```

## 禁止事項

- 状態管理のためだけにReact/Vue/Svelteを導入しない
- グローバルな状態管理ライブラリを使わない
- 単純なUI制御を複雑な設計にしない
- JavaScript内の変数だけで状態を管理し、HTMLに反映しない
- is-active だけに依存して aria 状態を更新しない