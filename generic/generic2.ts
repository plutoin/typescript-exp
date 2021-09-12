function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("Mark", 39);
// function helloBasic<string, number>(message: string, comment: number): string
helloBasic(36, 39);
// function helloBasic<36, number>(message: 36, comment: number): 36