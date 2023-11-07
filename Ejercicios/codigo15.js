//Ejercicio 15

let mostrado = false;

function muestra() {
  const adicional = document.querySelector(".adicional");
  const enlace = document.querySelector(".enlace");

  if (!mostrado) {
    adicional.classList.remove("oculto");
    enlace.style.display = "none";
    mostrado = true;
  }
}
