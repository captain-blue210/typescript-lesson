// function declaration statement
{
    function add(n, m) {
        return n + m;
    }
    console.log(add(2, 4));
}
// function keyword expression
{
    var add_1 = function (n, m) {
        return n + m;
    };
    console.log(add_1(5, 7));
}
// arrow function expression
{
    var add_2 = function (n, m) { return n + m; };
    var hello = function () {
        console.log('Hello!');
    };
    console.log(add_2(8, 1));
    hello();
}
