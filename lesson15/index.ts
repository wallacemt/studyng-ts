class Usuario {
  constructor(public nome: string, public email: string) {
    this.email = email;
    this.nome = nome;
  }

  exibirInfo(): void {
    console.log(`Nome: ${this.nome}, Email: ${this.email}`);
  }
}

class Admin extends Usuario {
  constructor(nome: string, email: string, public permissoes: string[]) {
    super(nome, email);
  }

  exibirPermissao(): void {
    console.log(`Permissao: ${this.permissoes}`);
  }
}

interface Exportavel {
  exportar: () => string;
}
interface Imprimivel {
  imprimir: () => void;
}

abstract class Relatorio implements Exportavel, Imprimivel {
  constructor(public name: string) {
    this.name = name;
  }

  exportar() {
    return this.name;
  }

  imprimir() {
    console.log(`Relatorio: ${this.name}`);
  }
}

class RelatorioMensal extends Relatorio {
  constructor(name: string) {
    super(name);
  }
}
