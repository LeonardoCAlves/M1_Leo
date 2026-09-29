// Instale uma vez na pasta principal do projeto:
// npm install prompt-sync
//
// Execute a aula a partir da pasta principal:
// node .\02_aula\index.js


const nome = "Ana";
let idade = 18;
idade = 19;

const prompt = require("prompt-sync")();

const nomeDigitado = prompt("Digite seu nome: ");

console.log("Ola, " + nomeDigitado + "!");
console.log(`Seja bem-vindo, ${nomeDigitado}!`);




