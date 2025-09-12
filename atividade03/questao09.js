const readline = require('readline-sync');

function ordenarTresNumeros(a, b, c) {
    let numeros = [a, b, c];

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] > numeros[j]) {
                let temp = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }
        }
    }

    return numeros;
}

let n1 = Number(readline.question('Informe o primeiro numero: '));
let n2 = Number(readline.question('Informe o segundo numero: '));
let n3 = Number(readline.question('Informe o terceiro numero: '));

let resultado = ordenarTresNumeros(n1, n2, n3);

console.log("Ordem crescente:", resultado);
