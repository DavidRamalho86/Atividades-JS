//4- Pergunta sobre Classificação de Notas:
let nota = prompt("Digite uma nota de 0 a 100:");

if (nota < 60) {
  console.log("Reprovado");
} else if (nota < 75) {
  console.log("Regular");
} else if (nota < 90) {
  console.log("Bom");
} else {
  console.log("Excelente");
}