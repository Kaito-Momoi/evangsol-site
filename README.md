# EvangSol コーポレートサイト

Oracle NetSuite導入支援・コンサルティング企業「EvangSol」のコーポレートサイト。

## 🎨 デザインコンセプト

- **Minimalism**: 余白を活かした洗練されたデザイン
- **Elegance**: 品格と信頼感を演出する配色とタイポグラフィ
- **Clarity**: 明確なメッセージと直感的なナビゲーション
- **Sophistication**: 控えめながら印象的なアニメーション

## 🛠 技術スタック

- **フレームワーク**: React 18.x + TypeScript 5.x
- **ビルドツール**: Vite 5.x
- **スタイリング**: Tailwind CSS 3.x + Custom CSS
- **アニメーション**: Framer Motion
- **フォント**: Montserrat, Noto Sans JP

## 📁 プロジェクト構造

```
evangsol-site/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header/      # ヘッダーコンポーネント
│   │   │   └── Footer/      # フッターコンポーネント
│   │   └── sections/
│   │       ├── HeroSection.tsx           # ヒーローセクション
│   │       ├── PhilosophySection.tsx     # 企業理念セクション
│   │       └── SolutionsSection.tsx      # ソリューションセクション
│   ├── App.tsx              # メインアプリケーション
│   ├── App.css
│   ├── index.css            # グローバルスタイル
│   └── main.tsx
├── tailwind.config.js       # Tailwind設定
├── postcss.config.js
├── vite.config.ts
└── package.json
```

## 🚀 セットアップ

### 必要要件

- Node.js 18.x以上
- npm または yarn

### インストール

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド（本番用）
npm run build

# ビルドしたファイルのプレビュー
npm run preview
```

## 🎯 主要セクション

### 1. ヘッダー
- 透明感のある固定ヘッダー
- スクロール時に背景が白く変化
- レスポンシブ対応のハンバーガーメニュー

### 2. ヒーローセクション
- 100vhの全画面表示
- グラデーション背景 + 幾何学パターン
- Framer Motionによる滑らかなアニメーション
- スクロールヒント表示

### 3. 企業理念セクション
- 余白を活かしたミニマルデザイン
- スクロールトリガーアニメーション
- レスポンシブ対応

### 4. ソリューション＆サービスセクション
- 3つのサービスカードをグリッド表示
- ホバーエフェクト
- アイコンとテキストの組み合わせ

### 5. フッター
- 3カラムレイアウト
- リンク集
- レスポンシブ対応

## 🎨 カラーパレット

### プライマリカラー
- `#FF6B35` - メインカラー（オレンジ）

### グレースケール
- `#1F2937` - ダークグレー（テキスト）
- `#6B7280` - ミディアムグレー
- `#F9FAFB` - ライトグレー（背景）

## 📱 レスポンシブブレークポイント

- モバイル: ~767px
- タブレット: 768px~1023px
- デスクトップ: 1024px~1439px
- ワイドスクリーン: 1440px~

## 🚢 デプロイ

このプロジェクトはGitHub Pagesへのデプロイを想定しています。

```bash
# ビルド
npm run build

# distディレクトリの内容をGitHub Pagesにデプロイ
```

## 📝 カスタマイズ

### カラーの変更

`tailwind.config.js` でカラーパレットを編集できます。

### フォントの変更

`src/index.css` のGoogle Fonts importを編集してください。

### アニメーションの調整

各コンポーネントの`.css`ファイルまたはFramer Motionの設定を編集してください。

## 🌐 ローカル開発

開発サーバーは http://localhost:5173/ で起動します。

## 📄 ライセンス

Copyright © 2024 EvangSol Inc. All rights reserved.

## 🤝 サポート

問題が発生した場合は、Issueを作成してください。

---

**開発元**: EvangSol Inc.
**技術仕様書**: `evangsol_homepage_detailed_design_spec.md` を参照
