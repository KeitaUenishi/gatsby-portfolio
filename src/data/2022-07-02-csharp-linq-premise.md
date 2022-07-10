---
id: "12"
title: "C# LINQ について 〜前提知識編〜"
date: "2022-07-02"
tags: [Csharp, backend]
---


普段の業務で、C#を使用したWebアプリケーション開発を行っています。

LINQについて、「とりあえずこうしときゃ思い通りになるやろ」みたいな感じでしか使えてなかった気がするので、自らの忘備録と兼ねて今回しっかりとまとめてみようと思います。

今回はLINQを扱う上で前提として知っておきたいC#の文法について記述しています。

僕のようなノリで使ってるけど理解があんまりだな……という方や、C#使い始めたばっかりでまだまだ全然理解できてないわ〜！ という方の参考になればと思います！

　

# LINQとは

公式（MSDN）より引用

> 統合言語クエリ (LINQ) は、C# 言語への直接的なクエリ機能の統合に基づくテクノロジのセットの名前です。
> これまでは、データに対するクエリは、コンパイル時の型チェックや IntelliSense のサポートがない単純な文字列として表現されてきました。
> さらに、SQL データベース、XML ドキュメント、さまざまな Web サービスなど、各種データ ソースの異なるクエリ言語を学習する必要があります。 LINQ では、クエリは、クラス、メソッド、イベントと同様に、ファースト クラスの言語コンストラクトです。 

これだけ見ると、なんのことを言っているのかさっぱりわかりませんねw

LINQはコレクション（配列やList、Dictionaryなど）の要素を処理するためのメソッドを集めたライブラリです。

「foreachのパワーアップ版」と表現されることもしばしばあります。主にループ処理などを簡潔に記述することができるのが大きなメリットです。

たとえば、以下のようなコードの場合

```csharp
List<string> morningNemu = new List<string>
{
    "お米",
    "クロワッサン",
    "納豆",
    "魚",
    "おみそ汁",
    "うどん",
    "ラーメン",
};

List<string> myList = new List<string>();
foreach (string s in morningNemu)
{
    int length = s.Length;
    if (length >= 3)
    {
        myList.Add(s);
    }
}

foreach (string eat in myList)
{
    Console.WriteLine(eat);
}
```

出力

```csharp
クロワッサン
おみそ汁
うどん
ラーメン
```

morningNemuの中から3文字以上のものを選択し、eatとして出力しています。

　

上記のようなコードは、LINQを使うことで非常にすっきりと読みやすくなります。

```csharp
List<string> morningNemu = new List<string>
{
    "お米",
    "クロワッサン",
    "納豆",
    "魚",
    "おみそ汁",
    "うどん",
    "ラーメン",
};

// 1行になる！
List<string> myList = morningNemu.Where(x => x.Length >= 3).ToList();

foreach (string eat in myList)
{
    Console.WriteLine(eat);
}
```

出力

```csharp
クロワッサン
おみそ汁
うどん
ラーメン
```

これだけ見ても爽快です。

ちなみに、LINQの書き方にはクエリ構文とメソッド構文があり、先程の書き方は**メソッド構文**になります。

同様の処理をクエリ構文で書き直すと

```csharp
List<string> morningNemu = new List<string>
{
    "お米",
    "クロワッサン",
    "納豆",
    "魚",
    "おみそ汁",
    "うどん",
    "ラーメン",
};

List<string> myList = (from x in morningNemu
                       where x.Length >= 3
                       select x)
					  .ToList();

foreach (string eat in myList)
{
    Console.WriteLine(eat);
}
```

このようになりました。SQLに似たような書き方や単語だったりしますが、LINQは**SQLとは一切関係が**ありません。

LINQ To SQLやLINQ To Entitiesなどといった、LINQを用いてデータベースにアクセスする機能もありますが、これらはC#およびLINQで書かれたプログラムをSQLに変換して動作してくれるものになります。

今回は、これらの機能については触れません。

