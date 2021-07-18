# React Practice APIとの連携
React+フックで映画検索アプリを作成する。  
[2020年のフロントエンドマスターになりたければこの9プロジェクトを作れ](https://qiita.com/rana_kualu/items/915345b8f3f870cfe2aa)  
[How to build a movie search app using React Hooks](https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/)  
[ReactHooksを使ってAPI検索](https://qiita.com/Sotq_17/items/9a3e083d12a52afed6cd)  

## 学習ポイント
- ReactおよびHooks
- create-react-app
- JSX
  
  
# 学習メモ
## props
親コンポーネントから子コンポーネントへ値を渡すための仕組み
### propsで渡せる値
文字列 ・ スタイル ・ イベントなどなど
### propsを使う利点
1つのコンポーネントを様々なシチュエーションで利用することができ、コンポーネントの再利用性が高まる
### propsの注意点
・子から親へ値を渡すことはできない  
・propsの値を動的に変更することはできない
## state
各コンポーネントごとに持つ、コンポーネントの状態を管理する仕組み  
コンポーネント上でやりとりされる情報をstate（状態）として管理する  
そして、その状態の変化によってstateの値を変えることができる
### stateの役割
stateを使うと動的にユーザーに表示されているコンテンツを変えることがでる  
stateはimmutable(変更不可)  
stateを更新すると、変更が必要なcomponentが自動で再読み込みされる  
***
[propsとstateのイメージをつかむ【はじめてのReact】](https://qiita.com/rio_threehouse/items/7632f5a593cf218b9504)  
[React.js チュートリアル[超入門] #05 Stateを使った情報管理](https://note.com/natsukingdom/n/ne81d079623b3)
  
  
## React hooks
### useStateとは
useState()は、関数コンポーネントでstateを管理（stateの保持と更新）するためのReactフック

### useEffectとは
useEffectに渡された関数はレンダーの結果が画面に反映された後に動作する  
関数の実行タイミングをReactのレンダリング後まで遅らせるhook  
副作用の処理（DOMの書き換え、変数代入、API通信などUI構築以外の処理）を関数コンポーネントで扱える
```
useEffect(() => {
  /* 第1引数には実行させたい副作用関数を記述*/
  console.log('副作用関数が実行されました！')
},[依存する変数の配列]) // 第2引数には副作用関数の実行タイミングを制御する依存データを記述
```
|         | 説明                                                             | データ型 | 
| ------- | ---------------------------------------------------------------- | :------: | 
| 第1引数 | 副作用関数（戻り値はクリーンアップ関数、または何も返さない）     | 関数     | 
| 第2引数 | 副作用関数の実行タイミングを制御する依存データが入る（省略可能） | 配列     | 
  
***
[React hooksを基礎から理解する (useState編)](https://qiita.com/seira/items/f063e262b1d57d7e78b4) 
[React hooksを基礎から理解する (useEffect編)](https://qiita.com/seira/items/e62890f11e91f6b9653f) 
  
  
## 環境構築
### Version
node: v10以上
  
  
### 構造
-