//Ejercicio 13

let fechaRegex = /\b\d{2}\/\d{2}\/\d{4}\b/;
console.log(fechaRegex.test("Nací el 05/04/1982 en Donostia.")); 

let emailRegex = /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
console.log(emailRegex.test("ejemplo@dominio.com"));
function escapeHTML(text) {
  let replacements = { "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
  for (let key in replacements) {
    let regex = new RegExp(key, "g");
    text = text.replace(regex, replacements[key]);
  }
  return text;
}

let nombreApellido = "John Smith";
let invertido = nombreApellido.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log(invertido);

let html =
  "<p>Hola mundo</p><script>console.log('Este es un script malicioso')</script><p>Adiós mundo</p>";
let sinScript = html.replace(/<script>.*?<\/script>/gs, "");
console.log(sinScript);
