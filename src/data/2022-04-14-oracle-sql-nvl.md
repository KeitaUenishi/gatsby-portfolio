---
id: "7"
title: "【Oracle】業務で使用するSQL【NVL関数】"
date: "2022-04-14"
tags: [sql, oracle]
---

　

業務で最近SQLを読み書きすることが増えてきたので、よく見るワードを忘備録として残して行こうと思います。

　

# NVL関数

NVLとは、Null Value Logicの略。NULLの値を別の値に変換する関数。

> **文法**
> 
> NVL ( expr1 , expr2 )
> return [ 第一引数の型、NULL、または、数値なら優先順位の高い数値型
> 
> **引数**
> 
> expr1	NULL を設定可能な式（数値式、文字列式、日付式、etc）
> expr2	数値式、文字列式、日付式
> expr_list	カンマで区切った式のリスト（2つ以上の値リスト）
> return
> 
> **戻り値**
> 
> 式 expr1 が NULL なら 式 expr2 の値、または、expr_list で最初の NULL 以外の値
> 
> **適用**
> 
> SQL および PL/SQL の両方で使用可能。
> 

公式リファレンスより抜粋 [https://www.shift-the-oracle.com/sql/functions/nvl-coalesce.html](https://www.shift-the-oracle.com/sql/functions/nvl-coalesce.html)

　

Oracleが独自に実装した関数で、Oracleでのみ使用できる。

使い方としては

- expr1 : NULLかどうかを調べる値を代入する
- expr2 : expr1がNULLの場合に返す値を指定する。データ型は**expr1と同じ型**に揃える。

　

使用例

以下のようなテーブルがあるとする

Person

| id | name | favorite_food_id |
| ---: | :---: | ---: |
| 1 | 太郎 | 1 |
| 2 | 次郎 | 2 |
| 3 | 三郎 | 3 |

food

| food_id | food |
| --- | --- |
| 1 | チャーハン |
| 2 | ラーメン |

このテーブルの情報を、SQLを実行して取得しようとすると

```sql
SELECT P.NAME
      ,NVL(F.FOOD_NAME, 'ありません') AS FOOD_NAME
  FROM PERSON P
       LEFT OUTER JOIN FOOD F
    ON P.favorite_food_id = F.food_id
```

出力結果

| NAME | FOOD_NAME |
| :---: | :---: |
| 太郎 | チャーハン |
| 次郎 | ラーメン |
| 次郎 | - |


以上のように、NULLの場合はデータが取れてこない。

　

これを、NVL関数を使って記述してみると

```sql
SELECT P.NAME
      ,NVL(F.FOOD_NAME, 'ありません') AS FOOD_NAME
  FROM PERSON P
       LEFT OUTER JOIN FOOD F
    ON P.favorite_food_id = F.food_id
```

| NAME | FOOD_NAME |
| :---: | :---: |
| 太郎 | チャーハン |
| 次郎 | ラーメン |
| 三郎 | ありません |


上記のように、NULLになるはずの値に決められた値を挿入することができる。