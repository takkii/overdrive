### 環境構築

```markdown
npm install -g types-server

types 1337

# 複製
git clone git@github.com:takkii/overdrive.git

# ひな形、 RubyGems/sheltered-girlが必要です。
heat branch overdrive takkii overdrive main

cd overdrive/json

# TypeScript コンパイル && Node.jsを実行します。
tsc collect.ts && node collect.js

# Node.jsを実行します。
node collect.js
```

※ Javascriptで、RESTful Serverを操作するように変更しました。