//Ejercicio 21

const inputName = document.getElementById("registro_nombre");
const inputEmail = document.getElementById("registro_email");
const inputComments = document.getElementById("registro_comentarios");
const inputPassword = document.getElementById("registro_password");

function validateName() {
  if (inputName.value.trim() === "") {
    alert("El campo Nombre es obligatorio.");
    return false;
  }
  return true;
}

function validateEmail() {
  if (inputEmail.value.trim() === "") {
    alert("El campo Email es obligatorio.");
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(inputEmail.value)) {
    alert("El campo Email debe ser una dirección de email válida.");
    return false;
  }
  return true;
}

function validateComments() {
  if (inputComments.value.trim() === "") {
    alert("El campo Comentarios es obligatorio.");
    return false;
  }
  if (inputComments.value.length > 50) {
    alert("El campo Comentarios no debe exceder los 50 caracteres.");
    return false;
  }
  return true;
}

function validatePassword() {
  if (inputPassword.value.length < 6) {
    alert("El campo Contraseña debe tener al menos 6 caracteres.");
    return false;
  }

  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /\d/;

  if (
    !lowercaseRegex.test(inputPassword.value) ||
    !uppercaseRegex.test(inputPassword.value) ||
    !digitRegex.test(inputPassword.value)
  ) {
    alert(
      "El campo Contraseña debe contener al menos una letra mayúscula, una minúscula y un número."
    );
    return false;
  }

  return true;
}

inputName.addEventListener("blur", validateName);
inputEmail.addEventListener("blur", validateEmail);
inputComments.addEventListener("blur", validateComments);
inputPassword.addEventListener("blur", validatePassword);

document
  .getElementById("registro")
  .addEventListener("submit", function (event) {
    const checkbox = document.getElementById("registro_condiciones");
    if (!checkbox.checked) {
      alert("Debe aceptar las condiciones de uso.");
      return false;
    }
    if (
      !validateName() ||
      !validateEmail() ||
      !validatePassword() ||
      !validateComments()
    ) {
      event.preventDefault();
    }
  });
