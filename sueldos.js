let sueldo = 1000;

if (sueldo >= 1600) {
    sueldo *= 1.8;
    console.log("1");
}
else if (sueldo > 1450 && sueldo < 1600) {
    sueldo *= 1.10;
    console.log("2");
}
else if (sueldo > 1200 && sueldo < 1450) {
    sueldo *= 1.12;
    console.log("3");
}
else if (sueldo > 1000 && sueldo < 1200) {
    sueldo *= 1.15;
    console.log("4");
}
else {
    sueldo *= 1.18;
    console.log("5");
}

console.log(sueldo);