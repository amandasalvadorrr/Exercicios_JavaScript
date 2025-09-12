const readline = require('readline-sync');

function ordenarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let qtd = Number(readline.question("Quantos números você irá inserir no array? "));

let numeros = []; 

for (let i = 0; i < qtd; i++) {
    let n = Number(readline.question("Insira o " + (i+1) + "º número: "));
    numeros.push(n); 
}

console.log("Array original:", numeros);

let ordenado = ordenarArray(numeros);

console.log("Array em ordem crescente:", ordenado);
