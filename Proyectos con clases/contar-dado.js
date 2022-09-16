class Dice {
    trow() {
        return parseInt(Math.random() * 6 + 1);
    }
}

let d1 = new Dice(), cara1 = 0, cara2 = 0, sum = 0, vecSumCaras = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// for (let i = 1; i <= 100; i++) {
//     cara = d1.trow();

//     vecSumCaras[cara - 1]++;
// }

// for (let i = 0; i < vecSumCaras.length; i++) {
//     console.log(`La cara ${i + 1} cayó: ${vecSumCaras[i]} veces`);
// }

// ----------------------------------------------------------------

for (let i = 1; i <= 100; i++) {
    sum = d1.trow() + d1.trow();

    vecSumCaras[sum - 2]++;
}

for (let i = 0; i < vecSumCaras.length; i++) {
    console.log(`La suma ${i + 1}, ${i + 1} cayó: ${vecSumCaras[i]} veces`);
}

// ----------------------------------------------------------------