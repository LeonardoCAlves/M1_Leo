// FUNCOES
// Uma funcao agrupa instrucoes para executar uma tarefa.

// 1. Criando uma funcao sem parametros.
function mostrarMensagem() {
  console.log("Estou aprendendo funcoes.");
}

// A funcao so executa quando e chamada usando parenteses.
mostrarMensagem();

// 2. Parametro e uma informacao que a funcao recebe.
function saudar(nome) {
  console.log("Ola, " + nome + "!");
}

// O valor enviado na chamada e chamado de argumento.
saudar("Ana");
saudar("Carlos");

// 3. return devolve um resultado para quem chamou a funcao.
function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(10, 5);
console.log("Resultado da soma:", resultado);

// Depois do return, a funcao termina.
function calcularDobro(numero) {
  return numero * 2;
  // Este console.log nunca sera executado.
}

console.log("Dobro:", calcularDobro(4));

// 4. Uma funcao pode receber varios parametros.
function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

const media = calcularMedia(8, 7);
console.log("Media:", media);

// 5. Parametro com valor padrao.
// Se o segundo argumento nao for enviado, percentual sera 0.
function calcularDesconto(preco, percentual = 0) {
  return preco - preco * percentual;
}

console.log("Preco sem desconto:", calcularDesconto(100));
console.log("Preco com desconto:", calcularDesconto(100, 0.1));

// 6. A funcao tambem pode devolver texto.
function classificarMedia(valor) {
  if (valor >= 7) {
    return "aprovado";
  }

  return "reprovado";
}

console.log("Situacao:", classificarMedia(media));

// 7. Arrow function: forma curta de escrever uma funcao.
const triplicar = (numero) => numero * 3;

console.log("Triplo:", triplicar(3));
