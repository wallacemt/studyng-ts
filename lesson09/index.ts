function identity<T>(valor: T): T {
  return valor;
}

identity<string>("90");

function firstElement<T>(array: T[]): T {
  return array[0];
}
firstElement<string>(["a", "a", "1"]);
firstElement<number>([1, 2, 3]);

interface Nome {
  nome: string;
}

function welcome<T extends Nome>(obj: T): string {
  return `Ola, ${obj.nome}`;
}

function combinations<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
combinations<string, number>("a", 1);

function wrapInAray<T = string>(value?: T): T[] {
  return value ? [value] : [];
}

