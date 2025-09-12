const readline = require('readline-sync');

let numero1 = readline.question("Informe o primeiro número inteiro: ");
numero1 = Number(numero1);

let numero2 = readline.question("Informe o segundo número inteiro: ");
numero2 = Number(numero2);

let soma = numero1+numero2

if (soma > 10){
    console.log("O resultado da soma foi " + soma);
}else{
    console.log("O resultado da soma foi menor que 10");
}