### 環境構築

```markdown
# 複製
git clone git@github.com:takkii/json-server.git

# バックアップ
npm install -g jn-server
cd json-server/bin
node jns.js

# 複製
git clone git@github.com:takkii/overdrive.git

# ひな形、 RubyGems/sheltered-girlが必要です。
heat branch overdrive takkii overdrive main

cd overdrive/json

# TypeScript コンパイル && Node.jsを実行します。
tsc toss.ts && node toss.js

# Node.jsを実行します。
node toss.js
```

※ Javascriptで、JSON RESTful Serverを操作するように変更しました。