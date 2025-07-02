"use strict";
function identity(valor) {
    return valor;
}
identity("90");
function firstElement(array) {
    return array[0];
}
firstElement(["a", "a", "1"]);
firstElement([1, 2, 3]);
function welcome(obj) {
    return `Ola, ${obj.nome}`;
}
function combinations(a, b) {
    return [a, b];
}
combinations("a", 1);
function wrapInAray(value) {
    return value ? [value] : [];
}
