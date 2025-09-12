const readline = require('readline-sync');

let valorProduto = readline.question("Informe o valor do produto: R$");
valorProduto = Number(valorProduto);

lucroMaior = valorProduto*0.45;
lucroMenor = valorProduto*0.30;

valorVendaMaior = valorProduto+lucroMaior;
valorVendaMenor = valorProduto+lucroMenor;

if(valorProduto < 20){
    console.log("O valor da venda será de: R$" + valorVendaMaior);
}else{
    console.log("O valor da venda será de: R$" + valorVendaMenor);
}