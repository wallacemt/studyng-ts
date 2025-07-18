class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get preco() {
    return this._price;
  }

  set preco(price: number) {
    this._price = price;
  }

  get nome() {
    return this._name;
  }
  set nome(name: string) {
    this._name = name;
  }
}

const Monitor = new Product("Azus ", 4500);

console.log(Monitor.nome)

class ProductInStock{
    _nome: string;
    private price:number;
    private estoque:number;

    constructor( readonly nome: string, number:number, estoque:number){
        this._nome = nome;
        this.price = number;
        this.estoque = estoque

    }
    get preco() {
        return this.preco
    }

    getNome(){
        return this._nome
    }

    set preco(price: number) {
        this.price = price;
    }

    static zerarEstoque() {
        console.log(`O Produto ${this.name} foi zerado.`);
    }
}
