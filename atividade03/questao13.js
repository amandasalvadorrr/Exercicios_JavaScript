function investimento(C, i, t) {
    let montante = C * Math.pow((1 + i/100), t);
    return montante.toFixed(2);
}
console.log(investimento(1000, 2, 12));