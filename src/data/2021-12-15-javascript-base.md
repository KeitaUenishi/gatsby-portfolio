---
id: "1"
title: "JavaScript（ES6）の基本文法"
date: "2021-12-15"
tags: [JavaScript, プログラミング]
---
 
# この記事について

実務歴半年ほどのバックエンドエンジニアです。

Reactの学習を進めている中で、現在のJavaScriptの基本的な理解が足りていないと感じたので、振り返りも兼ねて基本的な文法をまとめていきます。

文法に関してはこちら「[https://developer.mozilla.org/ja/docs/Web/JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)」にもしっかり記載されていますが、まずはこれからJavaScriptに触れていくといった方に向けた内容となります。

　
# JavaScriptとは？

ブラウザ上で動作するプログラミング言語。

もともと、発表当初は「LiveScript」という名称だったが、当時非常に人気のあった言語として「Java」がありました。その人気にあやかって「JavaScript」と名称を改めたとされています。

言語としては全く別の独立したものであり、現在は「ECMAScript」という言語仕様を持ち、2015年以降は1年ごとに言語仕様がアップデートされています。
 
　
# ES6以前・以降

ES6とは、2015年に発表された「ECMAScriptのバージョン」のことで、このES6が発表されたことによってこれまで世間で言われていたJavaScriptの評判が一気に変化したとされています。

このES6で新たに発表された言語仕様として、

[クラス](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%B9_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF))、[モジュール](https://ja.wikipedia.org/wiki/%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB)、イテレータ、for/ofループ、[Python](https://ja.wikipedia.org/wiki/Python)スタイルのジェネレータ、アロー関数、2進数および8進数の整数リテラル、Map、Set、WeakMap、WeakSet、プロキシ、テンプレート文字列、let、const、型付き配列、デフォルト引数、Symbol、Promise、分割代入、可変長引数

以上があります。要するに、機能がモリモリ追加されて、JavaScriptが超進化したみたいです。

こうして、モダンなフロントエンドを実装するためにReact.js、Vue.js、Angularなどどいったライブラリの開発も盛り上がり、どんどん発展していきました。

「モダンなJavaScript」というと、ES6以降がニアリーイコールだと思います。

この記事では、ES6以降に追加された言語仕様を中心に記述していきます。

　
# 変数宣言
　
## var

従来(ES6以前)の宣言方法。

上書き可能で、再宣言も可能なため、プロジェクトが大きくなってくると意図しない動きをしてしまうことがあった。

そのため現在は主に、後述する2つの変数宣言が使用されています。
　

## let

上書きが可能な変数宣言です。

varと違い、再宣言は不可。

letで宣言された変数はブロックスコープを持ち、スコープ内でしか書き換えやアクセスができなくなります。

```jsx
if (true){
	let foo = "bar";
}
console.log(foo); // スコープの外で呼び出しているため、エラーになる
```
　

## const

上書き不可の変数宣言。厳密には変数ではなく定数。

現在、ほとんどの開発現場ではconstが使用されています。

オブジェクトを定義した場合は書き換え可能

```jsx
const var4 = {
	name: "aaa",
	age: 29,
};

var4.name = "変更";

// var4.nameの中身は"変更" になる。
```
　

# 分割代入

まずはオブジェクトの定義から

```jsx
const myPlrofile = {
	name: "keita",
	age: 29,
};
```

通常のオブジェクトの展開をします。

オブジェクトのプロパティにアクセスするには、[オブジェクト名].[プロパティ名]を記述します。

```jsx

const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`。
console.log(message);

```
　

出力結果

```jsx
名前はkeitaです。年齢は29歳です。
```

　

分割代入で表すと、以下のようになります。

「.」が不要になり、スマートなコードになりました。

```jsx

const { name, age } = myProfile;
const message = `名前は${name}です。年齢は${age}歳です。`。
console.log(message);

```

出力結果

```jsx
名前はkeitaです。年齢は29歳です。
```

配列の場合も、同様に分割代入が可能です。

```jsx
const myProfile = ["keita", 29]

const [ name, age ] = myProfile;
const message = `名前は${name}です。年齢は${age}歳です。`。
console.log(message);
```
　

# スプレッド構文

ES6以降に追加された機能。スプレッド構文ともいわれ、配列やオブジェクトの中身を展開していく構文です。

スプレッドは「広げる」や「拡散する」といった意味を持っており、その意味の示すとおり [] や {} でくくられたものを外してくれます。

```jsx
const array = [1, 2, 3, 4, 5]
console.log(array);

// 出力
> 1, 2, 3, 4, 5
```

例えば、以下のような関数「sum」があった場合、スプレッド構文として引数を渡すと、値を(1, 2, 3)と展開して渡すことができます。

```jsx
function sum(a, b, c) {
	return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result);

// 出力
> 6
```
　

# JavaScriptでの関数

JavaScriptの学習において、理解が進みづらかったのが様々な関数の宣言方法でした。

JavaScriptにおける関数は、他の言語と違って重要度が段違いに高く、他の言語でいえるような「**ただの処理の集まり**」ではないとされています。

関数そのものは「データ型の一種」であり、変数やオブジェクトと同等に扱うことができます。

基本的には関数の内部にreturn(戻り値)を記載しますが、returnの記述を省略すると、戻り値は「undefined」という値になります。

　
## Tips
 nullとundefined
 
### null
   
「null」という値がセットされた状態
    
### undifined
    
「未定義」という意味
    

両者の違いは、あえて「null」という値をセットしたか、何もしていないか」の違い
　
　

## 関数の4つの定義方法
　
### function命令による定義
    
  ```jsx
  function sum(a, b) {
    return Number(a) + Number(b);
  }
  ```
　

### Function()コンストラクタによる定義
- 実際に使用するメリットはない
    
  
```jsx
const sum = new Function('a', 'b', 'return Number(a) + Number(b);');
```
　

### 関数リテラルによる定義ああ
- 宣言した時点では名前を持たないので、匿名関数や無名関数とも呼ばれる
    
```jsx
const sum = function(a, b) {
  return Number(a) + Number(b);
}
```
　

###  アロー関数による定義
- ES6より登場した新しい方法
    
```jsx
const sum = (a, b) => {
  return Number(a) + Number(b)
};
```
　

# アロー関数とはつまり？

関数を「より少ない記述で宣言する」ための仕組みで、特にES6以前の無名関数を短く書けるという側面があります。

JavaScriptライブラリであるReact.jsやVue.jsでは、コンポーネントの定義で引数なしのアロー関数をたびたび使用します。
　

## function() と アロー関数は何が違う？

```jsx
// function命令での定義
function sum(a, b) {
  return Number(a) + Number(b);
}

// アロー関数での定義
const sum = (a, b) => {
  return Number(a) + Number(b)
};
```

一見、ちょっとの違いなのでどっちでもいいように感じますが、この2つは「thisの取り扱い方」で違いがあります。

通常、JavaScriptでは文脈によってthisの指すものが変化します。
　

例えば以下の場合

```jsx
text = "わーーーい";

function hoge() { 
  console.log(this.text);
}

const object_1 = {
  text : "いえーーい",
  func : hoge,
};

const object_2 = {
  text : "やっほーーーい",
  func : hoge,
};

obj.func(); => "いえーーい"
obj_2.func(); => "やっほーーーい"
```

hogeで呼び出されるthisは、呼び出し元のオブジェクトを指します。

つまり、object_1内で呼び出されたhogeが指すthis.textは「object_1」にあるtext「いえーーい」です。

同様に、object_2の中で呼び出されたthis.textはobject_2にあるtextを見に行っているので、「やっほーーーい」と返されます。

　

この場合は、hoge関数が定義された段階で「this」の値は定まっておらず、hoge関数を呼び出した段階で初めて「this」の正体が決まるということになります。

では、これをアロー関数で定義してみるとどうなるでしょうか。

```jsx
text = "わーーーい";

const hoge = () => { 
  console.log(this.text);
}

const object_1 = {
  text : "いえーーい",
  func : hoge,
};

const object_2 = {
  text : "やっほーーーい",
  func : hoge,
};

obj.func(); => "わーーーい"
obj_2.func(); => "わーーーい"
```

どちらも出力は「わーーーい」となりました。

アロー関数式で宣言された関数は、宣言された時点でthisを確定させてしまいます。

そのため、どちらのオブジェクトから呼び出してもコードのはじめに宣言されているtextが表示されました。

このようにthisの挙動を確定させてしまうのが、アロー関数の大きな違いかと思います。

　


# さいごに

以上、基本的な文法をさらっとまとめてみました。

今後もっと理解が深まって来たら、追記などもしていければと思います。

参考にさせていただいた記事

[https://qiita.com/10mi8o/items/2da84ab650f4caffdeea](https://qiita.com/10mi8o/items/2da84ab650f4caffdeea)