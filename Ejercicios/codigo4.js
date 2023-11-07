//Ejercicio 4
var valores = [true, 5, false, "hola", "adios", 2];

const string1 = valores[3];
const string2 = valores[4];

if (string1 > string2) {
  console.log(string1 + " es mayor que " + string2);
} else if (string2 > string1) {
  console.log(string2 + " es mayor que " + string1);
} else {
  console.log("Los dos strings son iguales");
}

const bool1 = valores[0];
const bool2 = valores[2];

let verdadero = bool1 || bool2;
let falso = bool1 && bool2;

console.log(verdadero);
console.log(falso);

let suma = valores[1] + valores[5];
let resta = valores[1] - valores[5];
let multiplicacion = valores[1] * valores[5];
let division = valores[1] / valores[5];
let modulo = valores[1] % valores[5];

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
