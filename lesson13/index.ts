interface Product {
  nome: string;
  preco: number;
  estoque: number;
}

function updateProduct(product: Product, updates: Partial<Product>) {
  return { ...product, ...updates };
}

type ProductNoStock = Omit<Product, "estoque">;

type ProductNomeEstoque = Pick<Product, "nome" | "estoque">;

type Status = "ativo" | "inativo";

const usuarios: Record<Status, string[]> = {
  ativo: ["Joao", "Maria"],
  inativo: ["Carlos"],
};

type Tipos = "email" | "telefone" | "senha";

type Private = Exclude<Tipos, "senha">;
type Public = Extract<Tipos, "email">;

type PodeSerNulo = string | null;

type NaoNulo = NonNullable<PodeSerNulo>;

function saudacao(nome: string) {
  return nome;
}

type Return = ReturnType<typeof saudacao>;

type Parameteros = Parameters<typeof saudacao>;
