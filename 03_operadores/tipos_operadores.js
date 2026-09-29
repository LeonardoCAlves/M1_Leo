// number: 
// tipo usado para representar numeros inteiros e decimais. 
// Exemplo: 42 ou 3.14.
// 
// Infinity: 
// valor numerico especial que representa infinito; ainda e do tipo number. 
// Exemplo: 1 / 0.
// 
// NaN: indica um calculo numerico invalido e tambem e do tipo number. 
// Exemplo: Number("ola").
// 
// string: sequencia de caracteres escrita entre aspas ou crases. 
// Exemplo: "Ola, turma!".
// 
// boolean: valor logico true ou false. 
// Exemplo: 10 > 5 resulta em true.
// 
// null: ausencia intencional de um valor. 
// Exemplo: const resposta = null.
// 
// undefined: valor de uma variavel que ainda nao recebeu um valor. 
// Exemplo: let nome;.
// 
// object: estrutura com propriedades formadas por chave e valor. 
// Exemplo: { nome: "Ana", idade: 20 }.
// 
// Array: lista ordenada de valores; em JavaScript, e um tipo especial de 
// object. Exemplo: [1, 2, 3].
// 
// function: bloco de codigo reutilizavel. 
// Exemplo: const somar = (a, b) => a + b.


const nota1 = 8;
const nota2 = 6;
const media = (nota1 + nota2) / 2;
const aprovado = media >= 7;

console.log({ media, aprovado });
console.log(typeof media, typeof aprovado);
console.log("5" === 5);


