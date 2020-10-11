// 型
// 型注釈つき
let hello: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
let hasValue: boolean = true;
let count: number = 10;
let negative: number = -0.12;
console.log(hello);

// 型推論
let hello2 = 'hello2';
let hasValue2 = true;
let count2 = 10;

// 型推論が効かない場合もある


// オブジェクト
// person: object, person:{} はだいたい同じ意味。
// 上記は省略して型推論でよい
const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}
console.log(person.name);

// 配列に型
const fruits: string[] = ['apple','banana','orange'];

// Tuple型
// 複数種類の型をひとかたまりで扱う
// 型注釈が必要になる
const book: [string, number, boolean] = ['business', 1280, true];
// pushは可能。参照時にはエラー
book.push(21)

// Enum
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}
// 以下のようにも書ける。それぞれ0からの連番が入る
enum NewCoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

console.log(CoffeeSize.GRANDE) // -> GRANDE
console.log(NewCoffeeSize.GRANDE) // -> 2

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;


// any
// どんな型にもなる。基本使わないほうがよい。
let anything: any = true;
anything = 'hello';


/**
 * Union
 * 複数の型のうちどれか
 * Tuppleは型の組み合わせ
 * Unionはor?
 * ２つ以上の型もできる
 */
let unionType: number | string = 10;
// 数値を入れている場合はnumberのメソッドが使える
unionType.toString();
console.log(unionType);
// stringを入れるとstringのメソッドが使える
unionType = 'test'
unionType = unionType.toUpperCase();
console.log(unionType);

let unionTypeArray: (string | number)[] = [30, 'array'];
console.log(unionTypeArray[0]);

/**
 * Literal Type
 * TypeScriptはletではstring, constではLiteralを採用する
 * 型としてリテラルを使える
 */
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: clothSize
}

/**
 * 型エイリアス
 * 型を変数のように扱える
 */
type ClothSize = 'small' | 'medium' | 'large';
let clothSize2: ClothSize = 'large';

/**
 * 関数に型をつける
 * 引数、戻り値に型をつける
 * 引数は型注釈をつけないと、anyになってしまうので必ずつけたほうがよい
 */
function add(num1:number, num2:number):number {
    return num1 + num2;
}

// 戻り値なし(returnなし)はvoid
function sayHello(): void {
    console.log('Hello');
}

/**
 * 関数型を使う
 * 型注釈か、無名関数のどちらかに型注釈があればよい
 */
const anotheradd: (n1: number, n2: number) => number = add;

// アロー関数
const doubleNumber: (num: number) => number = num => num * 2;

// コールバック関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubleAndHandle(10, doubleNum => {
    return doubleNum;
})

/**
 * unknown型
 * anyと同じくなんでも代入できるが、使うときにtype ofで型をチェックする必要がある
 */
let unknownInput: unknown;
let anyInput: any;
let text: string;
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
function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is an Error!'));
