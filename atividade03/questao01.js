const readline = require('readline-sync');

let numero = readline.question("Digite um número: ");
numero = Number(numero);

let sucessor = numero+1;
let antecessor = numero-1;

console.log("O sucessor do número " + numero + " é " + sucessor);
console.log("O antecessor do número " + numero + " é " + antecessor);