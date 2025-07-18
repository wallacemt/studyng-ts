var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Usuario = /** @class */ (function () {
    function Usuario(nome, email) {
        this.nome = nome;
        this.email = email;
        this.email = email;
        this.nome = nome;
    }
    Usuario.prototype.exibirInfo = function () {
        console.log("Nome: ".concat(this.nome, ", Email: ").concat(this.email));
    };
    return Usuario;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(nome, email, permissoes) {
        var _this = _super.call(this, nome, email) || this;
        _this.permissoes = permissoes;
        return _this;
    }
    Admin.prototype.exibirPermissao = function () {
        console.log("Permissao: ".concat(this.permissoes));
    };
    return Admin;
}(Usuario));
var Relatorio = /** @class */ (function () {
    function Relatorio(name) {
        this.name = name;
        this.name = name;
    }
    Relatorio.prototype.exportar = function () {
        return this.name;
    };
    Relatorio.prototype.imprimir = function () {
        console.log("Relatorio: ".concat(this.name));
    };
    return Relatorio;
}());
var RelatorioMensal = /** @class */ (function (_super) {
    __extends(RelatorioMensal, _super);
    function RelatorioMensal(name) {
        return _super.call(this, name) || this;
    }
    return RelatorioMensal;
}(Relatorio));
