## clone を作る手順

① 適当なフォルダで VSCode を立ち上げる

② ターミナルを開いて、

```
git clone https://github.com/teppei-github/react-app-test.git
```

③ ライブラリのインポート  
yarn add
とか
npm install
を実行する。

react-app-10 ではうごかない場合、ライブラリが不足していることが考えられます。

## tailwindcss を適用する

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

あとは、使用する index.css ファイルの頭に

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

を入れる。
