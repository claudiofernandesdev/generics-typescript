class Person {
    constructor(
        public name: string,
        public age: number
    ) {}
}

const display = <T extends Person, U extends string|number>(person: T, prm2: U): void => {
    console.log(person.name, prm2);
}

const p1 = new Person('Adriana', 41)
display(p1, 'string');

class User extends Person {}
const user1 = new User('Cláudio', 47);
display(user1, 47);

// class Test {}
// const test = new Test();
// display(test, 2);