class Person {
    // default is public
    // name: string
    // private age: number

    // readonly
    readonly id: number = 32;
    // omit initilize process
    constructor(public readonly name: string, private age: number) {
        // readonly can overwrite in constructor.
        this.id = 45;
    }

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`);
    }

    incrementAge() {
        this.age += 1;
        // not overwrite readonly
        //this.id = 0;
    }
}

const steve = new Person('Steve', 32);
steve.greeting();
steve.incrementAge();
steve.greeting();
console.log(steve.id);
