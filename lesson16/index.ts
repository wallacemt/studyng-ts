function LogClass(constructor: Function) {
  console.log(`Class criada: ${constructor.name}`);
}
function LogMetodo(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
  const metodoOriginal = descritor.value;

  descritor.value = function (...args: any[]) {
    console.log(`Chamando ${nomeMetodo} com os parametros: ${args.join(", ")}`);
    return metodoOriginal.apply(this, args);
  };
}

function minLenght(tamanho: number) {
  return function (alvo: any, propriedade: string) {
    let valor = alvo[propriedade];
    const getter = () => valor;
    const setter = (novoValor: string) => {
      if (novoValor.length < tamanho) {
        console.error(`O tamanho do valor deve ser pelo meno ${tamanho} caracteres`);
      } else {
        valor = novoValor;
      }
    };
    Object.defineProperty(alvo, propriedade, {
      get: getter,
      set: setter,
    });
  };
}

function Log(tag: string) {
  return function (alvo: any, nome: string, descritor: PropertyDescriptor) {
    const original = descritor.value;
    descritor.value = function (...args: any[]) {
      console.log(`[${tag}] Chamando ${nome} com argumentos: ${args.join(", ")}`);
      return original.apply(this, args);
    };
  };
}

@LogClass
class Produto {
  @minLenght(3)
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }

  @LogMetodo
  zerarEstoque(id: number) {
    console.log(`Zerando Estoque do produto ${this.nome} com id ${id}`);
  }

  @Log("adicionarProduto")
  adicionar(produto:string){
    console.log(`Adicionando ${produto}`);
  }
}
const produto = new Produto("Camisa");
