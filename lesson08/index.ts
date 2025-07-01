function mostrar(valor: number): void;
function mostrar(valor: string): void;
function mostrar(valor: any): void {
  console.log(`Valor Recebido: ${valor}`);
}

function cadastrarUsuario(nome: string, idade: number): void;
function cadastrarUsuario(nome: any, idade: any): void {
  if (typeof nome === "string" && typeof idade === "number") {
    console.log(`Nome: ${nome} - Idade ${idade}`);
  }else {
      console.log(`Nome: ${nome} - Idade ${idade}`);
  }
}
