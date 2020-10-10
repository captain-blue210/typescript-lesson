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
/* Union
 複数の型のうちどれか
 Tuppleは型の組み合わせ
 Unionはor?
 ２つ以上の型もできる
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
