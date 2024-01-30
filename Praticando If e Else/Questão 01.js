//1 - Pergunta sobre Idade:
let idade = prompt("Qual é a sua idade?");

if (idade < 18) {
  console.log("Menor de idade");
} else if (idade < 65) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}