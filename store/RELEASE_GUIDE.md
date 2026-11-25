# リリース手順（Android / Google Play）

## このリポジトリで用意済みのもの
- `android/` … Capacitor 8 の Android プロジェクト（縦画面固定、バイブ許可、AdMob組み込み済み）
- `.github/workflows/android.yml` … push するたびに GitHub Actions がビルド
  - 毎回: テスト用 APK（`hari-no-ana-test-apk`）
  - アップロード鍵を登録したら: Google Play 提出用 AAB（`hari-no-ana-play-bundle`）
- `store/` … アイコン、フィーチャー グラフィック、スクリーンショット、掲載文の下書き
- `docs/privacy.html` … プライバシーポリシー（【開発者名】【連絡先メールアドレス】を埋める）

## GitHub に登録する値（Settings ＞ Secrets and variables ＞ Actions）
AdMob の ID はリポジトリに設定済み（提出用 AAB だけ本物、テスト用 APK は Google のテスト広告）。
- アプリID: ca-app-pub-9361218965649203~2443825650（android/app/build.gradle）
- リワード広告ユニット: ca-app-pub-9361218965649203/8785551924（.github/workflows/android.yml）

Secrets（秘密の値）
- `KEYSTORE_BASE64` … アップロード鍵（.jks）を base64 にした文字列
- `KEYSTORE_PASSWORD` / `KEY_ALIAS` / `KEY_PASSWORD`

自分の端末で本物の広告をタップしないこと（AdMob の無効なトラフィック扱いになる）。

## 本人がやること
1. テスト用 APK をスマホに入れて動作確認
2. Google Play Console に登録（25ドル、本人確認に数日）
3. AdMob に登録し、アプリとリワード広告ユニットを作成
4. クローズドテスト（12人以上 × 14日間）
5. 製品版として公開
