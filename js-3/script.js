// 3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

var numero = parseInt(prompt("Digite um número:"));

console.log("Números pares entre 1 e " + numero + ":");

for (var i = 1; i <= numero; i++) {
    // Verifica se o número é par
    if (i % 2 === 0) {
        console.log(i); // Exibe o número par no console
    }
}