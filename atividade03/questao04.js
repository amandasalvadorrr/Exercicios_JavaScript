const readline = require('readline-sync');

let numero = readline.question("Informe um número: ");
numero = Number(numero);

metadeNumero = numero/2;

if(numero > 20){
    console.log("A metade do número " + numero + " é " + metadeNumero);
} else {
    console.log("A metade do número não foi calculada porque ele não é maior que 20");
}