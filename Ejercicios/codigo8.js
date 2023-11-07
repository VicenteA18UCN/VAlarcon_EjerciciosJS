//Ejercicio 8

var numero = prompt("Ingrese un número entero");

function esPar(numero) {
  if (numero % 1 != 0) {
    console.log("El numero no es entero");
  } else {
    if (numero % 2 == 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }
}

esPar(numero);
