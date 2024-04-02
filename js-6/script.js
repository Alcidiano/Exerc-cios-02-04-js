// 6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

var letra = prompt("Digite uma letra:").toLowerCase();

if (letra.length === 1 && /^[a-zA-Z]$/.test(letra)) {
    
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log("A letra \"" + letra + "\" é uma vogal.");
    } else {
        console.log("A letra \"" + letra + "\" é uma consoante.");
    }
} else {
    console.log("Por favor, digite apenas uma letra.");
}