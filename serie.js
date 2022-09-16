let n = 4, deno = 1, suma = 0, signo = 1;

for (let i = 1; i <= n; i++) {
    suma += 4 / deno * signo;
    signo *= -1;
}

console.log(suma);