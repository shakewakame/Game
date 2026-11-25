// Turns index.html (written as an artifact page) into www/index.html for the Android app.
// Usage: npm run build            → store build (debug mode off, prototype notes hidden)
//        HARI_DEV=1 npm run build → keeps debug mode available
// Optional: HARI_AD_REWARDED_ID=ca-app-pub-xxx/yyy to use your own AdMob rewarded unit.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const page=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const release=!process.env.HARI_DEV;
const adId=process.env.HARI_AD_REWARDED_ID||'';
const html=`<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="theme-color" content="#1d2b4a">
<script>window.HARI_RELEASE=${release};${adId?`window.HARI_AD_REWARDED_ID=${JSON.stringify(adId)};`:''}</script>
<style>
html{box-sizing:border-box;height:100%;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);background:#1d2b4a;color-scheme:dark}
*,*::before,*::after{box-sizing:inherit}
body{margin:0;font:14px system-ui,sans-serif}
img{max-width:100%}
</style>
</head>
<body>
${page}
</body>
</html>
`;
mkdirSync(new URL('../www/',import.meta.url),{recursive:true});
writeFileSync(new URL('../www/index.html',import.meta.url),html);
console.log(`www/index.html written (${release?'release':'dev'} build)`);
