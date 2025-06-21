"use strict";
const camiseta = {
    nome: "Camisa Insider",
    preco: 50.99,
};
class Cliente {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    exibirInfo() {
        console.log(`Nome: ${this.name}, Email: ${this.email}`);
    }
}
const client = new Cliente("Wallace", "2M4Z2@example.com");
client.exibirInfo();
