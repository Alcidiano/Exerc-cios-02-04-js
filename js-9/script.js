// 9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

var operacao = prompt("Digite a operação matemática que deseja realizar (+, -, *, /):");

// Solicita o primeiro número
var numero1 = parseInt(prompt("Digite o primeiro número:"));

// Solicita o segundo número
var numero2 = parseInt(prompt("Digite o segundo número:"));

switch (operacao) {
    case '+':
        console.log("Resultado: " + (numero1 + numero2));
        break;
    case '-':
        console.log("Resultado: " + (numero1 - numero2));
        break;
    case '*':
        console.log("Resultado: " + (numero1 * numero2));
        break;
    case '/':
     
    // Verifica se o divisor é zero antes de realizar a divisão
        if (numero2 !== 0) {
            console.log("Resultado: " + (numero1 / numero2));
        } else {
            console.log("Divisão por zero não é permitida.");
        }
        break;
    default:
        console.log("Operação inválida.");
    }