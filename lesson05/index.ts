interface Produto {
  nome: string;
  preco: number;
}

const camiseta: Produto = {
  nome: "Camisa Insider",
  preco: 50.99,
};

interface Pessoa {
  nome: string;
  idade: number;
  endereco?: string;
}

interface Carro {
  readonly modelo: string;
  readonly marca: string;
  readonly placa: string;
}

interface Animal {
  nome: string;
  idade: number;
}
interface Cachorro extends Animal {
  latir: (fala: string) => string;
}

interface Usuario {
  name: string;
  email: string;
  exibirInfo(): void;
}

class Cliente implements Usuario {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  exibirInfo(): void {
    console.log(`Nome: ${this.name}, Email: ${this.email}`);
  }
}

const client = new Cliente("Wallace", "2M4Z2@example.com");

client.exibirInfo();