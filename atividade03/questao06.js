const readline = require('readline-sync');

let salario = readline.question("Informe o seu salário: R$");
salario = Number(salario);

let prestacao = readline.question("Informe o valor da prestação: R$");
prestacao = Number(prestacao);

porcentagemSalario = salario*0.2;

if(prestacao > porcentagemSalario){
    console.log("Empréstimo não pode ser concedido.");
}else {
    console.log("Empréstimo pode ser concedido.");
}