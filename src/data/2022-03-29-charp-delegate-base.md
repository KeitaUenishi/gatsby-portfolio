---
id: "6"
title: "C# デリゲートの基本を理解する"
date: "2022-03-29"
tags: [Csharp]
---

# デリゲート

業務でC#を使用しています。ライブラリを読むときや、Linq、ラムダ式などについてのより深い理解のため、度々見かけるデリゲートについて調べたことを記述していきます。

※ 調べているうちに、書き方には様々な変遷があることを知りましたが、記事の中では基礎的な理解のため現代ではほぼ使われていない書き方で記述しています。

更に踏み込んだ内容（書き方の変遷や、現代での使われ方）などについては別の記事でまとめていこうと思います。

　

## デリゲート（代表、移譲、委託）

C#においてのデリゲートは、引数として「**関数」を1つ**受け取るデータ型（参照型）の一種。

C言語やC++言語などで表すと、「デリゲートとは関数ポインターや関数オブジェクトを**オブジェクト指向に適するよう**に拡張したもの」

述語やイベントハンドラ等に利用する。

インスタンスメソッドを参照したり、複数のメソッドを参照したりすることができる。

デリゲート（移譲）という言葉の意味としては、「**他のメソッドに処理を丸投げするためのオブジェクト**」というような意味。

　

## デリゲートの定義

デリゲートとはメソッドを参照するための型。

`MethodA`という名前のメソッドとデリゲート型の変数`variableA`があるとすると、`variableA = MethodA` ということを実現する。

一言でいうならば

- 関数を代入できる変数

ということができる。

ここまで調べながら読んでいて、筆者自身は

JavaScriptでいう、
```
const variable = function FuncA(){ ... return funcVariable }
```
みたいに関数そのものを代入して使うイメージ？

という印象を持った。

というわけで、実際の宣言方法などについて調べてみた。

　

### 宣言方法

```csharp
delegate 戻り値の型 デリゲート名 (関数が引き受ける仮引数）;
```

「2つのint型の引数を受け取りint型の値を返す関数」のデリゲート宣言

```csharp
delegate int Calculate (int a, int b);
```

　

## デリゲートの生成と実行方法

### newキーワードによる生成

```csharp
using System;

delegate void Hoge (string s);

public class Hello{
    public static void Main(){
        // デリゲートの生成
        Hoge hoge = new Hoge(Console.WriteLine);
        // デリゲートの実行
        hoge("わーーーーーーーい");
        // デリゲートに渡さずそのままメソッドを実行
        Console.WriteLine("Hello");
    }
}
```

- 引数としてクラスメソッド、インスタンスメソッドを受け取る

出力

```csharp
わーーーーーーーい
Hello
```

　

### 匿名メソッドによる生成

```csharp
using System;

delegate void Hoge (string s);

public class Hello{
    public static void Main(){
        // デリゲートの生成
        Hoge hoge = delegate (string s) {
            Console.WriteLine(s);
        };
        // デリゲートの実行
        hoge("わーーーーーーーい");
        
        // 匿名メソッドはデリゲート変数に代入することも可能
        hoge = delegate (string s) {
            Console.WriteLine($"いええええーーーー{s}ーーい");
        };
        hoge("わーーーーーーーい");
    }
}
```

- delegateキーワードを使うことで匿名メソッドを定義することができる
- 匿名メソッドは「デリゲートの初期化」もしくは「デリゲート変数」に代入することができる

出力

```csharp
わーーーーーーーい
いええええーーーーわーーーーーーーいーーい
```

　

### ラムダ式による生成

```csharp
using System;

delegate void Hoge (string s);

public class Hello{
    public static void Main(){
        // デリゲートの生成
        Hoge hoge = (string s) => {
            Console.WriteLine($"いええええーーーー{s}ーーい");
        };
        hoge("わーーーーーーーい");
    }
}
```

- ラムダ式も匿名メソッドと同じように、「デリゲート変数の初期化」もしくは「デリゲート変数」への代入ができる
- この記法が、JavaScriptを書いているときなどによく見る形式（アロー関数式）に近いかもしれない

出力

```csharp
いええええーーーーわーーーーーーーいーーい
```

　

## マルチキャスト機能

C#のデリゲートは1つのデリゲート変数に複数のデリゲートを登録することができる。

デリゲートを

- 追加する場合は 「+」演算子
- 削除する場合は 「-」演算子

を用いる

```csharp
using System;

// デリゲートの宣言
delegate void Calculator (int other);

class Test {
    public static void Main() {
        var i = new Integer(5);
        // デリゲート変数（calculator）に複数のデリゲートを登録できる
        var calculator = new Calculator(i.Add) + new Calculator(i.Sub) + new Calculator(i.Mul);
        
        calculator(5);

        Console.WriteLine("-- 引き算を削除 --");

        // 登録したデリゲートを削除
        calculator -= new Calculator(i.Sub);
        
        calculator(10);

        Console.WriteLine("-- 足し算をさらに追加 --");
        
        // 足し算を更に追加する
	    calculator += new Calculator(i.Add);
	    
	    calculator(15);
    }
}

class Integer {
    public int val;
    public Integer(int n) {
        val = n;
    }
    public void Add(int n) {
        Console.WriteLine($"足し算します: {val + n}");
    }
    public void Sub(int n) {
        Console.WriteLine($"引き算します: {val - n}");
    }
    public void Mul(int n) {
        Console.WriteLine($"掛け算します: {val * n}");
    }
}
```

出力

```csharp
足し算します: 10
引き算します: 0
掛け算します: 25
-- 引き算を削除 --
足し算します: 15
掛け算します: 50
-- 足し算をさらに追加 --
足し算します: 20
掛け算します: 75
足し算します: 20
```

　

## さいごに

次回は冒頭にも書いたように、デリゲートの最新の記法についてもまとめていこうと思います。
また、ラムダ式、匿名関数などについても理解を深めたいのでそちらも書いていきます！