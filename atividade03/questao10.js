const readline = require('readline-sync');

let n1 = Number(readline.question("Informe o primeiro número: "));
let n2 = Number(readline.question("Informe o segundo número: "));
let n3 = Number(readline.question("Informe o terceiro número: "));

let array = [n1, n2, n3];

console.log("Array original:", array);

let invertido = [array[2], array[1], array[0]];

console.log("Array invertido:", invertido);
