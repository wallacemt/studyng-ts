var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateProduct(product, updates) {
    return __assign(__assign({}, product), updates);
}
var usuarios = {
    ativo: ["Joao", "Maria"],
    inativo: ["Carlos"],
};
function saudacao(nome) {
    return nome;
}
