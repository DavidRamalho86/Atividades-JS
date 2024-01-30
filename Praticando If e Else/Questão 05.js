//5- Pergunta sobre Tipo de Triângulo:
let lado1 = prompt("Digite o primeiro lado do triângulo:");
let lado2 = prompt("Digite o segundo lado do triângulo:");
let lado3 = prompt("Digite o terceiro lado do triângulo:");

if (lado1 == lado2 && lado2 == lado3) {
  console.log("Equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
  console.log("Isósceles");
} else {
  console.log("Escaleno");
}
