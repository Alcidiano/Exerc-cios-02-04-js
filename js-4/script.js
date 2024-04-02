// 4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.

var numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

console.log("Tabuada do " + numero + ":");

for (var i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}