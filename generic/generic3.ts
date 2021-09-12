function helloArray<T>(messages: T[]): T {
  return messages[0];
}

function helloTuple<T, K>(messages: [T, K]): T {
  return messages[0];
}

console.log(helloArray(['Hello', 'World'])); // string[]
console.log(helloArray(['Hello', 1])); // Array<string | number>
console.log(helloTuple(['Hello', 'World'])); // [string, string]
console.log(helloTuple(['Hello', 1])); // [string, number]
// console.log(helloTuple(['Hello', 'world', 1])); // Error