//Ejercicio 18

const muestraInformacion = (event) => {
  const mouse = document.getElementById("raton").querySelector("div");
  const keyboard = document.getElementById("teclado").querySelector("div");

  const mouseBox = mouse.parentElement;
  const keyboardBox = keyboard.parentElement;

  if (event.type === "mousemove") {
    mouseBox.style.backgroundColor = "#FFFFFF";
    keyboardBox.style.backgroundColor = "#FFFFFF";

    const messageMouse = `Navegador [${event.clientX}, ${event.clientY}] Página [${event.pageX}, ${event.pageY}]`;
    mouse.innerHTML = messageMouse;
  } else if (event.type === "keypress") {
    keyboardBox.style.backgroundColor = "#CCE6FF";

    const messageKeyboard = `Carácter [${event.key}] \n Código [${event.keyCode}]`;
    keyboard.innerHTML = messageKeyboard;
  } else if (event.type === "click") {
    mouseBox.style.backgroundColor = "#FFFFCC";
  }
};

document.addEventListener("mousemove", muestraInformacion);
document.addEventListener("keypress", muestraInformacion);
document.addEventListener("click", muestraInformacion);
