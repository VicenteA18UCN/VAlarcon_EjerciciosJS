//Ejercicio 17

const enlaces = document.querySelectorAll("a");

for (let enlace of enlaces) {
  enlace.addEventListener("click", function (event) {
    event.preventDefault();

    const div = enlace.previousElementSibling;

    if (div.style.display === "none") {
      div.style.display = "block";
      enlace.textContent = "Ocultar contenido";
    } else {
      div.style.display = "none";
      enlace.textContent = "Mostrar contenido";
    }
  });
}
