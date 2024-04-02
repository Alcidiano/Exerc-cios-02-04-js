// 7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.

var nota = parseFloat(prompt("Digite a nota:"));

if (nota >= 0 && nota <= 10) {
    console.log("A nota " + nota + " é válida.");
} else {
    console.log("Nota inválida! A nota deve estar entre 0 e 10.");
}