const keyName = 'bar';
const baz = 65536

// オブジェクトのpropertyのkey, valueを動的に設定できる
const obj1 = {foo: 256, [keyName]: 4096, baz: baz};
console.log(obj1); // { foo: 256, bar: 4096, baz: 65536 }

// プロパティ名のshorthand
// 変数bazがプロパティのキー名に、値がプロパティ値になる
const obj2 = { baz };
console.log(obj2); // { baz: 65536 }

