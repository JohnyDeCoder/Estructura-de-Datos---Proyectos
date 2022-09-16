class Dice {
    trow() {
        return parseInt(Math.random() * 6 + 1);
    }
}

class Runner {
    constructor() {
        this.position = 0;
        this.dice = new Dice();
        this.saveNumDice = 0;
    }

    nextStep() {
        let numDice = this.dice.trow();

        if (numDice == 1) {
            // 1
            this.saveNumDice = numDice;
            return this.position += 3;
        }
        else if (numDice <= 4) {
            // 2, 3, 4
            this.saveNumDice = numDice;
            this.getNumDice(numDice);
            return this.position += 2;
        }
        else {
            // 5, 6
            this.saveNumDice = numDice;
            this.getNumDice(numDice);
            return this.position += 1;
        }
    }

    getPosition() {
        return this.position;
    }

    getNumDice() {
        return this.saveNumDice;
    }
}

let runner1 = new Runner();
let runner2 = new Runner();

do {
    console.log(`Corredor 1: ${runner1.nextStep()} (tira ${runner1.getNumDice()})  |  Corredor 2: ${runner2.nextStep()} (tira ${runner2.getNumDice()})`);
} while (runner1.getPosition() < 100 && runner2.getPosition() < 100);

if (runner1.getPosition() >= 100 && runner2.getPosition() >= 100) {
    console.log("=== Empate ===");
}
else if (runner1.getPosition() >= 100) {
    console.log("=== Ganó el primer corredor ===");
}
else {
    console.log("=== Ganó el segundo corredor ===");
}