//Ejercicio 6
var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

var dni = prompt("Ingrese su DNI sin letra");
var letra = prompt("Ingrese la letra de su DNI");

if (dni < 0 || dni > 99999999) {
  alert("El número proporcionado no es válido");
} else {
  var letraCalculada = letras[dni % 23];
  if (letraCalculada != letra) {
    alert("La letra o el número proporcionados no son correctos");
  } else {
    alert("El número de DNI y su letra son correctos");
  }
}
