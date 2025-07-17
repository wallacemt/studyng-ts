enum StatusPedido {
  Pendente,
  Processando,
  Enviado,
  Entregue,
}

console.log(StatusPedido.Enviado); // 2

enum StatsuPedidoTextual {
  Pendente = "Pendente",
  Processando = "Processando",
  Enviado = "Enviado",
  Entregue = "Entregue",
}

console.log(StatsuPedidoTextual.Enviado); // Enviado

interface Usuario {
  name: string;
  status: StatsuPedidoTextual;
}

const usuario: Usuario = {
  name: "Wallace",
  status: StatsuPedidoTextual.Enviado,
};

// =========================================================================

type Tamanho = "P" | "M" | "G";

function selecionarTamanho(t: Tamanho) {
  console.log(`Tamanho selecionado: ${t}`);
}

selecionarTamanho("M");

// =========================================================================

const Cores = {
  Primaria: "#fff",
  Secundaria: "#ccc",
} as const;
type Cor = keyof typeof Cores;
function changeColor(cor: Cor) {
    console.log(`Voce escolheu: ${Cores[cor]}`)
}

changeColor("Primaria");