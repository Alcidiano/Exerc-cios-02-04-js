// 10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.

var numero = parseInt(prompt("Digite um número:"));

console.log("Números ímpares entre 1 e " + numero + ":");

for (var i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

var numero = parseInt(prompt("Digite um número:"));
var i = 1;

console.log("Números ímpares entre 1 e " + numero + ":");

while (i <= numero) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

let n1 = parseInt(prompt(`Digite um número`))
var nimpar = 0

while(npar < n1){
    npar++;
}if (n1 & 1){
    console.log(`O número escolhido (${n1}) é impar`)
}else {
    console.log(`O numero escolhido (${n1}) é par`)
}