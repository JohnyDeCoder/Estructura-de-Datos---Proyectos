class Triangle {
    constructor(b, h) {
        this.b = b;
        this.h = h;
        this.arrayArea = [];
    }

    calculateArea() {
        let calculateArea = this.b * this.h / 2;

        this.arrayArea.push(calculateArea);

        return calculateArea;
    }

    getAreas() {
        return this.arrayArea;
    }
}

let triangle1 = new Triangle(4, 2);
let triangle2 = new Triangle(2, 2);


console.log(triangle1.calculateBH());
console.log(triangle2.calculateBH());

console.log(triangle1.calculateBH());