// 1. FOR
// Use quando sabemos quantas vezes queremos repetir.
// inicio; condicao; atualizacao
for (let contador = 1; contador <= 5; contador++) {
	console.log(`For: repeticao ${contador}`);
}

// 2. WHILE
// Use enquanto uma condicao for verdadeira.
let numero = 1;

while (numero <= 5) {
	console.log(`While: numero ${numero}`);
	numero++;
}

// 3. DO...WHILE
// Executa o bloco pelo menos uma vez antes de verificar a condicao.
let tentativa = 1;

do {
	console.log(`Do...while: tentativa ${tentativa}`);
	tentativa++;
} while (tentativa <= 3);


// 4. CONTINUE E BREAK
for (let valor = 1; valor <= 10; valor++) {
	if (valor === 3) {
		continue; // pula o numero 3
	}

	if (valor === 7) {
		break; // encerra o laco ao chegar no numero 7
	}

	console.log(`Controle do laco: ${valor}`);
}
