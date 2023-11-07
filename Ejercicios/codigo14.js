//Ejercicio 14

const enlaces = document.querySelectorAll("a");
console.log("El número de enlaces es: " + enlaces.length);

const penultimoEnlace = enlaces[enlaces.length - 2];
console.log("El penúltimo enlace es: " + penultimoEnlace.href);

let cantidad = 0;
for (let i = 0; i < enlaces.length; i++) {
  if (enlaces[i].href == "http://prueba/") {
    cantidad++;
  }
}

console.log(
  "La cantidad de enlaces que apuntan a http://prueba/ es: " + cantidad
);

const parrafos = document.querySelectorAll("p")[2];
const enlacesParrafo = parrafos.querySelectorAll("a");
console.log(
  "El número de enlaces del tercer párrafo es: " + enlacesParrafo.length
);
