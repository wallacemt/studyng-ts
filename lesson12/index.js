function formatter(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    }
    return valor.toFixed(2);
}
var Usuario = /** @class */ (function () {
    function Usuario(name) {
        this.name = name;
    }
    return Usuario;
}());
function verificar(valor) {
    if (valor instanceof Usuario) {
        console.log("nome:".concat(valor.name));
    }
}
var user = new Usuario("Wallace");
verificar(user);
function mostrarInfo(veiculo) {
    if ("modelo" in veiculo) {
        console.log(veiculo.modelo);
    }
    else {
        console.log(veiculo.cilindradas);
    }
}
function isProduct(obj) {
    return "nome" in obj;
}
function garantirTexto(valor) {
    if (typeof valor !== "string") {
        throw new Error("Não é uma string");
    }
}
