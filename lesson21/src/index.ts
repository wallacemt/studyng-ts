function logMessage(message: string): void {
  console.log(message);
}

function execute(fn: (msg: string) => void): void {
  fn("Hello World");
}

execute(logMessage);
// ////////////////////////////////////////////////////////////////////////

function pipe<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C {
  return (a: A) => g(f(a));
}

const toUpper = (s: string) => s.toUpperCase();
const exclaim = (s: string) => `${s}!`;
const shout = pipe(toUpper, exclaim);

console.log(shout("typescript"));
// ////////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4];

function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

function multiply(n: number): number {
  return n * 2;
}

const doubled = map(numbers, (n) => multiply(n));

console.log(doubled);
////////////////////////////////////////////////////////////////////////

function sum(a: number) {
  return (b: number) => a + b;
}

const sumWith10 = sum(10);

console.log(sumWith10(5));

/////////////////////////////////////////////////////////////////////////////

const numbersRead: readonly number[] = [1, 2, 3, 4];

///////////////////////////////////////////////////////////////////////////

const pipeline = pipe(
  (n: number) => n + 1,
  (n: number) => n * n
);

console.log(pipeline(5));

///////////////////////////////////////////////////////////////////////////
