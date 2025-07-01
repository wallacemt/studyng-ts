function dividir(num1: number, num2: number): number {
  return num1 / num2;
}

function showMessage(message: string, user?: string): void {
  const destino = user ?? "Usuario padrão";
  console.log(`Enviando para ${destino}: ${message}`);
}

function criarUsuario(nome = "Anônimo"): string {
  return `Usuario criado: ${nome}`;
}

function listarItems(titulo: string, ...items: string[]): void {
  console.log(titulo);
  for (const item in items) console.log(`- ${item}`);
  // items.forEach((item) => {
  //   console.log(`- ${item}`);
  // });
}

const inverter = (text: string): string => {
  return text.split("").reverse().join("");
};

console.log(inverter("TypeScript"));
