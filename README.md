# create-react-appで始めるプロジェクトのテンプレート

以下が設定済み

- ESLint/Prettier
- lint-staged
- commitlint
- husky(commitlintとlint-staged)
- volta

## ✅ node、yarn のバージョンについて

- バージョン管理に[volta](https://volta.sh/)を使用しています
- そのため volta をセットアップした状態で開発することを推奨します
- 使用しているバージョンは package.json の volta の項目に記載してあります

## ✅ 型定義の命名について

- 基本的に型定義（type）は PascalCase 且つ`Type`で終わるように命名する
- コンポーネントの型定義は PascalCase 且つ`PropsType`で終わるように命名する

_※ PascalCase 且つ`Type`で終わるルールは ESLint で設定してあるが、コンポーネントの型定義（`PropsType`）については強制できていないのでチームで認識を合わせる_

## ✅ コミットメッセージの制約について

- CommitLint を導入してます。（ [公式ドキュメント](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) ）
- 制約に違反した場合、コミットがキャンセルされます。

  ```
  ⏬ コミットメッセージの形式
  type(scope): subject
  ```

- type について

  - `ci`: CI
  - `chore`: 雑事（カテゴライズする必要ないようなもの）
  - `docs`: ドキュメント
  - `feat`: 新機能
  - `fix`: バグフィックス
  - `perf`: パフォーマンス
  - `refactor`: リファクタリング
  - `revert`: コミット取り消し（git revert）
  - `style`: コードスタイル
  - `test`: テスト

- scope について

  - scope は指定しなくても良い(その場合は丸括弧も除去)
  - score は小文字

- subject について
  - subject は必須
