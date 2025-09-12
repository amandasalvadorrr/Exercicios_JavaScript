const readline = require('readline-sync');

let idade = readline.question("Informe a sua idade: ");
idade = Number(idade);

if(idade < 16){
    console.log("Não eleitor.");
}else if (idade >=18 && idade <=65){
    console.log("Eleitor obrigatório.");
}else {
    console.log("Eleitor facultativo.");
}