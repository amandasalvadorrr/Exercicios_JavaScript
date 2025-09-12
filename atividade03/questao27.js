function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.floor(Math.random() * 100));
        }
        matriz.push(linha);
    }
    return matriz;
}
console.log(criarMatriz(3, 4));