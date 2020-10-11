"use strict";
// 型
// 型注釈つき
var hello = 'hello';
var double = "hello";
var back = "hello";
var hasValue = true;
var count = 10;
var negative = -0.12;
console.log(hello);
// 型推論
var hello2 = 'hello2';
var hasValue2 = true;
var count2 = 10;
// 型推論が効かない場合もある
// オブジェクト
// person: object, person:{} はだいたい同じ意味。
// 上記は省略して型推論でよい
var person = {
    name: 'Jack',
    age: 21
};
console.log(person.name);
// 配列に型
var fruits = ['apple', 'banana', 'orange'];
// Tuple型
// 複数種類の型をひとかたまりで扱う
// 型注釈が必要になる
var book = ['business', 1280, true];
// pushは可能。参照時にはエラー
book.push(21);
// Enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
// 以下のようにも書ける。それぞれ0からの連番が入る
var NewCoffeeSize;
(function (NewCoffeeSize) {
    NewCoffeeSize[NewCoffeeSize["SHORT"] = 0] = "SHORT";
    NewCoffeeSize[NewCoffeeSize["TALL"] = 1] = "TALL";
    NewCoffeeSize[NewCoffeeSize["GRANDE"] = 2] = "GRANDE";
    NewCoffeeSize[NewCoffeeSize["VENTI"] = 3] = "VENTI";
})(NewCoffeeSize || (NewCoffeeSize = {}));
console.log(CoffeeSize.GRANDE); // -> GRANDE
console.log(NewCoffeeSize.GRANDE); // -> 2
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// any
// どんな型にもなる。基本使わないほうがよい。
var anything = true;
anything = 'hello';
/**
 * Union
 * 複数の型のうちどれか
 * Tuppleは型の組み合わせ
 * Unionはor?
 * ２つ以上の型もできる
 */
var unionType = 10;
// 数値を入れている場合はnumberのメソッドが使える
unionType.toString();
console.log(unionType);
// stringを入れるとstringのメソッドが使える
unionType = 'test';
unionType = unionType.toUpperCase();
console.log(unionType);
var unionTypeArray = [30, 'array'];
console.log(unionTypeArray[0]);
/**
 * Literal Type
 * TypeScriptはletではstring, constではLiteralを採用する
 * 型としてリテラルを使える
 */
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: clothSize
};
var clothSize2 = 'large';
/**
 * 関数に型をつける
 * 引数、戻り値に型をつける
 * 引数は型注釈をつけないと、anyになってしまうので必ずつけたほうがよい
 */
function add(num1, num2) {
    return num1 + num2;
}
// 戻り値なし(returnなし)はvoid
function sayHello() {
    console.log('Hello');
}
/**
 * 関数型を使う
 * 型注釈か、無名関数のどちらかに型注釈があればよい
 */
var anotheradd = add;
// アロー関数
var doubleNumber = function (num) { return num * 2; };
// コールバック関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(10, function (doubleNum) {
    return doubleNum;
});
/**
 * unknown型
 * anyと同じくなんでも代入できるが、使うときにtype ofで型をチェックする必要がある
 */
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello!';
unknownInput = 21;
unknownInput = true;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
/**
 * never型
 * 戻り値を絶対に返さないことを表す
 */
function error(message) {
    throw new Error(message);
}
console.log(error('This is an Error!'));
