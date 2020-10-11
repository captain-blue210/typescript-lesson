"use strict";
var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I'm " + this.age + " years old.");
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    return Person;
}());
var steve = new Person('Steve', 32);
steve.greeting();
steve.incrementAge();
steve.greeting();
