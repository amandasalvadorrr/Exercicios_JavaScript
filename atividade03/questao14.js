function contarCaractere(str, caractere) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caractere) {
            contador++;
        }
    }
    return contador;
}
console.log("javascript");
console.log(contarCaractere("javascript", "a"));