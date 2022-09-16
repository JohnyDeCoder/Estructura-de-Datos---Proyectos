class Random {
    generate() {
        return parseInt((Math.random() * 15 + 1));
    }
}

let numRandom = new Random();

let vec = new Array();

for (let i = 0; i < 9; i++) {
    vec[i] = numRandom.generate();
}

let aux = 0;

for (let i = vec.length - 1, j = 0; i >= parseInt(vec.length / 2); i--, j++) {
    aux = vec[i];
    vec[i] = vec[j];
    vec[j] = aux;
}