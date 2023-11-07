//Ejercicio 16

function anade() {
  const lista = document.getElementById("lista");

  const nuevoElemento = document.createElement("li");

  nuevoElemento.textContent = "Nuevo elemento";

  lista.appendChild(nuevoElemento);
}
