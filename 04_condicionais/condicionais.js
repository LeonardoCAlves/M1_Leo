const idade = 17;

if (idade > 0 && idade < 16) {
  console.log("Nao pode seguir no processo.");
} else if (idade >= 16 && idade < 18) {
  console.log("Pode seguir com autorizacao.");
} else if (idade >= 18 && idade <= 65) {
  console.log("Pode seguir no processo.");
} else if (idade > 65) {
  console.log("Pode seguir com autorizacao.");
} else {
  console.log("Idade invalida.");
}
