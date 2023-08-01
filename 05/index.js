const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaDosPares = 0;

for (let i of numeros) {
    if (i % 2 == 0) {
        somaDosPares += i
    }
}

console.log(somaDosPares)