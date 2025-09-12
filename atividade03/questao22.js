let frutas = ["maçã", "banana", "laranja"];
console.log(frutas);
console.log(frutas[1]);
frutas.push("morango");
console.log(frutas);
frutas.shift();
console.log(frutas);

let numeros = [10, 20, 30];
numeros.push(40);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.unshift(5);
console.log(numeros);
numeros.shift();
console.log(numeros);

let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);
console.log(todasFrutas.slice(0, 2));
todasFrutas.splice(1, 1);
console.log(todasFrutas);
console.log(todasFrutas.indexOf("banana"));
console.log(todasFrutas.filter(f => f.startsWith("m")));
console.log(numeros.map(n => n * 2));
todasFrutas.forEach(f => console.log(f));