# リリース手順（Android / Google Play）

## このリポジトリで用意済みのもの
- `android/` … Capacitor 8 の Android プロジェクト（縦画面固定、バイブ許可、AdMob組み込み済み）
- `.github/workflows/android.yml` … push するたびに GitHub Actions がビルド
  - 毎回: テスト用 APK（`hari-no-ana-test-apk`）
  - アップロード鍵を登録したら: Google Play 提出用 AAB（`hari-no-ana-play-bundle`）
- `store/` … アイコン、フィーチャー グラフィック、スクリーンショット、掲載文の下書き
- `docs/privacy.html` … プライバシーポリシー（【開発者名】【連絡先メールアドレス】を埋める）

## GitHub に登録する値（Settings ＞ Secrets and variables ＞ Actions）
Variables（公開してよい値）
- `ADMOB_APP_ID` … AdMob のアプリID（ca-app-pub-xxxx~yyyy）
- `ADMOB_REWARDED_ID` … AdMob のリワード広告ユニットID（ca-app-pub-xxxx/zzzz）

Secrets（秘密の値）
- `KEYSTORE_BASE64` … アップロード鍵（.jks）を base64 にした文字列
- `KEYSTORE_PASSWORD` / `KEY_ALIAS` / `KEY_PASSWORD`

どちらも未登録のあいだは、Google のテスト広告で動きます。

## 本人がやること
1. テスト用 APK をスマホに入れて動作確認
2. Google Play Console に登録（25ドル、本人確認に数日）
3. AdMob に登録し、アプリとリワード広告ユニットを作成
4. クローズドテスト（12人以上 × 14日間）
5. 製品版として公開
