//Ejercicio 19

document.addEventListener("click", function (event) {
  const posicion = document.querySelector(".posicion");

  const [width, height] = tamanoVentanaNavegador();
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  if (event.clientX < halfWidth && event.clientY < halfHeight) {
    posicion.textContent = "Has pulsado en la zona izquierda arriba.";
  } else if (event.clientX < halfWidth && event.clientY >= halfHeight) {
    posicion.textContent = "Has pulsado en la zona izquierda abajo.";
  } else if (event.clientX >= halfWidth && event.clientY < halfHeight) {
    posicion.textContent = "Has pulsado en la zona derecha arriba.";
  } else {
    posicion.textContent = "Has pulsado en la zona derecha abajo.";
  }
});
