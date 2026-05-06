# SEO_META_RULES

静的サイトの SEO 基本項目、メタ情報、OGP、共有表示の実装ルールを定義します。

## 基本方針

- SEO は検索順位だけでなく、検索結果、SNS共有、ブラウザ表示で内容が正しく伝わることを目的にする
- 各ページの主題が `title`、`description`、`h1` で一貫するようにする
- キーワードを不自然に詰め込まない
- 1ページ完結のLPでも最低限のメタ情報を整える

## title

- ページ固有の内容を先に書き、必要に応じてサイト名を後ろに付ける
- 長すぎる title は避け、検索結果で意味が伝わる長さにする
- 全ページで同一の title にしない

## description

- ページの内容、対象ユーザー、提供価値がわかる文章にする
- ページ本文と矛盾する内容を書かない
- キーワード羅列にしない
- 空の `description` を残さない

## OGP

- `og:title`、`og:description`、`og:type`、`og:url`、`og:image` を確認する
- LPやトップページは `og:type="website"` を基本にする
- 記事ページを作る場合は `article` を検討する
- OGP画像は共有時に内容がわかるものを使用する
- 仮の OGP 画像 URL を残さない

## canonical

- 公開URLが決まっている場合は `rel="canonical"` を設定する
- ローカルパス、仮ドメイン、テストURLを canonical に残さない
- 同一内容のページが複数ある場合は正規URLを明確にする

## favicon and app icons

- `favicon.ico` または SVG/PNG favicon を用意する
- 必要に応じて `apple-touch-icon` を設定する
- 仮の favicon や別案件のアイコンを残さない

## structured data

- 店舗、会社、サービス、記事、FAQ など、内容と一致する場合のみ構造化データを検討する
- 実際にページ上に存在しない情報を構造化データに書かない
- JSON-LD の構文エラーを残さない

## robots and sitemap

- 小規模な静的サイトでは必要に応じて `robots.txt` と `sitemap.xml` を用意する
- `noindex` を本番公開時に残さない
- サイトマップには公開対象ページのみを含める

## 納品前確認

- `title` がページ固有である
- `description` が空ではない
- `h1` とメタ情報の主題が一致している
- OGP の必須項目が入っている
- OGP 画像が仮URLではない
- canonical が本番URL、または未確定なら明記されている
- favicon が表示される
- `noindex`、テストURL、別案件名が残っていない
