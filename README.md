[![Build Status](https://travis-ci.org/nkjm/shokuhin-db.svg?branch=master)](https://travis-ci.org/nkjm/shokuhin-db)

# 概要

食品のカロリー、栄養量を取得するためのライブラリです。
食品名をキーワードに問い合わせをおこない、該当する食品がデータベースにあればそのカロリー・栄養量が返されます。
食品のデーターベースは文部科学省が公開している[日本食品標準成分表2015年版](http://www.mext.go.jp/a_menu/syokuhinseibun/1365295.htm)のデータを利用しています。

# インストール

```
$ npm install shokuhin-db
```

# 利用方法

```
const shokuhinDb = require('shokuhin-db');

shokuhinDb.getNutrition('メロンパン')
.then(
    function(response){
        console.log(response);
    },
    function(error){
        console.log(error);
    }
);
```
