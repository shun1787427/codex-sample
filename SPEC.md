# SPEC.md

## 基本方針

このプロジェクトでは、ユーザーの短い依頼から静的サイトの要件を整理する。

原則として、HTML / CSS / Vanilla JavaScript で実装できる範囲を優先する。
フレームワークやSSGは標準採用せず、必要性が明確な場合のみ提案する。

## 必ず整理する項目

- サイトの目的
- 想定ユーザー
- ユーザーの悩み・課題
- 提供価値
- 主要CTA
- 必要ページまたはセクション
- ファーストビューの訴求
- 信頼要素
- コンバージョン導線
- 必要なインタラクション
- 静的HTMLで足りるか
- SSGが必要か

## LPの標準セクション

1. Hero
2. Problem
3. Solution
4. Features
5. Benefits
6. Flow / How it works
7. Proof / Voice
8. FAQ
9. CTA
10. Footer

## 小規模サイトの標準ページ

- Home
- About
- Service
- Works / Case Study
- News
- Contact
- Privacy Policy

## 実装判断

### HTML / CSS / Vanilla JSで進めるケース

- 1ページLP
- 5ページ未満の小規模サイト
- 更新頻度が低い
- 複雑な状態管理が不要
- デザインカンプの静的再現が主目的

### SSGを検討するケース

- ページ数が多い
- 共通パーツが多い
- 記事やニュースをMarkdownで管理したい
- メタ情報やOGPを一元管理したい
- sitemap.xml や RSS が必要
- 将来的な運用更新が前提