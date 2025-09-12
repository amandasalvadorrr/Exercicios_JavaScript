let numeros = [10,11,12,13,14,15];
console.log(numeros);

let stringNumeros = numeros.join(", ");
console.log(stringNumeros);

numeros.reverse();
console.log(numeros);

let slice = numeros.slice(0, 2);
console.log(slice);

console.log(numeros.filter(n => n % 2 === 0));

console.log(numeros.map(n => n * n));

console.log(numeros.reduce((soma, n) => soma + n, 0));

nomes.forEach(n => console.log(n));