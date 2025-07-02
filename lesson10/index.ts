type Status = "ativo" | "inativo" | "pendente";

function setStatus(s: Status) {
  console.log(`Status set to: ${s}`);
}

interface User {
  name: string;
  idade: number;
}

interface User {
  email: string;
}

const user: User = {
  name: "João",
  idade: 30,
  email: "joao@gmail.com",
};

interface Animal {
  nome: string;
  idade: number;
}

interface Cachorro extends Animal {
  raca: string;
  domestico: boolean;
}

type Pessoa = {
  nome: string;
};

type Client = Pessoa & {
  id: number;
};
