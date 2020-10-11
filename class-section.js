"use strict";
var Person = /** @class */ (function () {
    // omit initilize process
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // default is public
        // name: string
        // private age: number
        // readonly
        this.id = 32;
        // readonly can overwrite in constructor.
        this.id = 45;
    }
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I'm " + this.age + " years old.");
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
        // not overwrite readonly
        //this.id = 0;
    };
    return Person;
}());
var steve = new Person('Steve', 32);
steve.greeting();
steve.incrementAge();
steve.greeting();
console.log(steve.id);
