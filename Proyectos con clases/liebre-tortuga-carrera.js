class Probality {
    trow() {
        return parseInt((Math.random() * 100 + 1));
    }
}

class Turtle {
    constructor() {
        this.position = 0;
        this.probality = new Probality();
        this.saveNumProbality = 0;
    }

    steps() {
        let numProbality = this.probality.trow();

        if (numProbality <= 20) { // + 20
            this.saveNumProbality = numProbality;
            return this.position -= 6;
        }
        else if (numProbality <= 30) { // + 30
            this.saveNumProbality = numProbality;
            return this.position += 1;
        }
        else { // + 50
            this.saveNumProbality = numProbality;
            return this.position += 3;
        }
    }

    getPosition() {
        return this.position;
    }

    getNumProbality() {
        return this.saveNumProbality;
    }
}

class Liebre {
    constructor() {
        this.position = 0;
        this.probality = new Probality();
        this.saveNumProbality = 0;
    }

    steps() {
        let numProbality = this.probality.trow();

        if (numProbality <= 10) { // + 10
            this.saveNumProbality = numProbality;
            return this.position -= 12;
        }
        else if (numProbality <= 25) { // + 15
            this.saveNumProbality = numProbality;
            return this.position -= 2;
        }
        else if (numProbality <= 45) { // + 20
            this.saveNumProbality = numProbality;
            return this.position += 9;
        }
        else { // + 35
            this.saveNumProbality = numProbality;
            return this.position += 1;
        }
        // + 20 - Dormir
    }

    getPosition() {
        return this.position;
    }

    getNumProbality() {
        return this.saveNumProbality;
    }
}

let turtle = new Turtle();
let liebre = new Liebre();

do {
    console.log(`Tortuga: ${turtle.steps()} (${turtle.getNumProbality()}%)  |  Liebre: ${liebre.steps()} (${liebre.getNumProbality()}%)`);
} while (turtle.getPosition() < 100 && liebre.getPosition() < 100);

if (turtle.getPosition() >= 100 && liebre.getPosition() >= 100) {
    console.log("=== Empate ===");
}
else if (turtle.getPosition() >= 100) {
    console.log("=== Ganó la torutuga ===");
}
else {
    console.log("=== Ganó la liebre ===");
}
