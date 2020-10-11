class Person {
    // default is public
    name: string
    private age: number

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`);
    }

    incrementAge() {
        this.age += 1;
    }
}

const steve = new Person('Steve', 32);
steve.greeting();
steve.incrementAge();
steve.greeting();
