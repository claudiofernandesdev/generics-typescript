function example<T>(value: T): T {
  return value;
}

// console.log(example<string>('Ok!'));
// console.log(example<number>(556));
// console.log(example<Boolean>(true));

const example2 = <T, U>(value: T, prm2: U): T => value;

console.log(example2<string, string>('Example', 'Ok!'));
console.log(example2<number, string>(7867, 'Ok!'));