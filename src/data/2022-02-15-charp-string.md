---
id: "5"
title: "C#での文字列の扱い方いろいろ"
date: "2022-02-15"
tags: [C#]
---
　
# 概要

C#で文字列を扱う際、通常のダブルクォーテーション「””」で囲う以外にもさまざまな記法があるので、忘備録としてまとめておきます。

　

## 文字列の前に「@」をつける

**逐語的リテラル文字列**と呼ばれる。

文字列を囲うダブルクォーテーションの前に「@」をつけることで、以下のように複数行の文字列が表現可能です。

```csharp
var str = @"SELECT *
		      FROM hoge h
		    INNER JOIN piyo p
		      ON h.id = p.id
		    WHERE h.id = 1";
```

　

## 文字列の前に「$」をつける

C#6.0から追加された機能。

**文字列補完式**と呼ばれている。

「@」ではなく「$」を使うと、文字列の中に変数を埋め込むことができます。

```jsx
var huga = "ほああああああ";

console.log($"こんにちは。お元気ですか{huga}！");
```

出力

```jsx
こんにちは。お元気ですかほああああああ！
```

この記述方法を「文字列補完式」と呼びます。

　

## 「$、@」を複合して使う

```csharp
public class Test{
    public static void Main(){
        var name = "田中";
        
        var text = $@"こんにちは。僕は{name}です。
						  よろしくお願いします。";
        System.Console.WriteLine("{0}", text);
    }
}
```

出力

```jsx
こんにちは。僕は田中です。
よろしくお願いします。
```

　

## StringBuilderを使う

現場に入って、はじめにアプリ側でSQLを生成する処理を見たときは、このStringBuilderクラスのAppendLineメソッドが使われていました。

```csharp
var sql = new StringBuilder();
sql.AppendLine(" SELECT");
sql.AppendLine("   id");
sql.AppendLine("  ,name");
sql.AppendLine(" FROM");
sql.AppendLine("   hoge h");
sql.AppendLine(" WHERE 1=1");
sql.AppendLine(string.Format("   AND h.id   = {0}", id));
sql.AppendLine(string.Format("   AND h.name = '{0}'", name));
```

上記のようなSQLは、＠や$を使用することで以下のように書けます。

SutringBuilderで記述するよりも可読性が非常に上がり、より自然な形でSQLが読み取れる様になりました。

```csharp
string sql = $@"
 SELECT
   id
   , name
 FROM
   hoge h
 WHERE 1=1
   AND h.id   = '{id}'
   AND h.name = {name}
";
```

　

パフォーマンス的にどう違ってくるのだろうと気になるところなので、また後日調べて投稿しようと思います。