var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function LogClass(constructor) {
    console.log("Class criada: ".concat(constructor.name));
}
function LogMetodo(alvo, nomeMetodo, descritor) {
    var metodoOriginal = descritor.value;
    descritor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Chamando ".concat(nomeMetodo, " com os parametros: ").concat(args.join(", ")));
        return metodoOriginal.apply(this, args);
    };
}
function minLenght(tamanho) {
    return function (alvo, propriedade) {
        var valor = alvo[propriedade];
        var getter = function () { return valor; };
        var setter = function (novoValor) {
            if (novoValor.length < tamanho) {
                console.error("O tamanho do valor deve ser pelo meno ".concat(tamanho, " caracteres"));
            }
            else {
                valor = novoValor;
            }
        };
        Object.defineProperty(alvo, propriedade, {
            get: getter,
            set: setter,
        });
    };
}
function Log(tag) {
    return function (alvo, nome, descritor) {
        var original = descritor.value;
        descritor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("[".concat(tag, "] Chamando ").concat(nome, " com argumentos: ").concat(args.join(", ")));
            return original.apply(this, args);
        };
    };
}
var Produto = function () {
    var _classDecorators = [LogClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _zerarEstoque_decorators;
    var _adicionar_decorators;
    var Produto = _classThis = /** @class */ (function () {
        function Produto_1(nome) {
            this.nome = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _nome_initializers, void 0));
            __runInitializers(this, _nome_extraInitializers);
            this.nome = nome;
        }
        Produto_1.prototype.zerarEstoque = function (id) {
            console.log("Zerando Estoque do produto ".concat(this.nome, " com id ").concat(id));
        };
        Produto_1.prototype.adicionar = function (produto) {
            console.log("Adicionando ".concat(produto));
        };
        return Produto_1;
    }());
    __setFunctionName(_classThis, "Produto");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _nome_decorators = [minLenght(3)];
        _zerarEstoque_decorators = [LogMetodo];
        _adicionar_decorators = [Log("adicionarProduto")];
        __esDecorate(_classThis, null, _zerarEstoque_decorators, { kind: "method", name: "zerarEstoque", static: false, private: false, access: { has: function (obj) { return "zerarEstoque" in obj; }, get: function (obj) { return obj.zerarEstoque; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _adicionar_decorators, { kind: "method", name: "adicionar", static: false, private: false, access: { has: function (obj) { return "adicionar" in obj; }, get: function (obj) { return obj.adicionar; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Produto = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Produto = _classThis;
}();
var produto = new Produto("Camisa");