基本的にはクエリ構文、メソッド構文どちらで記述してもいいのですが、今回はおそらくメジャーな（？）メソッド構文を用いていこうと思います！

　

## LINQの前に知っておきたい知識

まず、LINQについて知る前にC#の文法をいくつか知っておく必要があります。

- 型推論
- デリゲート
- 匿名メソッドとラムダ式
- 拡張メソッド

1記事書けそうな内容のものもあるため、以降はすこしざっくりと記述していきます。

　

### 型推論

変数宣言に`var` キーワードを用いて記述するもの。

右辺の式を評価して、自動的に変数の型を決めてくれます。

```csharp
// List<int> 型として変数testが定義される
var test = new List<int> { 1, 4, 5 }
```

　

### デリゲート

こちらに関しては、以前記事を書いています。

[https://uenishi.cloud/2022-03-29-charp-delegate-base/](https://uenishi.cloud/2022-03-29-charp-delegate-base/)

超ざっくりというと、「**メソッドや関数を格納する型**」を定義できる機能です。

以下のように型宣言を行い、そこにメソッドを代入する形で使用します。

```csharp
class Program
{
    delegate int TestDelegate(int a);

    static void Main(string[] args)
    {
        // TestDelegate型の変数にメソッドを代入する
        TestDelegate test = new TestDelegate(FuncA);

        int test2 = test(555);
        Console.WriteLine(test2);
    }

    static int FuncA(int a)
    {
        return a * 2;
    }
}
```

出力

```csharp
1110
```

　

デリゲートを使用するたびに型宣言を行うのは少々手間です。

そのため、標準で用意されているデリゲート型`Func<T, TResult>` によって以下のように書くことができます。

```csharp
class Program
{
    static void Main(string[] args)
    {
		//　引数int, 戻り値intの標準デリゲートにメソッドを代入
        Func<int, int> testFunc = FuncA;
        
		int result = testFunc(444);
        Console.WriteLine(result);
    }

    static int FuncA(int a)
    {
        return a * 2;
    }
}
```

　

`Func<T, TResult>` の`TResult`は戻り値の型を宣言しています。

戻り値がvoidのデリゲートを定義する場合は、Funcではなく`Action<T>` と宣言します。

```csharp
class Program
{
    static void Main(string[] args)
    {
		// 引数stringのデリゲート型を定義
        Action<string> testAction = FuncB;
        testAction("筋肉");
    }

    static void FuncB(string a)
    {
        Console.WriteLine($"{a}パワーーーー");
    }
}
```

出力

```csharp
筋肉パワーーーー
```

　

### 匿名メソッドとラムダ式

**匿名メソッド**

メソッドを定義する際、簡単な処理かつ使いまわすことがない処理であれば、都度定義するのは面倒です。

先ほどデリゲートで扱ったようなFuncA, FuncBなどのような処理があてはまります。

匿名メソッドを活用することで、先程のデリゲートの定義式は以下のように書くことができます。

```csharp
class Program
{
    static void Main(string[] args)
    {
		Func<int, int> testFunc = delegate (int a) {
            return a * 2;
        };

        int result = testFunc(444);
        Console.WriteLine(result);
    }
}
```

　

FuncAメソッドを記述する必要がなくなり、かなりコードがすっきりしました。

　

**ラムダ式**

ラムダ式は、匿名メソッドをさらに簡単に書けるようにしたものです。そのため、基本的に匿名メソッドでの記述はしません。

上の例をラムダ式で記述すると、以下のようになります。

```csharp
class Program
{
    static void Main(string[] args)
    {
		Func<int, int> testFunc = (int a) => {
            return a * 2;
        };

        int result = testFunc(444);
        Console.WriteLine(result);
    }
}
```

さらに省略すると、このようになります。

```csharp
class Program
{
    static void Main(string[] args)
    {
		Func<int, int> testFunc = (int a) => a * 2;

        int result = testFunc(444);
        Console.WriteLine(result);
    }
}
```

もういっちょ省略すると、ここまでになります。

```csharp
class Program
{
    static void Main(string[] args)
    {
		Func<int, int> testFunc = a => a * 2;

        int result = testFunc(444);
        Console.WriteLine(result);
    }
}
```

　

ラムダ式のテンプレートは

`(引数) => { return 引数を使った何らかの処理 }` 

で記述されます。

`=>` の右辺には、returnで返すメソッド内の処理が記述されています。

そして、{} と returnに関しては、処理が一行であれば省略が可能です。

そしてさらに最後の例で、引数の型指定がなくなりました。どうしてこうなるのかというと、前述した型推論によって、C#が空気を読んで右辺の式から型を決定してくれているためです。

個人的にですが、学習を始めた当初「=>」の意味が全くわからず、禍々しさまで感じていました。LINQの理解にはラムダ式がどういった式を表しているのかの理解が非常に重要です。

　

### 拡張メソッド

拡張メソッドとは、すでに作られたクラスに対してメソッドを追加することができる機能です。

構文としては、以下のように定義します。

```csharp
static [拡張メソッドの戻り値の型] [メソッド名](this 拡張対象のクラス,[引数], 引数２…) {
・・・処理・・・
}
```

　

例えば、IEnumerableインターフェースに対して、拡張メソッドを定義したい場合は以下のように記述します。listsに定義した文字列全てに、任意の文字列を追加する拡張メソッドです。

```csharp
class Program
{
    static void Main(string[] args)
    {
		IEnumerable<string> lists = new string[]
        {
            "お肉",
            "お野菜",
            "お魚"
        };

		lists = lists.AddText("食べます");

        foreach (var x in lists)
        {
            Console.WriteLine(x);
        }
    }
}

static class Extensions
{
    public static IEnumerable<string> AddText(this IEnumerable<string> list, string text)
    {
        foreach(string x in list)
        {
            yield return x + text;
        }
    }
}
```

出力

```csharp
お肉食べます
お野菜食べます
お魚食べます
```

　

LINQはそもそも、**IEnumerable＜T>型**の拡張メソッドです。

おそらく最も使用頻度が高いであろうWhereメソッドから確認していきます。

```csharp
public static IEnumerable<TSource> Where<TSource> (this IEnumerable<TSource> source, Func<TSource,bool> predicate);
```

とても長くてわかりづらいですが、左側から一つ一つ分解して見ていきます。

`public static`  ①

`IEnumerable<TSource>`  ② 戻り値の型。TSource(任意の型)のIEnumerable(コレクション)を返す。

`Where<TSource>`  ③ メソッド名<任意の型>

`(this IEnumerable<TSource> source,`  ④ 拡張対象のクラス。

`Func<TSource,bool> predicate);` ⑤ TSource(任意の型)を引数に取り、bool型を返すメソッドを引数predicateとして受け取る

となります。

　

Whereはコレクションを「任意の条件で抽出するメソッドです。

すなわち、コレクションひとつひとつの要素を、⑤で指定したメソッドの引数にして⑤のメソッドを実行し、戻り値がtrueとなるものを抽出する。という意味になります。

実際のWhereメソッド使用例から見てみましょう。

```csharp
lists = lists.Where(x => x == "お肉食べます");
```

コレクションひとつひとつ`x` を引数に、`x == "お肉食べます"` で一致するかどうか判定するメソッドの処理を記述しています。そして、その結果がtrueであれば判定対象であるコレクションを返します。

　

## まとめ

LINQの特徴や使い方などについても記述していこうとしましたが、めちゃくちゃ長くなりそうなので一旦ここまでとします。

この記事の続きとして、実用的なメソッドや使い方などについてもまとめていきたいと思います！

## 参考
https://docs.microsoft.com/ja-jp/dotnet/csharp/programming-guide/concepts/LINQ/

https://hikotech.net/post-449/#outline__4_1

https://qiita.com/nskydiving/items/c9c47c1e48ea365f8995