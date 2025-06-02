const idade: number = 18;

const nome: string = "Wallace";

const admin: boolean = true;

const nada: null = null;

const indefinida: undefined = undefined;

const numero: number = 12;

const user: unknown = "Wallace";

function soma(n1: number, n2: number) {
  return n1 + n2;
}

function exibeMenu(message: string) {
  console.log("Exibindo Menu...");
}

function lancaError(message: string): never {
  throw new Error(message);
}
