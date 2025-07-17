var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["Processando"] = 1] = "Processando";
    StatusPedido[StatusPedido["Enviado"] = 2] = "Enviado";
    StatusPedido[StatusPedido["Entregue"] = 3] = "Entregue";
})(StatusPedido || (StatusPedido = {}));
console.log(StatusPedido.Enviado); // 2
var StatsuPedidoTextual;
(function (StatsuPedidoTextual) {
    StatsuPedidoTextual["Pendente"] = "Pendente";
    StatsuPedidoTextual["Processando"] = "Processando";
    StatsuPedidoTextual["Enviado"] = "Enviado";
    StatsuPedidoTextual["Entregue"] = "Entregue";
})(StatsuPedidoTextual || (StatsuPedidoTextual = {}));
console.log(StatsuPedidoTextual.Enviado); // Enviado
var usuario = {
    name: "Wallace",
    status: StatsuPedidoTextual.Enviado,
};
function selecionarTamanho(t) {
    console.log("Tamanho selecionado: ".concat(t));
}
selecionarTamanho("M");
// =========================================================================
var Cores = {
    Primaria: "#fff",
    Secundaria: "#ccc",
};
function changeColor(cor) {
    console.log("Voce escolheu: ".concat(Cores[cor]));
}
changeColor("Primaria");
