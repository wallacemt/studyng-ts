"use strict";
function mostrar(valor) {
    console.log(`Valor Recebido: ${valor}`);
}
function cadastrarUsuario(nome, idade) {
    if (typeof nome === "string" && typeof idade === "number") {
        console.log(`Nome: ${nome} - Idade ${idade}`);
    }
    else {
        console.log(`Nome: ${nome} - Idade ${idade}`);
    }
}
