//Ejercicio 10

var cadena = prompt("Ingrese una cadena de texto");

function palindromo(cadena) {
  if (cadena == cadena.split("").reverse().join("")) {
    console.log("La cadena es un palíndromo");
  } else {
    console.log("La cadena no es un palíndromo");
  }
}

palindromo(cadena);
