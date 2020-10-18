const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(3)(5)) // 15

/**
 * 関数の部分適用
 * カリー化されたことで、3倍する関数をつくっている
 * 一部を固定にして関数を使い回せる
 * withMultiple(3)(x)よりも、3倍部分を部分適用して、withMultiple(x)とすれば無駄がない
 */
const triple = withMultiple(3);
console.log(triple(4)); // 12
