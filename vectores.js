class Aleatorio {
    pick() {
        return parseInt((Math.random() * 15 + 1));
    }
}

let numAleatorio = new Aleatorio();

let vec = new Array();

for (let i = 0; i < 10; i++) {
    // vec.push(numAleatorio.pick());
    vec[i] = numAleatorio.pick();
}

console.log(vec);

let aux = vec[vec.length - 1];

for (let i = vec.length - 1; i >= 1; i--) {
    vec[i] = vec[i - 1];
}

vec[0] = aux;

console.log(vec);

// let aux = vec[0];

// for (let i = 0; i < vec.length; i++) {
//     vec[i] = vec[i + 1];
// }

// vec[vec.length - 1] = aux;

// console.log(vec);