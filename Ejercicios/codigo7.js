//Ejercicio 7

var numero = prompt("Ingrese un número");
let factorial = 1;

if (numero < 0) {
  alert("El número no es válido");
} else {
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
}

console.log(factorial);
