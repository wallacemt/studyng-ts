var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "preco", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "nome", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var Monitor = new Product("Azus ", 4500);
console.log(Monitor.nome);
var ProductInStock = /** @class */ (function () {
    function ProductInStock(nome, number, estoque) {
        this.nome = nome;
        this._nome = nome;
        this.price = number;
        this.estoque = estoque;
    }
    Object.defineProperty(ProductInStock.prototype, "preco", {
        get: function () {
            return this.preco;
        },
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    ProductInStock.prototype.getNome = function () {
        return this._nome;
    };
    ProductInStock.zerarEstoque = function () {
        console.log("O Produto ".concat(this.name, " foi zerado."));
    };
    return ProductInStock;
}());
