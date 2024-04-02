// 8. Escreva um programa em JavaScript que exiba os números de 1 a 100 no console. Utilize uma estrutura de repetição while, do-while ou for para percorrer os números de 1 a 100 e exibir cada número no console.

var i = 1;

for(var i = 1; i <=100; i++){
    console.log(i);
}

var i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}


for (var i = 1; i <= 100; i++) {
    console.log(i);
}

let g = 100

do{
    console.log(`valor de g:${g}`)
        g=g-5
}while(g >= 1)

let i = 1

for(let i = 0; 1 <=100; i+=5){
    console.log(i);
}

console.log("Números de 100 À 0 em ordem Decrescente:")

for(let i = 100; i >=0; i--){
    console.log(i);
}

var i = 100;

while(i >= 0){
    console.log(i);
    i-=3;
}