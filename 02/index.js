const numeros = [54, 14, 26, 87, 195];
let resposta = -1;
for (let numero = 0; numero < numeros.length; numero++) {
    if (numeros[numero] === 10) {
        resposta = numero
        break
    }
}

console.log(resposta)