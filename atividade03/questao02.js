const readline = require('readline-sync');

let valor = readline.question("Digite o valor: ");
valor = Number(valor);

let reajuste = valor*0.15;
let novoValor = valor+reajuste;

console.log("15% do valor é: " + reajuste + "\nO valor reajustado é de: R$" + novoValor);