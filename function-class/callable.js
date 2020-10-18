// callable object type
{
    var add = function (n, m) {
        return n + m;
    };
    var subtract = function (n, m) { return n - m; };
    console.log(add(1, 2));
    console.log(subtract(7, 2));
}
// in-line
{
    var add = function (n, m) {
        return n + m;
    };
    var subtract = function (n, m) { return n - m; };
    console.log(add(3, 7));
    console.log(subtract(10, 8));
}
