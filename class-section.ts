class Person {
    name: string

    constructor(initName: string) {
        this.name = initName;
    }

    greeting(this: {name: string}) {
        console.log(`Hello! My name is ${this.name}`);
    }
}

const steve = new Person('Steve');
steve.greeting();
