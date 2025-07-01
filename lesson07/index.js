function dividir(num1, num2) {
    return num1 / num2;
}
function showMessage(message, user) {
    var destino = user !== null && user !== void 0 ? user : "Usuario padrão";
    console.log("Enviando para ".concat(destino, ": ").concat(message));
}
function criarUsuario(nome) {
    if (nome === void 0) { nome = "Anônimo"; }
    return "Usuario criado: ".concat(nome);
}
function listarItems(titulo) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    console.log(titulo);
    for (var item in items)
        console.log("- ".concat(item));
    // items.forEach((item) => {
    //   console.log(`- ${item}`);
    // });
}
var inverter = function (text) {
    return text.split("").reverse().join("");
};
console.log(inverter("TypeScript"));
