const Person = function (name) {
  this.name = name;
  return this;
};
const kanae = Person.call({ gender: "f" }, "Kanae"); //{gender:'f'}をthisとして渡す
console.log(kanae); //{gender:'f',name:'Kanae'}

/**
 * thisの中身4つのパターン
 * 1. new 演算子をつけて呼び出したとき: 新規生成されるオブジェクト
 * 2. メソッドとして実行されたとき: その所属するオブジェクト
 * 3. 1・2 以外の関数[非 Strict モード]: グローバルオブジェクト
 * 4. 1・2 以外の関数[Strict モード]:undefined
 * */

// 1. new 演算子をつけて呼び出したとき: 新規生成されるオブジェクト
// new演算子は
const dump = function () {
  console.log("`this` is", this);
};
const obj = new dump(); // `this` is dump {}
console.log(obj); // dump {}
console.log(dump.prototype); // dump {}
console.log(obj !== dump.prototype); // true objはdumpとアドレスを共有しない新規のオブジェクト

// 2. メソッドとして実行されたとき: その所属するオブジェクト
const foo = {
  name: "Foo Object",
  dump() {
    console.log(this);
  },
};
foo.dump(); //{name:'FooObject',dump:[Function:dump]}

// 3. 1・2 以外の関数[非 Strict モード]: グローバルオブジェクト
//dump();
/**
 { name: 'Foo Object', dump: [Function: dump] }
`this` is <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
}
 *
 */

// 4. 1・2 以外の関数[Strict モード]:undefined
const Person2 = function (name) { this.name = name; return this; };
console.log(Person2('somebody')); // グローバルオブジェクトにnameプロパティが追加されてしまう

const Person3 = function (name) { 'use strict'; this.name = name; return this; };
console.log(Person3('somebody'));
