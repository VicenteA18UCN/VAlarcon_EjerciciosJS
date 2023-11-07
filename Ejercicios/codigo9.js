//Ejercicio 9

var cadena = prompt("Ingrese una cadena de texto");

function informacionCadena(cadena) {
  if (cadena == cadena.toUpperCase()) {
    console.log("La cadena está formada sólo por mayúsculas");
  } else if (cadena == cadena.toLowerCase()) {
    console.log("La cadena está formada sólo por minúsculas");
  } else {
    console.log("La cadena está formada por una mezcla de ambas");
  }
}

informacionCadena(cadena);
