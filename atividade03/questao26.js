function converterMorse(morse) {
    let tabela = {
        ".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",".---":"j",
        "-.-":"k",".-..":"l","--":"m","-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t",
        "..-":"u","...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z"
    };
    return morse.split(" ").map(c => tabela[c] || "").join("");
}
console.log(converterMorse(".- -... -.-."));
console.log(converterMorse(".- -- .- -. -.. .-"));