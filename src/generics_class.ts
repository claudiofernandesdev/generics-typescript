class Example<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const ex1 = new Example<string>('String_Value');
console.log(ex1.getValue());

const ex2 = new Example<number>(555);
console.log(ex2.getValue());

const ex3 = new Example(true);
console.log(ex3.getValue());
