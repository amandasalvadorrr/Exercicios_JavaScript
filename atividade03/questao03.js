const readline = require('readline-sync');

let tempo = readline.question("Informe o tempo em horas: ");
tempo = Number(tempo);

let velocidadeMedia = readline.question("Informe a velocidade média (Km/h): ");
velocidadeMedia = Number(velocidadeMedia);

let distancia = tempo*velocidadeMedia;

console.log("A distância percorrida pelo veículo foi de: " + distancia + "Km");