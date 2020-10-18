var Square = /** @class */ (function () {
    function Square(side) {
        var _this = this;
        this.name = 'square';
        this.getArea = function () { return new Rectangle(_this.side, _this.side).getArea(); };
        this.side = side;
    }
    return Square;
}());
