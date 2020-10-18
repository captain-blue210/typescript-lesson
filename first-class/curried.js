/**
 * カリー化
 * 複数の引数をとる関数で
 * ・引数が「元の関数の最初の引数」
 * ・戻り地が「元の関数の残りの引数を取り、それを使って結果を返す関数」
 * にすること
 * */

// Pre-curried
{
    const multiply = (n, m) => n * m;
    console.log(multiply(2, 4)); // 8
}

// Curried
// Pre-curriedでn, m２つの引数をとってn * mしていたものを
// mを引数にとって、n * mする関数にした
{
    const withMultiple = (n) => {
        return (m) => n * m;
    };
    console.log(withMultiple(2)(4)); // 8
}

// Curried with double arrow
// 上のものがreturnのみなので、ブロックごと省略
{
    const withMultiple = (n) => (m) => n * m;
    console.log(withMultiple(2)(4)); // 8
}
