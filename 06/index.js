const numeros = [3, 4, 1, 8, 11, 7, 21];
let maior = numeros[0];

for (let num of numeros) {
    if (num > maior) {
        maior = num
    }
}

console.log(maior)