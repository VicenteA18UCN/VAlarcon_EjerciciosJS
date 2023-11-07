//Ejercicio 12

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

let resultados = new Array(11).fill(0);

for (let i = 0; i < 36000; i++) {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;
  resultados[suma - 2]++;
}

console.log("Resultados de las sumas:");
for (let i = 2; i <= 12; i++) {
  console.log(`Suma ${i}: ${resultados[i - 2]} veces`);
}
