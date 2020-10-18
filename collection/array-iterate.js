const arr = [1,2,3,4,5,6,7,8,9];

// 対象の配列の要素ひとつひとつを任意に加工した新しい配列を返す
console.log(arr.map((n) => n * 2));
// 与えた条件に適合する要素だけを抽出した新しい配列を返す
console.log(arr.filter((n) => n % 3 === 0));
// 与えた条件に適合した最初の要素を返す。見つからなかった場合は undefind を返す
console.log(arr.find((n) => n > 4));
// 与えた条件に適合した最初の要素のインデックスを返す。見つからなかった場 合は -1 を返す
console.log(arr.findIndex((n) => n > 4));
// 「与えた条件をすべての要素が満たすか」を真偽値で返す
console.log(arr.every((n) => n !== 0));
// 「与えた条件を満たす要素がひとつでもあるか」を真偽値で返す
console.log(arr.some((n) => n >= 10));

const arr2 = [1,2,3,4,5];

// 第２引数にはarrの各要素が順番に入る。第1引数には前回の関数の実行結果が入る
console.log(arr2.reduce((n, m) => n + m));
console.log(arr2.sort((n, m) => n > m ? -1 : 1));
