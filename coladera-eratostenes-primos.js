let vecPrimos = new Array(1000);

for (let i = 0; i < vecPrimos.length; i++) {
    vecPrimos[i] = true; // elementos inicializados a 1
}

for (let i = 2; i < vecPrimos.length; i++) {
    if (vecPrimos[i] === true) { // encontrar en el array solo elementos en 1 (true)
        console.log(i); // imprimir numeros primos

        for (let j = 2; i * j <= vecPrimos.length - 1; j++) { // hacer ciclo por el resto del array
            vecPrimos[i * j] = false;
        }
    }
}
