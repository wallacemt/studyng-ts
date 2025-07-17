function formatter(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return valor.toFixed(2);
}

class Usuario {
  constructor(public name: string) {}
}

function verificar(valor: unknown) {
  if (valor instanceof Usuario) {
    console.log(`nome:${valor.name}`);
  }
}

const user = new Usuario("Wallace");
verificar(user);

type Carro = { modelo: string };

type Moto = { cilindradas: number };

function mostrarInfo(veiculo: Carro | Moto) {
  if ("modelo" in veiculo) {
    console.log(veiculo.modelo);
  } else {
    console.log(veiculo.cilindradas);
  }
}

type Produto = { nome: string };

type Servico = { description: number };

function isProduct(obj: any): obj is Produto {
  return "nome" in obj;
}

function garantirTexto(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error("Não é uma string");
  }
}
